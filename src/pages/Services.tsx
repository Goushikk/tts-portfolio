// src/pages/Services.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCamera, FaFireAlt, FaDoorOpen, FaFingerprint, FaVideo, FaLightbulb, FaHeadset, FaTools, FaCheckCircle, FaLaptopHouse, FaMapMarkedAlt } from 'react-icons/fa';

export default function Services() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const processStepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col items-center bg-neutral-light text-text-dark min-h-[calc(100vh-120px)]">

      {/* Hero Section */}
      <motion.section
        className="w-full py-12 md:py-16 bg-gradient-to-r from-primary-blue to-secondary-blue text-text-light text-center shadow-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <motion.h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-4 text-white" variants={itemVariants}>
            Our Comprehensive Security Solutions
          </motion.h1>
          <motion.p className="text-xl md:text-2xl font-opensans opacity-90 mb-4" variants={itemVariants}>
            Protecting What Matters Most with Advanced Technology
          </motion.p>
          <motion.p className="text-md md:text-lg font-opensans opacity-80" variants={itemVariants}>
            From proactive alarms to intelligent surveillance, we offer a full spectrum of security services tailored to your needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Core Services Section */}
      <motion.section
        className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            Integrated Security for Every Environment
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Service Card 1: Burglar Alarm Systems */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaShieldAlt className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Burglar Alarm Systems</h3>
              <p className="text-sm text-text-dark mb-4">
                Certified protection trusted by homes and businesses. Our advanced alarm systems provide immediate alerts and deterrence against unauthorized intrusions, ensuring peace of mind.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">DSC</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Honeywell</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Texecom</span>
              </div>
            </motion.div>

            {/* Service Card 2: CCTV Camera Systems */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaCamera className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">CCTV Camera Systems</h3>
              <p className="text-sm text-text-dark mb-4">
                Advanced surveillance with smart analytics and remote access. Monitor your premises 24/7 with high-definition cameras, motion detection, and cloud storage options.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Honeywell</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Dahua</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Hikvision</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Samsung</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Sony CCTV</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Axis Communications</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">UNV</span>
              </div>
            </motion.div>

            {/* Service Card 3: Fire Alarm Systems */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaFireAlt className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Fire Alarm Systems</h3>
              <p className="text-sm text-text-dark mb-4">
                Early detection systems for safety and regulatory compliance. Protect your property and personnel from fire hazards with interconnected smoke, heat, and flame detectors.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">System Sensor</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Ravel</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">GST</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Apollo</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Honeywell (Morley IAS)</span>
              </div>
            </motion.div>

            {/* Service Card 4: Access Control & Interlocking Systems */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaDoorOpen className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Access Control & Interlocking Systems</h3>
              <p className="text-sm text-text-dark mb-4">
                Secure entry management for sensitive areas. Control who enters and exits your premises with biometric scanners, card readers, and robust software solutions.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Honeywell Integrated Security</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Spectra</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">HID</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">eSSL</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">BioMax</span>
              </div>
            </motion.div>

            {/* New Service Card 5: Time and Attendance Recorders */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaFingerprint className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Time and Attendance Recorders</h3>
              <p className="text-sm text-text-dark mb-4">
                Efficient biometric and card-based solutions for accurate employee time management and productivity.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">eSSL</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">BioMax</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Spectra</span>
              </div>
            </motion.div>

            {/* New Service Card 6: Video Door Phones */}
            <motion.div variants={serviceCardVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <FaVideo className="text-primary-blue text-6xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Video Door Phones</h3>
              <p className="text-sm text-text-dark mb-4">
                Enhanced home or office security with visual verification and two-way communication at your entrance.
              </p>
              <h4 className="text-md font-semibold text-text-dark mb-2">Key Brands:</h4>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-text-dark">
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Hikvision</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Dahua</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-300">Godrej</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section
        className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-primary-blue text-text-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-10 text-white" variants={itemVariants}>
            Our Seamless Service Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10">
            <motion.div variants={processStepVariants} className="flex flex-col items-center text-center p-6 bg-primary-blue/70 rounded-xl shadow-xl border border-accent-light">
              <FaLightbulb className="text-accent-light text-5xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">1. Consultation & Assessment</h3>
              <p className="text-lg opacity-90">
                We begin with a thorough understanding of your security needs and conduct a site assessment to identify vulnerabilities.
              </p>
            </motion.div>
            <motion.div variants={processStepVariants} className="flex flex-col items-center text-center p-6 bg-primary-blue/70 rounded-xl shadow-xl border border-accent-light">
              <FaTools className="text-accent-light text-5xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">2. Tailored Solution Design</h3>
              <p className="text-lg opacity-90">
                Based on the assessment, we design a customized, scalable, and cost-effective security solution using cutting-edge technology.
              </p>
            </motion.div>
            <motion.div variants={processStepVariants} className="flex flex-col items-center text-center p-6 bg-primary-blue/70 rounded-xl shadow-xl border border-accent-light">
              <FaCheckCircle className="text-accent-light text-5xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">3. Professional Installation & Support</h3>
              <p className="text-lg opacity-90">
                Our certified technicians ensure seamless installation, followed by comprehensive training and ongoing support.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us for Services Section */}
      <motion.section
        className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-secondary-blue mb-10" variants={itemVariants}>
            Why Choose Techno Tec for Your Security Needs?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <motion.div variants={itemVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300">
              <FaLaptopHouse className="text-primary-blue text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Unmatched Expertise</h3>
              <p className="text-sm">Over two decades of experience securing diverse environments from homes to government facilities.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300">
              <FaHeadset className="text-primary-blue text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Dedicated Support</h3>
              <p className="text-sm">Comprehensive after-sales support ensures your systems operate flawlessly 24/7.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-white rounded-xl shadow-lg border border-neutral-medium hover:shadow-xl transition-all duration-300">
              <FaMapMarkedAlt className="text-primary-blue text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-primary-blue mb-2">Customized Solutions</h3>
              <p className="text-sm">Solutions designed specifically for your unique security challenges and budget.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-secondary-blue text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready for Advanced Security?
          </motion.h2>
          <motion.p
            className="text-xl text-text-light mb-8"
            variants={itemVariants}
          >
            Contact us today for a free consultation and let us tailor a security solution that protects what matters most.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-accent-light hover:bg-accent-dark text-primary-blue text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
