import { useState } from "react";
import image from "../assets/image.jpeg"
import muruganHD from "../assets/murugan-hd.jpg"
import image1 from "../assets/image1.jpg"
import photo from "../assets/photo.jpg"


export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      title: "Thaipusam Festival",
      desc: "Grand spiritual celebration with kavadi procession and special poojas.",
      img:photo
    },
    {
      title: "Skanda Sashti",
      desc: "Six sacred days symbolizing divine victory of Lord Murugan.",
      img: image
    },
    {
      title: "Karthigai Deepam",
      desc: "Temple illuminated with thousands of divine lamps.",
      img: muruganHD
    },
    {
      title:"Panguni Uthiram",
      desc:"A sacred celebration marking the divine wedding of Lord Murugan.",
      img:image1
    },
    {
      title:"Vaikasi Visakam",
      desc:"Celebrates the birth (avatar day) of Lord Murugan with special abhishekam and processions.",
     img:photo
    },
    {
      title:"Aadi Krithigai",
      desc:"A powerful devotional day in the Tamil month of Aadi dedicated to special prayers for Lord Murugan.",
       img:image
    },
  ];

  return (
    <section className="py-24 bg-[#7B1E1E] text-white text-center px-6 min-h-screen animate-fadeIn">
      <h2 className="text-4xl font-semibold mb-4 animate-slideUp">Temple Festivals</h2>
      <p className="text-white/80 mb-12 animate-slideUp">👇 Click on any festival to view details</p>
      <div className="flex flex-wrap justify-center gap-12">
        {events.map((event, i) => (
          <div key={i} className="flex flex-col items-center animate-slideUp">
            <div onClick={() => setActiveEvent(activeEvent === i ? null : i)} className="w-44 h-44 bg-white/20 backdrop-blur-lg rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition duration-300 shadow-xl p-4 relative">
              <img src={event.img} alt={event.title} className="w-16 h-16 rounded-full mb-2 object-cover" />
              <span className="text-sm font-semibold">{event.title}</span>
              <div className="absolute -bottom-2 -right-2 bg-[#C6A75E] rounded-full w-8 h-8 flex items-center justify-center text-xl">
                {activeEvent === i ? "−" : "+"}
              </div>
            </div>
            {activeEvent === i && (
              <div className="mt-6 bg-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-xs animate-slideDown">
                <p className="text-sm">{event.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
