import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0, scale = 1.1, rotate = 10, direction = "left" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0, // Element comes to its final position
      scale: 1, // Normalize scale when visible
      rotate: 0, // Reset any rotation when visible
      transition: {
        duration: 0.7, // Smooth transition duration
        delay: delay, // Delay for staggered animations
        type: "spring", // Use spring type for natural feel
        stiffness: 100, // Adjust stiffness for smoothness
        damping: 25, // Adjust damping for smooth deceleration
      },
    },
    hidden: {
      opacity: 0,
      x: direction === "left" ? -200 : 200, // Slide from left (-200) or right (200)
      scale: scale, // Start with a scaled effect (zoom out)
      rotate: rotate, // Add rotation when it's hidden
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
