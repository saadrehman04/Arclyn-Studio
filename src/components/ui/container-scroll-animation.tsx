"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  cardClassName,
  cardInnerClassName,
  children,
}: {
  titleComponent: string | React.ReactNode;
  cardClassName?: string;
  cardInnerClassName?: string;
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

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.7], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.7], [0, -60]);

  return (
    <div
      className="min-h-[60rem] sm:min-h-[70rem] md:min-h-[82rem] flex items-start justify-center relative px-2 sm:px-6 md:px-12 pt-0 pb-2 sm:pb-6 md:pb-12"
      ref={containerRef}
    >
      <div
        className="pt-2 pb-6 sm:pb-10 md:pb-16 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale}
          className={cardClassName}
          innerClassName={cardInnerClassName}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  className,
  innerClassName,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate?: MotionValue<number>;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`max-w-5xl mt-8 sm:mt-12 md:mt-16 mx-auto h-[32rem] sm:h-[38rem] md:h-[44rem] w-full rounded-[24px] sm:rounded-[32px] md:rounded-[38px] shadow-2xl backdrop-blur-2xl ${className || 'border-2 sm:border-4 border-white/15 p-2 sm:p-3 bg-[#0B0F24]/90'}`}
    >
      <div className={`h-full w-full overflow-hidden rounded-xl sm:rounded-2xl flex flex-col relative ${innerClassName || 'bg-[#070B1B]'}`}>
        {children}
      </div>
    </motion.div>
  );
};
