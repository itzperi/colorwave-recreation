import { motion } from "framer-motion";

const industries = [
  { icon: "/lovable-uploads/7baef1a8-75f9-48e3-9c35-512538d1af8b.png", title: "Healthcare & Medical" },
  { icon: "/lovable-uploads/d1d603f2-c524-4fc1-9b74-5473b55ebb8b.png", title: "Technology & SaaS" },
  { icon: "/lovable-uploads/320d06ae-e5e7-48ba-9654-4c789780746c.png", title: "Construction" },
  { icon: "/lovable-uploads/bc7c5619-7547-497d-9f37-899ae29d1013.png", title: "Manufacturing Industry" },
  { icon: "/lovable-uploads/0417d3e8-1074-42b3-84ca-38a08e56801d.png", title: "Travel & Tourism" },
  { icon: "/lovable-uploads/6dd46eee-7094-4577-9f9e-7759ee3f039d.png", title: "Pharmaceutical Industry" },
  { icon: "/lovable-uploads/3905acf5-a7ed-46f6-a0aa-113abea93f2c.png", title: "Food & Beverages" },
  { icon: "/lovable-uploads/8c9a131d-e23c-4d99-b97b-2512772dcb47.png", title: "Automative" },
  { icon: "/lovable-uploads/e7f04bd7-61d4-4d9b-b5ba-1b999a6bcf48.png", title: "Finance & FinTech" },
  { icon: "/lovable-uploads/e930c640-e640-46e3-b4b9-4ef173444604.png", title: "Blockchain, Crypto & NFTs" },
  { icon: "/lovable-uploads/59867043-b643-4088-82ba-272650322f21.png", title: "Energy, Oil & Gas" },
  { icon: "/lovable-uploads/089348ff-56c6-4199-8c33-293df268dfe0.png", title: "Hospitality" }
];

const Industries = () => {
  return (
    <div className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Our Industry Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We've excelled our experience in a wide range of industries to bring valuable insights and provide our clients with the truly beneficial solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img src={industry.icon} alt={industry.title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-raastas-light text-white px-8 py-3 rounded-lg hover:bg-raastas-accent transition-colors">
            Meet Our Industry Specialist →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Industries;