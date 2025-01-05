import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/95f47f80-2a86-4a15-87e2-2ecf353a839b.png",
    title: "Brand and Identity",
    description: "Your name is the face of your business. A strong brand identity contributes largely to trust, acceptance, and recognition. Nimais provides personalized design services to ensure your brand looks unique across all platforms, creating a lasting experience with your audience."
  },
  {
    icon: "/lovable-uploads/c83f4aa6-3e88-4729-a6d3-3a2485bf94a3.png",
    title: "Business and Advertising",
    description: "Nimais creates presentations and advertising designs that leave a lasting impression. We captivate your audience, grab their attention, and communicate your message clearly to keep them engaged with your brand."
  },
  {
    icon: "/lovable-uploads/fba6acc4-eccb-4b88-93d1-a7fe5ea94b8a.png",
    title: "Packaging and Label",
    description: "Nimais creates packaging that serves as a powerful marketing tool. With the right design, your product will stand out on the shelves and attract your ideal customer, while also adding appeal and protection. Let us make your packaging memorable!"
  },
  {
    icon: "/lovable-uploads/96f480b3-999b-4e50-b785-ca8bbcc6c2b7.png",
    title: "Website & App",
    description: "Nimais understands that your website and app are key to your digital presence. Whether it's a landing page, app design, or banner ads, we create designs that connect with your audience and elevate your brand."
  },
  {
    icon: "/lovable-uploads/d132b28a-ecf7-4270-a834-cb1f8aa676fc.png",
    title: "Social Media Design",
    description: "Nimais knows that your brand's impact on social media starts with strong design. We create visuals and a unified brand identity that resonate with your audience and enhance your online presence."
  },
  {
    icon: "/lovable-uploads/bdce1d3c-4c73-403d-80e3-b32c4366a027.png",
    title: "Book & Magazine",
    description: "Nimais turns your stories and ideas into visually captivating books and magazines. We bring creativity and precision to our designs, ensuring they capture attention and engage readers."
  },
  {
    icon: "/lovable-uploads/c1f46c25-f479-437b-a5cf-8bb132a99111.png",
    title: "Content Writing Agency",
    description: "Nimais creates high-quality content that drives business success. From blog writing to SEO copy, we craft content that informs, engages, and converts your audience."
  },
  {
    icon: "/lovable-uploads/c8ac28cb-6640-4811-8187-95dcf76a1f05.png",
    title: "Video Production Service",
    description: "Nimais creates high-quality videos that bring your brand's vision to life. From product promotions to social media content, we combine creativity and technology to craft impactful stories that meet your business needs"
  },
  {
    icon: "/lovable-uploads/e96bb06b-a586-4c54-9ef3-ee7dc12d7e8a.png",
    title: "Illustration & Art",
    description: "Nimais brings your ideas to life with imaginative and creative illustrations that connect with your audience. Whether it's for personal projects or professional branding, our art goes beyond the ordinary to make a lasting impression."
  },
  {
    icon: "/lovable-uploads/206ebc38-556c-400a-a957-a561c8112654.png",
    title: "Clothing and Merchandise",
    description: "Nimais offers unforgettable custom designs for clothing and merchandise, including stickers, t-shirts, bags, and more. Our powerful artwork speaks directly to your audience and makes a lasting impact."
  },
  {
    icon: "/lovable-uploads/6aae43dd-2f95-4ec9-8418-0a947f0936b7.png",
    title: "Design",
    description: "Nimais creates designs that connect people to your brand. We craft meaningful visuals that tell your story, build trust, and engage your audience. Let us help your brand stand out and achieve real results."
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