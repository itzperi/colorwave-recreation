import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const brands = [
    { src: "/lovable-uploads/69543e03-8cae-405f-828d-78f87b3a3f26.png", alt: "X" },
    { src: "/lovable-uploads/Img.png", alt: "Netflix" },
    { src: "/lovable-uploads/392160ea-cb64-41a3-8f33-daf05f12b51b.png", alt: "HBO" },
    { src: "/lovable-uploads/be559ba5-9f9d-4605-908a-eaaa678ee2dd.png", alt: "PayPal" },
    { src: "/lovable-uploads/images.png", alt: "Nike" },
    { src: "/lovable-uploads/64f88510-c64c-447a-936e-93fe17d091c6.png", alt: "Facebook" },
    { src: "/lovable-uploads/51d06bcd-6e45-4339-8c0c-eb052669d55e.png", alt: "Adidas" },
    { src: "/lovable-uploads/12f6417f-995d-4fc4-8ab5-259ade5c8d40.png", alt: "Yahoo" }
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
    <div className="py-12 bg-[#F3F0FF] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 max-w-2xl mx-auto">
          These Brands have experienced the proven effectiveness of
          <br />
          neuromarketing with measurable outcomes.
        </h2>
        
        <div 
          ref={containerRef}
          className="relative"
        >
          <motion.div 
            className="flex space-x-20 items-center"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => {
              const x = useSpring(useTransform(mouseX, [0, 1000], [0, 30]));
              const y = useSpring(useTransform(mouseY, [0, 1000], [0, 30]));

              return (
                <Link
                  key={`${brand.alt}-${index}`}
                  to="/explore"
                  className="block"
                >
                  <motion.div
                    style={{ x, y }}
                    whileHover={{ scale: 1.1 }}
                    className="w-32 md:w-40 h-24 flex-shrink-0"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Brands;