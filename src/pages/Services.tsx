

const services = [
  {
    name: 'Burglar Alarm Systems',
    description: 'Robust and highly reliable protection for homes and businesses. Certified to IS2189:1999 standard by ET & DC, Govt. of India.',
    brands: ['DSC', 'Honeywell', 'Texecom'], // Based on brands list for security
  },
  {
    name: 'CCTV Camera Systems',
    description: 'Advanced surveillance solutions including IP, HD Analog, and smart analytics with remote monitoring capabilities.',
    brands: ['Honeywell', 'Dahua', 'Hikvision', 'Samsung', 'Sony CCTV', 'Axis Communications', 'UNV'], // Based on brands list
  },
  {
    name: 'Fire Alarm Systems',
    description: 'Early detection and warning systems crucial for safety and compliance in all types of premises.',
    brands: ['System Sensor', 'Ravel', 'GST', 'Apollo', 'Honeywell (Morley IAS)'], // Based on brands list
  },
  {
    name: 'Access Control & Interlocking Systems',
    description: 'Secure entry management, restricting access to sensitive areas and enhancing overall security.',
    brands: ['Honeywell Integrated Security', 'Spectra', 'HID', 'eSSL', 'BioMax'], // Based on brands list
  },
  {
    name: 'Time and Attendance Recorders',
    description: 'Efficient biometric and card-based solutions for accurate employee time management and productivity.',
    brands: ['eSSL', 'BioMax', 'Spectra'], // Common brands for access control often cover T&A
  },
  {
    name: 'Video Door Phones',
    description: 'Enhanced home or office security with visual verification and two-way communication at your entrance.',
    brands: [], // No specific brands listed
  },
  {
    name: 'Fire Fighting Systems',
    description: 'Integrated solutions for active fire suppression, including sprinklers, hydrants, and gas-based systems.',
    brands: [], // No specific brands listed
  },
  {
    name: 'Public Address (PA) Systems',
    description: 'Effective and clear communication systems for large spaces, auditoriums, and emergency announcements.',
    brands: ['JBL', 'Heinrich', 'Bosch', 'Yamaha', 'Ahuja'], // Based on brands list
  },
  {
    name: 'Networking Systems',
    description: 'Reliable and high-performance network infrastructure to support all integrated security and automation solutions.',
    brands: ['Cisco', 'Netgear', 'Commscope', 'D-Link', 'Netrack', 'Tenda', 'UTEPO'], // Based on brands list
  },
  {
    name: 'UPS / Inverter',
    description: 'Uninterrupted power supply solutions to ensure continuous operation of critical security systems during power outages.',
    brands: [], // No specific brands listed
  },
  {
    name: 'GPS',
    description: 'Advanced GPS tracking solutions for asset management and vehicle monitoring.',
    brands: [], // No specific brands listed
  },
  {
    name: 'HD TV Solutions & Video Wall',
    description: 'High-definition display solutions for surveillance monitoring centers and command rooms, ensuring clear visuals.',
    brands: ['Sony', 'HP', 'Dell', 'Samsung Display', 'LG Display', 'BenQ'], // Based on brands list
  },
];

export default function Services() {
  return (
    <div className="container mx-auto p-8 py-12">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 text-center">
        Our Comprehensive Security & Automation Solutions
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Techno Tec Systems offers a wide array of advanced security and automation products and services,
        tailored to meet the diverse needs of residential, commercial, industrial, and government clients.
        Our solutions ensure safety, efficiency, and peace of mind.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">{service.name}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            {service.brands.length > 0 && (
              <div>
                <p className="font-semibold text-gray-800 mb-2">Key Brands:</p>
                <div className="flex flex-wrap gap-2">
                  {service.brands.map((brand, bIndex) => (
                    <span key={bIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}