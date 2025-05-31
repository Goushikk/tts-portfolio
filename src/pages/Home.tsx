// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaVideo, FaFire, FaFingerprint, FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const productBrandLogos = [
    { name: 'Bosch', src: '/images/product-brands/bosch-logo.png' },
    { name: 'CP PLUS', src: '/images/product-brands/cpplus-logo.png' },
    { name: 'Dahua', src: '/images/product-brands/dahua-logo.png' },
    { name: 'Godrej', src: '/images/product-brands/godrej-logo.png' },
    { name: 'Hikvision', src: '/images/product-brands/hikvision-logo.png' },
    { name: 'Samsung', src: '/images/product-brands/samsung-logo.png' },
  ];

  const duplicatedLogos = [...productBrandLogos, ...productBrandLogos, ...productBrandLogos, ...productBrandLogos];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col items-center bg-neutral-light text-text-dark">

      {/* Hero Section (NOW with solid background, no image) */}
      {/* Set background to neutral-light, remove image div and overlay div */}
      <section className="relative w-full py-20 md:py-24 lg:py-32 text-center overflow-hidden bg-neutral-light">
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12">
          {/* Adjusted text colors for contrast on light background */}
          <h1 className="text-5xl md:text-6xl font-poppins font-extrabold text-primary-blue leading-tight mb-4 drop-shadow-md">
            Techno Tec Systems
          </h1>
          <p className="text-2xl md:text-3xl font-poppins text-secondary-blue font-semibold mb-6">
            Securing Chennai and Beyond with Advanced Technology Since 1999
          </p>
          <p className="text-lg md:text-xl text-text-dark mb-8 max-w-3xl mx-auto">
            As an ISO 9001:2015 certified company, Techno Tec Systems has been a trusted leader in manufacturing, marketing, and servicing cutting-edge security and surveillance solutions, serving diverse clients across Chennai, Tamil Nadu, and India.
          </p>
          {/* Adjusted button colors to be visible on light background */}
          <Link
            to="/about"
            className="bg-secondary-blue hover:bg-primary-blue text-text-light text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
          >
            Explore Our Legacy
          </Link>
        </div>
      </section>

      {/* Rest of the Home.tsx content remains the same */}
      {/* Services Overview Section (with scroll animation) */}
      <motion.section
        className="w-full bg-white py-16 px-8 md:px-12 lg:px-16 shadow-inner"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-poppins font-bold text-secondary-blue mb-12"
            variants={itemVariants}
          >
            Comprehensive Security & Automation Solutions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={itemVariants} className="bg-neutral-light p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-secondary-blue">
              <FaShieldAlt className="text-secondary-blue text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Burglar Alarm Systems</h3>
              <p className="text-text-dark text-sm">Certified protection trusted by homes and businesses.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-neutral-light p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-accent-light">
              <FaVideo className="text-accent-light text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">CCTV Camera Systems</h3>
              <p className="text-text-dark text-sm">Advanced surveillance with smart analytics and remote access.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-neutral-light p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-secondary-blue">
              <FaFire className="text-secondary-blue text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Fire Alarm Systems</h3>
              <p className="text-text-dark text-sm">Early detection systems for safety and regulatory compliance.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-neutral-light p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-accent-light">
              <FaFingerprint className="text-accent-light text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Access Control Systems</h3>
              <p className="text-text-dark text-sm">Secure entry management for sensitive areas.</p>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/services"
              className="mt-12 inline-block text-secondary-blue hover:text-primary-blue font-semibold text-lg transition-colors"
            >
              Explore Our Full Range of Services &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-primary-blue text-text-light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-poppins font-bold mb-12"
            variants={itemVariants}
          >
            The Techno Tec Systems Advantage
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={itemVariants} className="p-8 rounded-xl bg-secondary-blue shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <FaAward className="text-accent-light text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-poppins font-semibold mb-2">Unmatched Experience</h3>
              <p className="text-text-light">
                Over 20 years of expertise, securing Government, Commercial, and 1000+ Temples.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-xl bg-secondary-blue shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <FaCheckCircle className="text-accent-light text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-poppins font-semibold mb-2">Certified Quality</h3>
              <p className="text-text-light">
                ISO 9001:2015 certified, ensuring the highest standards in security solutions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-xl bg-secondary-blue shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <FaUsers className="text-accent-light text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-poppins font-semibold mb-2">Client-Focused Approach</h3>
              <p className="text-text-light">
                Dedicated support, customized solutions, and a commitment to 100% client satisfaction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leading Technology Partners Section - Marquee animation */}
      <section className="w-full py-16 px-0 bg-accent-dark text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-text-light">Leading Technology Partners</h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            {duplicatedLogos.map((logo, index) => (
              <div key={`product-${index}`} className="flex-shrink-0 mr-12 p-2 bg-neutral-light rounded-lg shadow-md">
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  className="object-contain transition-all duration-300"
                  style={{ height: '64px', width: '120px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 text-center bg-neutral-light"
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
            Secure Your Future Today
          </motion.h2>
          <motion.p
            className="text-xl text-text-dark mb-8"
            variants={itemVariants}
          >
            Let Techno Tec Systems design a tailored security solution to protect what matters most. Contact us for a free consultation.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-secondary-blue hover:bg-primary-blue text-text-light text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              Request a Free Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}