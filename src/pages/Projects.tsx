

const clients = [
  { name: 'Bharat Petroleum Corporation Ltd, Aviation Fueling Station Chennai Airport', service: 'CCTV' },
  { name: 'ISRO Thiruvananthapuram', service: 'CCTV' },
  { name: 'The Commissioner of Police Madurai', service: 'CCTV' },
  { name: 'TNSC BANK', service: 'Burglar Alarm' },
  { name: 'Sathiyam Television, Royapuram', service: 'CCTV/Access control/Biometric system, PA system' },
  { name: 'SHARON Solutions Ltd, Puducherry', service: 'CCTV, FIRE, Access control' },
  { name: 'Consulate General of Japan, Teynampet', service: 'CCTV, Access Control' },
  { name: 'Apex Laboratories Pvt Ltd, Guindy', service: 'CCTV, Fire' },
  { name: 'Micro Therapeutic Research Labs P Ltd, Coimbatore', service: 'CCTV, Fire, Access Control, PA System' },
  { name: 'Madras Security Printers, Tollgate', service: 'CCTV' },
  { name: 'Santhosh Super Stores, Anna Nagar', service: 'CCTV, Biometric' },
  { name: 'LATA Super Market, Velachery', service: 'CCTV' },
  { name: 'PONNU Super Market, Peravallur', service: 'CCTV' },
  { name: 'PONNU Super Market, Avadi', service: 'CCTV, Fire, PA System' },
  { name: 'Sri Venkateswara College of Engineering, Sriperumputhur', service: 'CCTV' },
  { name: 'Moon Vision Pvt Ltd, Chamiers Road', service: 'CCTV' },
  { name: 'Rajah Muthiah Hall, Egmore', service: 'CCTV' },
];

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
];

export default function Projects() {
  return (
    <div className="container mx-auto p-8 py-12">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 text-center">
        Our Valued Clients & Successful Projects
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        With over two decades of experience, Techno Tec Systems has proudly served a diverse clientele
        across various sectors, delivering reliable and custom-tailored security and automation solutions.
      </p>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Government & Major Institutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.filter(c => ['ISRO', 'Commissioner of Police', 'TNSC BANK', 'Consulate General of Japan', 'Bharat Petroleum'].some(keyword => c.name.includes(keyword))).map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
              <p className="text-gray-600 mt-2">Service Provided: <span className="font-medium text-blue-700">{client.service}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Temples Across India</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Proudly securing **more than 1000+ Temples** across India. Some of our key installations include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg shadow-inner">
          {temples.slice(0, 15).map((temple, index) => ( // Displaying first 15 for brevity
            <div key={index} className="text-md text-gray-700 bg-white p-3 rounded-md shadow-sm border border-gray-200">
              {temple}
            </div>
          ))}
          <div className="col-span-full text-center text-gray-600 mt-4 italic">
            ...and many more sacred sites.
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Commercial & Industrial Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.filter(c => !(['ISRO', 'Commissioner of Police', 'TNSC BANK', 'Consulate General of Japan', 'Bharat Petroleum'].some(keyword => c.name.includes(keyword)))).map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
              <p className="text-gray-600 mt-2">Service Provided: <span className="font-medium text-green-700">{client.service}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}