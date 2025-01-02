import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    phoneNumber: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      fullName: "",
      workEmail: "",
      company: "",
      phoneNumber: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-raastas-purple py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Contact us - let's work together to turn your vision into reality.
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Full Name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Work Email<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Enter your work email"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Message<span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white h-32"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="bg-raastas-light text-white px-8 py-3 rounded-lg hover:bg-raastas-accent transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ready to grow your business together?</h3>
              <p className="mb-4">Lets Connect</p>
              <button className="bg-raastas-light px-6 py-3 rounded-lg hover:bg-raastas-accent transition-colors">
                Book a Consultation →
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact & Availability</h3>
              <p>Email: info@raastas.com</p>
              <p>Monday to Friday: 9:00 AM to 10:00 PM</p>
              <p>Saturday & Sunday: 9:00 AM to 5:00 PM</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect with us on</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-raastas-light">
                  <img src="/lovable-uploads/512d52e2-ef42-457a-8cb6-97a2f00e4bd8.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-raastas-light">
                  <img src="/lovable-uploads/e3da94cd-b824-45e7-ab15-088835ea68ef.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-raastas-light">
                  <img src="/lovable-uploads/c0490498-6065-453f-a000-fad9b611cb92.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-raastas-light">
                  <img src="/lovable-uploads/7210acb8-d873-45a6-a2a1-1d6ec09ded9b.png" alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-raastas-light">
                  <img src="/lovable-uploads/08e7c8f4-eba7-4c3d-9f97-5581ca7ef694.png" alt="YouTube" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;