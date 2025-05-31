// src/pages/AboutUs.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHistory, FaBullseye, FaLightbulb, FaHandshake, FaShieldAlt, FaBuilding, FaAward } from 'react-icons/fa';

export default function AboutUs() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col items-center bg-neutral-light text-text-dark min-h-[calc(100vh-120px)]">

      <motion.section
        className="w-full py-12 md:py-16 bg-primary-blue text-text-light text-center shadow-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <motion.h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-4 text-white" variants={itemVariants}>
            About Techno Tec Systems
          </motion.h1>
          <motion.p className="text-sm md:text-lg font-poppins uppercase tracking-widest opacity-80 mb-2" variants={itemVariants}>
            A Legacy of Trust and Innovation
          </motion.p>
          <motion.p className="text-xl md:text-2xl font-opensans opacity-90 mb-4" variants={itemVariants}>
            Your Trusted Partner in Advanced Security and Surveillance
          </motion.p>
          <motion.p className="text-md md:text-lg font-opensans opacity-80" variants={itemVariants}>
            Pioneering excellence since 1999, we build secure foundations for a safer future.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            Our Journey: Two Decades of Innovation
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div className="md:w-1/2 text-left" variants={itemVariants}>
              <FaHistory className="text-accent-light text-6xl mb-4 mx-auto md:mx-0" />
              <h3 className="text-2xl font-poppins font-semibold text-primary-blue mb-4">From Humble Beginnings to Industry Leaders</h3>
              <p className="mb-4 text-text-dark">
                Established in 1999, Techno Tec Systems started with a clear vision: to provide unparalleled security solutions driven by technology and trust. What began as a passionate endeavor has evolved into an ISO 9001:2015 certified enterprise, renowned for our commitment to quality and customer satisfaction.
              </p>
              <p className="mb-4 text-text-dark">
                Over the past two decades, we have consistently adapted to the evolving landscape of security, incorporating the latest advancements in surveillance, access control, and alarm systems. Our journey is marked by successful partnerships, innovative product development, and a growing portfolio of clients across diverse sectors, including government, commercial, and over 1000 temples.
              </p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <img src="/images/pic.png" alt="Company History" className="rounded-xl shadow-lg w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-gradient-to-r from-primary-blue to-secondary-blue text-text-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-poppins font-bold mb-10 text-white" variants={itemVariants}>
            Our Guiding Principles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div className="p-8 bg-primary-blue/70 rounded-xl shadow-xl border border-accent-light" variants={itemVariants}>
              <FaBullseye className="text-accent-light text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">Our Mission</h3>
              <p className="text-lg opacity-90">
                To engineer and deliver state-of-the-art security and surveillance solutions that empower our clients with safety, control, and peace of mind, backed by relentless innovation and unwavering support.
              </p>
            </motion.div>
            <motion.div className="p-8 bg-primary-blue/70 rounded-xl shadow-xl border border-accent-light" variants={itemVariants}>
              <FaLightbulb className="text-accent-light text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">Our Vision</h3>
              <p className="text-lg opacity-90">
                To be the undisputed leader in security technology, recognized for our pioneering products, exceptional service, and our deep commitment to creating safer environments across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            Values That Drive Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={itemVariants} className="p-6 rounded-xl shadow-lg border border-neutral-medium bg-white hover:shadow-xl transition-all duration-300">
              <FaHandshake className="text-primary-blue text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Integrity</h3>
              <p className="text-sm">Upholding the highest ethical standards in all our operations.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 rounded-xl shadow-lg border border-neutral-medium bg-white hover:shadow-xl transition-all duration-300">
              <FaShieldAlt className="text-primary-blue text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Excellence</h3>
              <p className="text-sm">Committed to delivering superior quality and performance.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 rounded-xl shadow-lg border border-neutral-medium bg-white hover:shadow-xl transition-all duration-300">
              <FaBuilding className="text-primary-blue text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Customer Focus</h3>
              <p className="text-sm">Tailoring solutions to meet diverse client needs effectively.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-secondary-blue text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-3xl font-poppins font-bold mb-8 text-white" variants={itemVariants}>
            Our Accreditations
          </motion.h2>
          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-8" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div variants={itemVariants} className="flex items-center text-lg font-semibold text-white">
              <FaAward className="text-accent-light text-4xl mr-3" />
              ISO 9001:2015 Certified
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center text-lg font-semibold text-white">
              <FaBuilding className="text-accent-light text-4xl mr-3" />
              Serving 1000+ Temples & Government Bodies
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-poppins font-bold text-primary-blue mb-6"
            variants={itemVariants}
          >
            Partner with the Experts
          </motion.h2>
          <motion.p
            className="text-xl text-text-dark mb-8"
            variants={itemVariants}
          >
            Ready to secure your premises with trusted technology? Contact us for a personalized solution.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-secondary-blue hover:bg-primary-blue text-text-light text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}