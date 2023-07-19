import { motion, useScroll } from "framer-motion";
import "./Progressbar.css";

export default function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
