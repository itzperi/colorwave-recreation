import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Partnering with Raastas completely transformed our business. Their deep insights into consumer behavior and data-driven approach helped us engage with our audience more authentically, leading to higher conversions and lasting brand loyalty. Their expertise in behavioral science has been a key driver of our success.",
  },
  {
    text: "Raastas has been a game-changer for us. Their deep understanding of consumer psychology and data-backed strategies enabled us to connect with our audience in a way that truly resonated. With their behavioral science-driven services, we've experienced consistent growth in both engagement and conversions.",
  },
  {
    text: "I can't praise Raastas enough. They took the time to deeply understand our customers' behaviors, and their data-driven, behavioral insights made all the difference. Our marketing strategies are now more targeted and impactful, fostering stronger connections with our audience.",
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-[#F3F0FF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">What clients says about us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;