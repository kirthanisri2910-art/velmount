export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F3E9] to-white text-center px-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold text-[#7B1E1E] animate-slideUp">
          About Velmount Murugar Temple
        </h2>

        <div className="w-24 h-1 bg-[#C6A75E] mx-auto my-6 rounded-full"></div>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 animate-slideUp">
          A serene hilltop Murugan Temple with a golden statue located at the <span className="text-[#7B1E1E] font-semibold">Velmont Spiritual Center</span> in the scenic <span className="text-[#7B1E1E] font-semibold">Altamont Pass hills of California</span>. This sacred sanctuary stands as a beacon of faith where devotees gather to seek blessings, strength, and spiritual awakening.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slideUp">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <div className="text-3xl mb-3">🏞️</div>
            <h3 className="text-xl font-semibold text-[#7B1E1E] mb-2">4.5-Mile Nature Trail</h3>
            <p className="text-gray-600 text-sm">Peaceful walking path through scenic hills</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <div className="text-3xl mb-3">🚶</div>
            <h3 className="text-xl font-semibold text-[#7B1E1E] mb-2">2-Mile Girivalam Path</h3>
            <p className="text-gray-600 text-sm">Sacred circumambulation route around the temple</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
            <div className="text-3xl mb-3">🎉</div>
            <h3 className="text-xl font-semibold text-[#7B1E1E] mb-2">Grand Thaipusam</h3>
            <p className="text-gray-600 text-sm">Paal Kudam, Kavadi & Vel processions</p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 animate-slideUp">
          The divine presence of Lord Murugan, holding the sacred
          <span className="text-[#C6A75E] font-semibold"> Vel</span>,
          symbolizes the victory of light over darkness and wisdom over ignorance.
          Every prayer offered here carries devotion,
          every lamp lit shines with hope,
          and every chant echoes divine grace.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-slideUp">
            <h3 className="text-2xl font-semibold text-[#7B1E1E] mb-4">
              🌿 Spiritual Significance
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>🕉 Daily poojas filled with devotion</li>
              <li>🔔 Sacred chants resonating through the temple</li>
              <li>🪔 Lamps symbolizing divine light</li>
              <li>🌸 Grand festival celebrations</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-slideUp">
            <h3 className="text-2xl font-semibold text-[#7B1E1E] mb-4">
              💛 Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>Preserve sacred traditions</li>
              <li>Promote unity and harmony</li>
              <li>Inspire devotion in future generations</li>
              <li>Provide peace to every seeker</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

