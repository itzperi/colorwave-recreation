import { motion } from "framer-motion";

const serviceCategories = [
  {
    title: "Marketing",
    icon: "/lovable-uploads/86d2fbc7-995e-486e-aaf8-1ad4b83511af.png",
    services: [
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Influencer Marketing",
      "Content Marketing",
      "Video Marketing",
      "Social Media Marketing",
      "AI Marketing",
      "Affiliate Marketing",
      "Mobile Marketing"
    ]
  },
  {
    title: "Design",
    icon: "/lovable-uploads/bdefbef8-64f3-44b4-ac80-7d60af269347.png",
    services: [
      "Graphic Design",
      "Print Design",
      "Brand Activation",
      "Motion Graphics",
      "Video Production",
      "Web & UI/UX Design",
      "Custom Creative Projects"
    ]
  },
  {
    title: "Advertising",
    icon: "/lovable-uploads/2cd8be13-9eab-4e32-a456-4d5b360cc11c.png",
    services: [
      "Paid Media Campaigns",
      "PPC Marketing",
      "Media Planning & Buying",
      "Digital Advertising",
      "Conversion Rate Optimization (CRO)",
      "Google Ads Management"
    ]
  },
  {
    title: "Neuromarketing",
    icon: "/lovable-uploads/78e8d229-f962-485c-9a3c-c51162f76998.png",
    services: [
      "Neuromarketing Consultation",
      "Neuromarketing Research",
      "Neuro - Optimization",
      "Neuro - Advertising",
      "Neuro - Branding",
      "Neuro - Designing",
      "Neuro - Testing",
      "Neuro - Sales"
    ]
  },
  {
    title: "Website & App",
    icon: "/lovable-uploads/33e572cc-636e-463e-a8bf-b73475979995.png",
    services: [
      "Website Design",
      "Website Development",
      "Mobile App Design",
      "Mobile App Development",
      "WordPress Development",
      "E-Commerce Websites",
      "Search Marketing"
    ]
  },
  {
    title: "Softwares",
    icon: "/lovable-uploads/538c117e-e03b-4b79-82cf-f8bc85f6fe67.png",
    services: [
      "Software Development",
      "Software Maintenance",
      "Software Modernization",
      "Software Consulting",
      "MVP Development",
      "Application Development",
      "API Development",
      "Database Development"
    ]
  },
  {
    title: "Sales & Leads",
    icon: "/lovable-uploads/67d2c72b-b302-42b3-a559-7df334e890c8.png",
    services: [
      "Lead Generation",
      "Sales Lead Generation",
      "Sales Enablement",
      "Business Development",
      "Sales Development Representation"
    ]
  },
  {
    title: "Communications",
    icon: "/lovable-uploads/b3d9fdeb-cb93-489f-a7a9-df2b077b9342.png",
    services: [
      "Integrated Communications",
      "Online Reputation Management",
      "Public Relations (PR)",
      "Employer branding",
      "Shopper Marketing"
    ]
  },
  {
    title: "Services",
    icon: "/lovable-uploads/b5f3478b-ad9e-42a8-9506-ff11d8fb68ee.png",
    services: [
      "Content writing Services",
      "Amazon Marketing (DSP)",
      "Social Media Management",
      "Social Media Optimization",
      "Market Research"
    ]
  }
];

const Services = () => {
  return (
    <div className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a full-service marketing agency that combines science, art, and technology
            to deliver strategic solutions for your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img src={category.icon} alt={category.title} className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="flex items-center text-gray-600">
                    <span className="mr-2">›</span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;