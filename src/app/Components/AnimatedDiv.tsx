import React from "react";
import * as motion from "framer-motion/client";

export const MotionDiv = ({ children, className }: { children: React.ReactNode,className?:string }) => {
  return (
    <>
      <motion.div
        className={className}
        initial={{ marginTop: "100px", opacity: 0 }}
        whileInView={{ marginTop: "0px", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        style={{
          transform: "translate(0px)",
          willChange: "transform",
              }}>{children}</motion.div>
    </>
  );
};
