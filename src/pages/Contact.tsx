// src/pages/Contact.tsx
// Removed: import React from 'react'; // No longer needed for JSX
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';


// --- Map Container Styling ---
const containerStyle = {
  width: '100%',
  height: '450px', // Matches iframe height
  borderRadius: '0.75rem', // Tailwind's rounded-xl
  overflow: 'hidden',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Tailwind's shadow-xl
};


export default function Contact() {
  // Framer Motion Variants for consistent animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Define a MotionLink component by wrapping Link with motion
  const MotionLink = motion(Link);

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
            Get in Touch with Us
          </motion.h1>
          <motion.p className="text-xl md:text-2xl font-opensans opacity-90 mb-4" variants={itemVariants}>
            Your Security is Our Priority
          </motion.p>
          <motion.p className="text-md md:text-lg font-opensans opacity-80" variants={itemVariants}>
            Have a security need, a question about our services, or need a personalized quote? We're here to help.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Details & Form Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-neutral-light text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Contact Information Section */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-xl border border-neutral-medium">
            <h2 className="text-3xl font-poppins font-bold text-primary-blue mb-6">Contact Information</h2>
            <div className="space-y-6 text-lg font-opensans text-text-dark">
              <p className="flex items-center">
                <FaPhone className="text-secondary-blue mr-3 text-2xl" />
                <strong className="text-text-dark">Phone:</strong> <a href="tel:+9124336941" className="text-secondary-blue hover:underline ml-2">+91 24336941</a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-secondary-blue mr-3 text-2xl" />
                <strong className="text-text-dark">Email:</strong> <a href="mailto:technotecsystems@gmail.com" className="text-secondary-blue hover:underline ml-2">technotecsystems@gmail.com</a>
              </p>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-secondary-blue mr-3 text-2xl mt-1" />
                <div>
                  <strong className="text-text-dark">Address:</strong><br />
                  No: 24/1, New No-57<br />
                  Seshachalam Street, Saidapet<br />
                  Chennai, 600015<br />
                  Tamil Nadu, India
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-secondary-blue mr-3 text-2xl mt-1" />
                <div>
                  <strong className="text-text-dark">Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-xl border border-neutral-medium">
            <h2 className="text-3xl font-poppins font-bold text-primary-blue mb-6">Send Us a Message</h2>
            {/* Formspree endpoint updated here */}
            <form action="https://formspree.io/f/xeokjvep" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-text-dark text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-dark text-sm font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-dark text-sm font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-blue text-text-light py-3 rounded-md hover:bg-primary-blue transition duration-300"
              >
                <FaPaperPlane className="inline-block mr-2" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section - Now with Iframe */}
      <motion.section
        className="w-full py-16 px-8 md:px-12 lg:px-16 bg-primary-blue text-text-light text-center mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-poppins font-bold text-white mb-8" variants={itemVariants}>
            Find Us on the Map
          </motion.h2>
          <motion.div variants={itemVariants} className="relative w-full" style={containerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1872762027147!2d80.22332317610869!3d13.02374308729646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526705bb5cd673%3A0xf3586eeb545b8290!2sTechno%20Tec%20Systems!5e0!3m2!1sen!2sin!4v1748686354360!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>
          <motion.p variants={itemVariants} className="text-sm text-text-light mt-4 font-opensans">
            Having trouble viewing the map? <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1872762027147!2d80.22332317610869!3d13.02374308729646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526705bb5cd673%3A0xf3586eeb545b8290!2sTechno%20Tec%20Systems!5e0!3m2!1sen!2sin!4v1748686354360!5m2!1sen!2sin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline font-bold"
            >
              Get directions on Google Maps directly.
            </a>
          </motion.p>
        </div>
      </motion.section>

      {/* Call to Action Section - Consistent with other pages */}
      <motion.div
        className="py-8 md:py-12 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MotionLink
          to="/services"
          className="inline-block bg-primary-blue text-white py-3 px-8 rounded-md hover:bg-secondary-blue transition duration-300 font-opensans"
          variants={itemVariants}
        >
          Explore Our Services
        </MotionLink>
      </motion.div>
    </div>
  );
}
