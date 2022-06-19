import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const useScroll = (customClass?: string) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const classRef = useRef<string | null>();

  useEffect(() => {
    if (inView) {
      classRef.current = customClass;
      control.start("visible");
    } else {
      classRef.current = null;
      control.start("hidden");
    }
  }, [control, customClass, inView]);

  return {
    ref,
    animate: control,
    ...(customClass && !classRef.current && { className: customClass }),
  };
};

export default useScroll;
