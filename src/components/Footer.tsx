import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-raastas-purple text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Link to="/">
              <img 
                src="/lovable-uploads/94226ab9-122b-4ace-b2e0-2c4ca37d51c4.png" 
                alt="Raastas Logo" 
                className="h-40 w-auto mb-6"
              />
            </Link>
            <p className="text-sm mb-4">
              At Raastas, we are neuromarketing experts offering comprehensive digital marketing services to accelerate your business growth. By combining neuroscience insights with proven strategies, we enhance engagement, drive conversions, and build brand loyalty. Our services include SEO, content creation, data analytics, and tailored solutions. Additionally, we provide IT solutions, making us your all-in-one partner for digital success.
            </p>
            <p className="text-sm mb-2">Email: info@nimais.com</p>
            <p className="text-sm">
              Address: #28 1st floor, 1st Main Shivshankar Layout Khattigenhalli Yelahanka Bangalore 562114
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">Our core services</h3>
            {["Marketing", "Design", "Advertising", "Neuromarketing", "Website & App", "Software", "Sales & Leads", "Communications", "Services"].map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>→</span>
                <a href="#" className="hover:text-raastas-light transition-colors">{service}</a>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">About us</h3>
            {[
              "Our core values",
              "Our brands",
              "Our expert team",
              "Career opportunities",
              "Industries we serve",
              "Certifications & Awards",
              "Client success stories"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>→</span>
                <a href="#" className="hover:text-raastas-light transition-colors">{item}</a>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Legal & Resources</h3>
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Accessibility Statement",
                "Sitemap",
                "Articles & Blogs",
                "News"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span>→</span>
                  <a href="#" className="hover:text-raastas-light transition-colors">{item}</a>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-raastas-light transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-raastas-light transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-raastas-light transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-raastas-light transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Newsletter Signup</h3>
              <p className="text-sm">Stay updated with the latest insights and offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/60 flex-1"
                />
                <Button variant="outline" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Ready to grow your business?</h3>
              <Button variant="outline" className="w-full">
                Contact us today!
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">Copyright © 2025 Raastas.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;