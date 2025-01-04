import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png",
    title: "Brand and Identity",
    description: "Your name is the face of your business. A strong brand identity contributes largely to trust, acceptance, and recognition."
  },
  {
    icon: "/lovable-uploads/ec109d9c-26a1-4970-a8bb-d931efa8be1b.png",
    title: "Business and Advertising",
    description: "We create presentations and advertising designs that leave a lasting impression. We captivate your audience, grab their attention, and communicate your message clearly."
  },
  {
    icon: "/lovable-uploads/e0e231d4-b11a-4683-a7b5-0b9a9ed22b46.png",
    title: "Packaging and Label",
    description: "We create packaging that serves as a powerful marketing tool. With the right design, your product will stand out on the shelves and attract your ideal customer."
  },
  {
    icon: "/lovable-uploads/786dae31-2691-48a6-bf95-b33c48c14177.png",
    title: "Website & App",
    description: "We understand that your website and app are key to your digital presence. Whether it's a landing page, app design, or banner ads, we create designs that connect."
  },
  {
    icon: "/lovable-uploads/23cd5fe8-95c0-40ec-ab05-edc4153f9891.png",
    title: "Social Media Design",
    description: "We create visuals and a unified brand identity that resonate with your audience and enhance your online presence."
  },
  {
    icon: "/lovable-uploads/50f9ce5c-cfde-4383-9a6a-2c71af4c0bfe.png",
    title: "Book & Magazine",
    description: "We turn your stories and ideas into visually captivating books and magazines. We bring creativity and precision to our designs, ensuring they capture attention."
  },
  {
    title: "Content Writing Agency",
    description: "We create high-quality content that drives business success. From blog writing to SEO copy, we craft content that informs, engages, and converts your audience.",
    icon: "/lovable-uploads/fd0e5d9f-8d22-4096-badb-e989c3ca3f22.png"
  },
  {
    title: "Video Production Service",
    description: "We create high-quality videos that bring your brand's vision to life. From product promotions to social media content, we combine creativity and technology.",
    icon: "/lovable-uploads/96b118a2-83e2-4095-a55d-455d4f561a63.png"
  }
];

const CreativeServices = () => {
  return (
    <div className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Creative Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CreativeServices;