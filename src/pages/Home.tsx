// src/pages/Home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
  // Only six prominent product/technology partner logos as requested.
  // Make sure you have uploaded all these images to public/images/product-brands/
  const productBrandLogos = [
    { name: 'Bosch', src: '/images/product-brands/bosch-logo.png' }, //
    { name: 'CP PLUS', src: '/images/product-brands/cpplus-logo.png' }, //
    { name: 'Dahua', src: '/images/product-brands/dahua-logo.png' }, //
    { name: 'Godrej', src: '/images/product-brands/godrej-logo.png' }, //
    { name: 'Hikvision', src: '/images/product-brands/hikvision-logo.png' }, //
    { name: 'Samsung', src: '/images/product-brands/samsung-logo.png' }, //
  ];

  // Duplicate the logos multiple times to create a seamless looping effect for the marquee
  // This ensures the animation doesn't have a visible gap before repeating
  const duplicatedLogos = [...productBrandLogos, ...productBrandLogos, ...productBrandLogos, ...productBrandLogos];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800">
      {/* Hero Section with Chennai Skyline */}
      <section className="text-center p-8 md:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden">
        {/* Subtle Chennai Skyline Background - Replace with actual image URL if available */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("http://googleusercontent.com/image_generation_content/92")' }} // Replace with a real Chennai skyline image if you have one
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight mb-4 drop-shadow-md">
            Techno Tec Systems
          </h1>
          <p className="text-2xl md:text-3xl text-indigo-700 font-semibold mb-6">
            Securing Chennai and Beyond with Advanced Technology Since 1999
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            As an ISO 9001:2015 certified company, Techno Tec Systems has been a trusted leader in manufacturing, marketing, and servicing cutting-edge security and surveillance solutions, serving diverse clients across Chennai, Tamil Nadu, and India.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
          >
            Explore Our Legacy
          </Link>
        </div>
      </section>

      {/* Services Overview Section (Enhanced) */}
      <section className="w-full bg-white py-12 px-8 md:px-12 lg:px-16 shadow-inner mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-8">Comprehensive Security & Automation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Burglar Alarm Systems</h3>
              <p className="text-gray-600 text-sm">Certified protection trusted by homes and businesses.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">CCTV Camera Systems</h3>
              <p className="text-gray-600 text-sm">Advanced surveillance with smart analytics and remote access.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Fire Alarm Systems</h3>
              <p className="text-gray-600 text-sm">Early detection systems for safety and regulatory compliance.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Access Control Systems</h3>
              <p className="text-gray-600 text-sm">Secure entry management for sensitive areas.</p>
            </div>
          </div>
          <Link
            to="/services"
            className="mt-10 inline-block text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
          >
            Explore Our Full Range of Services &rarr;
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Enhanced) */}
      <section className="w-full py-12 px-8 md:px-12 lg:px-16 bg-blue-700 text-white mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Techno Tec Systems Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-blue-800 shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Unmatched Experience</h3>
              <p className="text-blue-100">
                Over 20 years of expertise, securing Government, Commercial, and 1000+ Temples.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-800 shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Certified Quality</h3>
              <p className="text-blue-100">
                ISO 9001:2015 certified, ensuring the highest standards in security solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-800 shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Client-Focused Approach</h3>
              <p className="text-blue-100">
                Dedicated support, customized solutions, and a commitment to 100% client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Technology Partners Section - NOW WITH MARQUEE ANIMATION & NO BOXES */}
      <section className="w-full py-12 px-0 bg-blue-700 text-white mt-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Leading Technology Partners</h2>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container">
          <div className="marquee-content">
            {duplicatedLogos.map((logo, index) => (
              // Removed all box-related styling from this div, added mr-12 for spacing
              <div key={`product-${index}`} className="flex-shrink-0 mr-12">
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  // Removed grayscale and hover:grayscale-0 to display full color
                  className="object-contain transition-all duration-300" // Keep object-contain
                  style={{ height: '64px', width: '120px' }} /* Explicit height and width for consistency */
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Enhanced) */}
      <section className="w-full py-12 px-8 md:px-12 lg:px-16 text-center mt-12 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Secure Your Future Today</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let Techno Tec Systems design a tailored security solution to protect what matters most. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 inline-block"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}