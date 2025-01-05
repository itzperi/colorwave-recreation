import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Brands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const brands = [
    // Existing brands
    { src: "/lovable-uploads/544d7b65-566b-4657-a223-29c08cdfafb4.png", alt: "Brand X" },
    { src: "/lovable-uploads/8d50e6d3-810f-4689-9d54-2875a51187b0.png", alt: "Netflix" },
    { src: "/lovable-uploads/957c2345-68ab-4378-bddd-dd7f3cc7f558.png", alt: "HBO" },
    { src: "/lovable-uploads/fd72e4f1-e0eb-4484-9c43-6d7e9837d1ca.png", alt: "PayPal" },
    { src: "/lovable-uploads/0e89f90f-2ae2-416c-944b-6bcce2838119.png", alt: "Nike" },
    // New brands
    { src: "/lovable-uploads/94226ab9-122b-4ace-b2e0-2c4ca37d51c4.png", alt: "Brand 13" },
    { src: "/lovable-uploads/b1b642fb-86fd-47e6-a90e-c1f83b2ce4e5.png", alt: "Brand 14" },
    { src: "/lovable-uploads/c0490498-6065-453f-a000-fad9b611cb92.png", alt: "Brand 15" },
    { src: "/lovable-uploads/e96bb06b-a586-4c54-9ef3-ee7dc12d7e8a.png", alt: "Brand 17" },
    { src: "/lovable-uploads/f5d4da2e-dcd4-4a71-b23d-9352a2ce365e.png", alt: "Brand 18" },
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
            className="flex space-x-40 items-center" // Increased gap between brands
            animate={{ x: [0, -2400] }} // Increased animation width for more brands
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Slower animation
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
                  className="w-48 md:w-56 h-32 flex-shrink-0" // Increased size
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
