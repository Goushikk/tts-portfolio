// src/pages/Projects.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Icons for categorization and visual appeal
import { FaBuilding, FaCity, FaPlaceOfWorship, FaHandshake } from 'react-icons/fa'; // Removed unused imports: FaGlobe, FaCertificate, FaTools, FaCheckCircle, FaLaptopHouse, FaHeadset, FaMapMarkedAlt

export default function Projects() {
  // Framer Motion Variants for consistent animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const clientCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Your provided client data, enhanced with a 'type' for easier categorization
  const clients = [
    { name: 'Bharat Petroleum Corporation Ltd, Aviation Fueling Station Chennai Airport', service: 'CCTV', type: 'government' },
    { name: 'ISRO Thiruvananthapuram', service: 'CCTV', type: 'government' },
    { name: 'The Commissioner of Police Madurai', service: 'CCTV', type: 'government' },
    { name: 'TNSC BANK', service: 'Burglar Alarm', type: 'government' }, // Assuming TNSC Bank is government/public sector
    { name: 'Consulate General of Japan, Teynampet', service: 'CCTV, Access Control', type: 'government' },
    { name: 'Sathiyam Television, Royapuram', service: 'CCTV/Access control/Biometric system, PA system', type: 'commercial' },
    { name: 'SHARON Solutions Ltd, Puducherry', service: 'CCTV, FIRE, Access control', type: 'commercial' },
    { name: 'Apex Laboratories Pvt Ltd, Guindy', service: 'CCTV, Fire', type: 'commercial' },
    { name: 'Micro Therapeutic Research Labs P Ltd, Coimbatore', service: 'CCTV, Fire, Access Control, PA System', type: 'commercial' },
    { name: 'Madras Security Printers, Tollgate', service: 'CCTV', type: 'commercial' },
    { name: 'Santhosh Super Stores, Anna Nagar', service: 'CCTV, Biometric', type: 'commercial' },
    { name: 'LATA Super Market, Velachery', service: 'CCTV', type: 'commercial' },
    { name: 'PONNU Super Market, Peravallur', service: 'CCTV', type: 'commercial' },
    { name: 'PONNU Super Market, Avadi', service: 'CCTV, Fire, PA System', type: 'commercial' },
    { name: 'Sri Venkateswara College of Engineering, Sriperumputhur', service: 'CCTV', type: 'commercial' }, // Educational institutions often fall here
    { name: 'Moon Vision Pvt Ltd, Chamiers Road', service: 'CCTV', type: 'commercial' },
    { name: 'Rajah Muthiah Hall, Egmore', service: 'CCTV', type: 'commercial' },
  ];

  // Your provided temples data, with one new entry added
  const temples = [
    "Arunachaleswarar Thirukovil, Thiruvannamalai",
    "Ramanathaswamy Temple, Rameshwarm",
    "Thirumala Thirupathi Devastanam, Thiruvallur",
    "Arulmigu Ekambaranathar Temple, Kancheepuram",
    "Meenakshi Amman Temple, Madurai",
    "Sri Nithyakalyani Amman Temple, Villupuram",
    "Sri Murugan Temple, Vellore",
    "Arulmigu Vadapalani Andavar Temple, Chennai",
    "Arulmigu Marundeeswarar Temple, Chennai",
    "Arulmigu Kapaleeswarar Temple, Chennai",
    "Sri Balathandayuthapani Temple, Chengalpattu",
    "Sri Ranganathaswamy Temple, Srirangam",
  ];

  return (
    <div className="flex flex-col items-center bg-neutral-light text-text-dark min-h-[calc(100vh-120px)]">

      {/* Hero Section - Consistent with other pages */}
      <motion.section
        className="w-full py-12 md:py-16 bg-gradient-to-r from-primary-blue to-secondary-blue text-text-light text-center shadow-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <motion.h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-4 text-white" variants={itemVariants}>
            Our Valued Clients & Projects
          </motion.h1>
          <motion.p className="text-xl md:text-2xl font-opensans opacity-90 mb-4" variants={itemVariants}>
            A Legacy of Trust and Excellence in Security Solutions
          </motion.p>
          <motion.p className="text-md md:text-lg font-opensans opacity-80" variants={itemVariants}>
            With over two decades of experience, Techno Tec Systems has proudly served a diverse clientele across various sectors, delivering reliable and custom-tailored security and automation solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Government & Major Institutions Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            <FaCity className="inline-block text-5xl mb-2 mr-3 align-middle" /> Government & Major Institutions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {clients.filter(client => client.type === 'government').map((client, index) => (
              <motion.div key={index} variants={clientCardVariants} className="bg-white p-6 rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start text-left">
                <FaBuilding className="text-primary-blue text-4xl mb-3" /> {/* Icon for institutions */}
                <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">{client.name}</h3>
                <p className="text-sm font-opensans text-text-dark">Service Provided: <span className="font-medium text-secondary-blue">{client.service}</span></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Temples Across India Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-primary-blue text-text-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-white mb-10" variants={itemVariants}>
            <FaPlaceOfWorship className="inline-block text-5xl mb-2 mr-3 align-middle" /> Temples Across India
          </motion.h2>
          <motion.p className="text-xl font-opensans opacity-90 mb-8" variants={itemVariants}>
            Proudly securing **more than 1000+ Temples** across India. Some of our key installations include:
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary-blue/70 p-6 rounded-xl shadow-xl border border-accent-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {temples.map((temple, index) => (
              <motion.div key={index} variants={itemVariants} className="text-lg font-opensans text-text-light bg-primary-blue/80 p-4 rounded-lg shadow-md border border-accent-light/50">
                {temple}
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="col-span-full text-center text-accent-light mt-4 italic font-opensans">
              ...and many more sacred sites.
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Commercial & Industrial Clients Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            <FaHandshake className="inline-block text-5xl mb-2 mr-3 align-middle" /> Commercial & Industrial Clients
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {clients.filter(client => client.type === 'commercial').map((client, index) => (
              <motion.div key={index} variants={clientCardVariants} className="bg-white p-6 rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start text-left">
                <FaBuilding className="text-secondary-blue text-4xl mb-3" /> {/* Icon for commercial clients */}
                <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">{client.name}</h3>
                <p className="text-sm font-opensans text-text-dark">Service Provided: <span className="font-medium text-secondary-blue">{client.service}</span></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section - Consistent with other pages */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-secondary-blue text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-poppins font-bold text-white mb-6"
            variants={itemVariants}
          >
            Partner with a Trusted Security Expert
          </motion.h2>
          <motion.p
            className="text-xl text-text-light mb-8"
            variants={itemVariants}
          >
            Ready to discuss your security needs? Contact us for a free consultation.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-accent-light hover:bg-accent-dark text-primary-blue text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              Request a Free Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}