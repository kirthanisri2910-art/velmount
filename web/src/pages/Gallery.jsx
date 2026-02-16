import image from "../assets/image.jpeg"
import muruganHD from "../assets/murugan-hd.jpg"
import image1 from "../assets/image1.jpg"
import photo from "../assets/photo.jpg"

export default function Gallery() {
  const galleryImages = [
    photo,
    image,
    muruganHD,
    image1
  ];

  return (
    <section className="py-24 bg-[#F8F3E9] text-center px-6 min-h-screen">
      <h2 className="text-4xl font-semibold text-[#7B1E1E] mb-16">Temple Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((img, i) => (
          <div key={i} className="h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
