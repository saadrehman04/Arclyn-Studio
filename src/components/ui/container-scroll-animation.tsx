"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
  cardClassName,
  cardInnerClassName,
}: {
  titleComponent?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
  cardInnerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
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
    return isMobile ? [0.85, 0.95] : [1.02, 0.98];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.96]);
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -40]);

  return (
    <div
      className={`flex items-center justify-center relative p-1 sm:p-4 md:p-6 ${className || "py-4 md:py-8"}`}
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {titleComponent && <Header translate={translate} titleComponent={titleComponent} />}
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
      className="max-w-4xl mx-auto text-center mb-3 sm:mb-6"
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
      className={`mx-auto w-full transition-shadow duration-300 ${
        className ||
        "max-w-4xl h-[28rem] sm:h-[34rem] md:h-[38rem] border-2 sm:border-4 border-[#444444] p-2 sm:p-3 md:p-4 bg-[#18181b] rounded-[24px] sm:rounded-[30px] shadow-2xl"
      }`}
    >
      <div
        className={`h-full w-full overflow-hidden rounded-xl sm:rounded-2xl ${
          innerClassName || "bg-gray-100 dark:bg-zinc-900"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ContainerScroll;
