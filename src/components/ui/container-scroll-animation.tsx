"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Silky smooth spring interpolation for buttery 60/120fps motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.7,
    restDelta: 0.0005,
  });

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.98] : [0.93, 1.02];
  };

  // Enhanced 3D transforms: deeper initial tilt, Z-depth lift, and dynamic scale
  const rotateX = useTransform(smoothProgress, [0, 0.72], [26, 0]);
  const scale = useTransform(smoothProgress, [0, 0.72], scaleDimensions());
  const translateZ = useTransform(smoothProgress, [0, 0.72], [-140, 0]);
  const translateY = useTransform(smoothProgress, [0, 0.72], [30, -30]);
  const titleTranslateY = useTransform(smoothProgress, [0, 0.6], [0, -45]);
  const glareOpacity = useTransform(smoothProgress, [0, 0.45, 0.75], [0.4, 0.12, 0]);

  return (
    <div
      className="flex flex-col items-center justify-start relative px-2 sm:px-6 md:px-12 pt-0 pb-8 sm:pb-12"
      ref={containerRef}
    >
      <div
        className="pt-0 sm:pt-1 pb-8 w-full relative"
        style={{
          perspective: "1300px",
        }}
      >
        <Header translate={titleTranslateY} titleComponent={titleComponent} />
        <Card 
          rotateX={rotateX} 
          translateY={translateY} 
          translateZ={translateZ} 
          scale={scale}
          glareOpacity={glareOpacity}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: any }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center will-change-transform"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotateX,
  scale,
  translateY,
  translateZ,
  glareOpacity,
  children,
}: {
  rotateX: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  translateZ: MotionValue<number>;
  glareOpacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX,
        scale,
        y: translateY,
        z: translateZ,
        transformStyle: "preserve-3d",
      }}
      className="max-w-5xl mt-3 sm:mt-5 md:mt-6 mx-auto h-[32rem] sm:h-[38rem] md:h-[44rem] w-full border-2 sm:border-4 border-white/20 p-2 sm:p-3 bg-[#0B0F24]/90 rounded-[24px] sm:rounded-[32px] md:rounded-[38px] shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(6,182,212,0.18)] backdrop-blur-2xl relative will-change-transform"
    >
      {/* 3D Dynamic Top Glare Reflection */}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cyan-400/30 via-purple-400/10 to-transparent pointer-events-none rounded-t-[inherit] z-20"
      />

      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#070B1B] flex flex-col relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
