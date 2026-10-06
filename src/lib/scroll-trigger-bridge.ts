type LenisScrollEmitter = {
  on: (event: 'scroll', callback: () => void) => void;
  off: (event: 'scroll', callback: () => void) => void;
};

interface SharedScrollUpdate {
  count: number;
  callback: () => void;
}

const sharedUpdates = new WeakMap<LenisScrollEmitter, SharedScrollUpdate>();

export function subscribeScrollTriggerUpdate(
  lenis: LenisScrollEmitter,
  update: () => void,
) {
  let shared = sharedUpdates.get(lenis);
  if (!shared) {
    shared = { count: 0, callback: update };
    sharedUpdates.set(lenis, shared);
    lenis.on('scroll', shared.callback);
  }
  shared.count += 1;

  let released = false;
  return () => {
    if (released || !shared) return;
    released = true;
    shared.count -= 1;
    if (shared.count === 0) {
      lenis.off('scroll', shared.callback);
      sharedUpdates.delete(lenis);
    }
  };
}