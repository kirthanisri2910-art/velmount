export default function Contact() {
  return (
    <section className="py-24 bg-[#F8F3E9] text-center px-6 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-4xl font-semibold text-[#7B1E1E] mb-12">Contact Us</h2>
        <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-[#C6A75E] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-[#C6A75E] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]" />
            <textarea rows="4" placeholder="Your Message" className="w-full p-4 rounded-xl border border-[#C6A75E] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"></textarea>
            <button className="w-full py-4 bg-[#C6A75E] text-white rounded-xl font-semibold hover:scale-105 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
