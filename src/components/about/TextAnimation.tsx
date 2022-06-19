import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

type Text = {
  duration: number;
  element: ReactNode;
};
const TextAnimation: React.FC<Text> = ({ duration, element }: Text) => {
  return (
    <motion.div
      {...useScroll()}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0, transition: { duration } },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {element}
    </motion.div>
  );
};

export default TextAnimation;
