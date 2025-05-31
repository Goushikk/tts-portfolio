
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// --- Map Configuration ---
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Approximate coordinates for Seshachalam Street, Saidapet, Chennai 600015
const center = {
  lat: 13.0333, // Latitude for Saidapet, Chennai
  lng: 80.2222  // Longitude for Saidapet, Chennai
};

const mapOptions = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
};

export default function Contact() {
  // --- IMPORTANT: Replace 'YOUR_Maps_API_KEY' with your actual API key ---
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_Maps_API_KEY', // <--- YOU MUST REPLACE THIS!
    id: 'google-map-script',
    // libraries: ['places'], // Uncomment if you need places autocomplete or other features
  });

  const renderMap = () => {
    if (loadError) {
      return (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg h-full flex items-center justify-center">
          Error loading map: {loadError.message}. Please ensure your API key is correct and that the "Maps JavaScript API" is enabled for your project in Google Cloud Console.
        </div>
      );
    }
    if (!isLoaded) {
      return (
        <div className="bg-gray-100 text-gray-700 p-4 rounded-lg h-full flex items-center justify-center">
          Loading Map...
        </div>
      );
    }

    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16} // Zoom level (e.g., 10 for city, 16-18 for street level)
        options={mapOptions}
      >
        {/* You can add a Marker for your office location here if desired */}
        {/* <Marker position={center} /> */}
      </GoogleMap>
    );
  };

  return (
    <div className="container mx-auto p-8 py-12">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 text-center">
        Get in Touch with Techno Tec Systems
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Have a security need, a question about our services, or need a personalized quote?
        We're here to help. Reach out to our experts for reliable solutions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contact Information</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong className="text-gray-900">Phone:</strong> <a href="tel:+9124336941" className="text-blue-600 hover:underline">+91 24336941</a>
            </p>
            <p>
              <strong className="text-gray-900">Email:</strong> <a href="mailto:technotecsystems@gmail.com" className="text-blue-600 hover:underline">technotecsystems@gmail.com</a> <br/>
            </p>
            <p>
              <strong className="text-gray-900">Address:</strong><br />
              No: 24/1, New No-57<br />
              Seshachalam Street, Saidapet<br />
              Chennai, 600015<br />
              Tamil Nadu, India
            </p>
            <p>
              <strong className="text-gray-900">Business Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 5:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone (Optional):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="e.g., +91 9876543210"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Tell us about your security needs or ask a question."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Find Us on the Map</h2>
        <div className="rounded-lg shadow-md overflow-hidden" style={containerStyle}>
          {renderMap()}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          **Please ensure you have entered a valid Google Maps API Key in the code for the map to load.**
        </p>
      </div>
    </div>
  );
}