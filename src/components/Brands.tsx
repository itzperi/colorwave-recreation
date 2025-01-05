import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Brands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const brands = [
    { src: "/lovable-uploads/544d7b65-566b-4657-a223-29c08cdfafb4.png", alt: "Brand X" },
    { src: "/lovable-uploads/8d50e6d3-810f-4689-9d54-2875a51187b0.png", alt: "Netflix" },
    { src: "/lovable-uploads/957c2345-68ab-4378-bddd-dd7f3cc7f558.png", alt: "HBO" },
    { src: "/lovable-uploads/fd72e4f1-e0eb-4484-9c43-6d7e9837d1ca.png", alt: "PayPal" },
    { src: "/lovable-uploads/0e89f90f-2ae2-416c-944b-6bcce2838119.png", alt: "Nike" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="py-20 bg-[#F3F0FF] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-3xl mx-auto">
          These Brands have experienced the proven effectiveness of neuromarketing with measurable outcomes.
        </h2>
        
        <div 
          ref={containerRef}
          className="relative"
        >
          <motion.div 
            className="flex space-x-32 items-center" // Increased gap between brands
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Slower animation
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => {
              const x = useSpring(useTransform(mouseX, [0, 1000], [0, 30]));
              const y = useSpring(useTransform(mouseY, [0, 1000], [0, 30]));

              return (
                <motion.div
                  key={`${brand.alt}-${index}`}
                  style={{ x, y }}
                  whileHover={{ scale: 1.1 }}
                  className="w-40 md:w-48 h-24 flex-shrink-0" // Increased size
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Brands;