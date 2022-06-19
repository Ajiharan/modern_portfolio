import React from "react";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

type Icon = {
  icon: any;
  duration: number;
};
const IconAnimation: React.FC<Icon> = ({ duration, icon }: Icon) => {
  return (
    <div className="hability">
      <motion.div
        {...useScroll()}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration } },
          hidden: { opacity: 0, y: -10 },
        }}
      >
        <img src={icon} alt="icon" />
      </motion.div>
    </div>
  );
};

export default IconAnimation;
