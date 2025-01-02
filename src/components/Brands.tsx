import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Brands = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const { left, top } = ref.current?.getBoundingClientRect() || { left: 0, top: 0 };
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const brands = [
    { src: "/lovable-uploads/484f9fb0-4107-4356-b10d-3e315a1634d3.png", alt: "Coca-Cola" },
    { src: "/lovable-uploads/f5d4da2e-dcd4-4a71-b23d-9352a2ce365e.png", alt: "PepsiCo" },
    { src: "/lovable-uploads/7823b77e-587c-473d-89b3-9d4c6cd7f3c9.png", alt: "Mercedes" },
    { src: "/lovable-uploads/066c9235-68ac-449e-84da-3070ead75196.png", alt: "Google" },
    { src: "/lovable-uploads/ffab2ed1-6629-4e5d-93b7-e31ebc70234f.png", alt: "Apple" },
    { src: "/lovable-uploads/453c59b6-f0a0-42e1-9035-30e34c852853.png", alt: "Microsoft" },
    { src: "/lovable-uploads/b6acbd12-e2bc-48e8-9323-92708785b8d4.png", alt: "Pepsi" },
    { src: "/lovable-uploads/d2dc5b58-0d94-468e-9892-4f07b787cfae.png", alt: "Hyundai" },
  ];

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
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center relative"
        >
          {brands.map((brand, index) => {
            const x = useSpring(useTransform(mouseX, [0, 1000], [0, 30 * (index % 4 - 1.5)]));
            const y = useSpring(useTransform(mouseY, [0, 1000], [0, 30 * (Math.floor(index / 4) - 1)]));

            return (
              <motion.div
                key={brand.alt}
                style={{ x, y }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-32 md:w-40 h-20 flex items-center justify-center filter hover:brightness-110 transition-all duration-300"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Brands;