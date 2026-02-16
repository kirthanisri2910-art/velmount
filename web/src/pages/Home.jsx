import { Link } from "react-router-dom";
import muruganHD from "../assets/murugan-hd.jpg"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 py-12 animate-fadeIn">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 animate-slideUp">
          <img
            src={muruganHD}
            alt="Temple"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-[#C6A75E] shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center animate-slideUp">
          <div className="inline-block px-4 py-2 bg-[#C6A75E]/20 rounded-full mb-4 mx-auto md:mx-0 w-fit">
            <span className="text-[#7B1E1E] font-semibold text-sm">🕉️ Welcome to</span>
          </div>
          <h1 className="text-4xl md:text-6xl text-[#7B1E1E] font-[Cinzel] leading-tight">Velmount Murugar Temple</h1>
          <p className="mt-6 text-lg text-gray-700 max-w-md mx-auto md:mx-0">California's sacred hilltop sanctuary dedicated to Lord Murugan. Where devotion meets divine grace.</p>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <Link to="/about">
              <button className="px-8 py-3 bg-[#C6A75E] text-white rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Learn More</button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 border-2 border-[#7B1E1E] text-[#7B1E1E] rounded-full hover:bg-[#7B1E1E] hover:text-white hover:scale-105 transition-all duration-300">Visit Us</button>
            </Link>
          </div>
        </div>
      </section>
     

      {/* Quick Info Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-[#F8F3E9] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7B1E1E] mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Experience spiritual serenity and divine blessings at our sacred sanctuary</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105 text-center">
              <div className="text-4xl mb-3">🪔</div>
              <h3 className="text-lg font-semibold text-[#7B1E1E] mb-2">Daily Poojas</h3>
              <p className="text-sm text-gray-600">Morning & Evening</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-lg font-semibold text-[#7B1E1E] mb-2">Festivals</h3>
              <p className="text-sm text-gray-600">Grand Celebrations</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105 text-center">
              <div className="text-4xl mb-3">🏞️</div>
              <h3 className="text-lg font-semibold text-[#7B1E1E] mb-2">Nature Trails</h3>
              <p className="text-sm text-gray-600">4.5 Mile Path</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105 text-center">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-[#7B1E1E] mb-2">Open to All</h3>
              <p className="text-sm text-gray-600">Everyone Welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Timings */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7B1E1E] mb-4">⏰ Temple Timings</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#F8F3E9] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-center">📅</div>
              <h3 className="text-xl font-semibold text-[#7B1E1E] mb-4 text-center">Weekdays</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Morning:</span>
                  <span>6:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Evening:</span>
                  <span>5:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#C6A75E]/20 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-[#C6A75E]">
              <div className="text-3xl mb-4 text-center">⭐</div>
              <h3 className="text-xl font-semibold text-[#7B1E1E] mb-4 text-center">Tuesday Special</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Morning:</span>
                  <span>6:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Evening:</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
                <p className="text-sm text-center mt-4 text-[#7B1E1E] font-semibold">🕉️ Special Pooja at 7:00 PM</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F8F3E9] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-center">☀️</div>
              <h3 className="text-xl font-semibold text-[#7B1E1E] mb-4 text-center">Sunday</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Morning:</span>
                  <span>6:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Evening:</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-[#7B1E1E]/10 p-6 rounded-2xl">
            <p className="text-gray-700">🎉 <span className="font-semibold text-[#7B1E1E]">Special Events:</span> Extended hours during festivals and celebrations</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7B1E1E] mb-6">Upcoming Celebrations</h2>
          <p className="text-gray-600 mb-8">Join us for sacred festivals and spiritual gatherings</p>
          <Link to="/events">
            <button className="px-8 py-3 bg-[#7B1E1E] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg">View All Events</button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#7B1E1E] text-white text-center px-6">
        <div className="max-w-4xl mx-auto animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">💛 Experience Divine Peace</h2>
          <p className="text-lg mb-8 text-white/90">Visit us at Altamont Pass, California and receive Lord Murugan's blessings</p>
          <Link to="/contact">
            <button className="px-10 py-4 bg-[#C6A75E] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold">Get Directions</button>
          </Link>
        </div>
      </section>
    </>
  );
}
