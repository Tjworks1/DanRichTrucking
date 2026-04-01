export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="relative text-center px-6 py-28 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_60%)]"></div>

        {/* BRAND */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          <span className="block">DANRICH</span>
          <span className="text-yellow-400 block">TRUCKING</span>
        </h1>

        {/* TAGLINE */}
        <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
          Reliable 26ft Box Truck Services with Lift Gate
        </p>

        <p className="text-yellow-400 mt-2 font-semibold">
          Fast • Professional • On-Time Delivery
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mt-10">
          <a
            href="tel:4044688651"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Call Now
          </a>

          <a
            href="sms:4044688651"
            className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:border-yellow-400 transition"
          >
            Text Us
          </a>
        </div>

      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      {/* TRUST BAR */}
      <section className="text-center py-6 text-gray-400 text-sm">
        ✔ On-Time Delivery • ✔ Lift Gate Equipped • ✔ Business Ready
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">
          Who We Work With
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "🏢 Warehouses",
            "🏬 Retail Stores",
            "🛠 Contractors",
            "📦 Logistics Companies",
            "🏗 Construction Companies",
            "🚚 Freight Brokers",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-yellow-400 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-zinc-900 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">
          Services We Provide
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "📦 Scheduled Route Deliveries",
            "🚛 Dedicated Contract Work",
            "⚡ Same-Day Loads",
            "⬆️ Lift Gate Deliveries",
            "🏢 Business Freight",
            "📍 Multi-Stop Deliveries",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/10 p-6 rounded-xl hover:border-yellow-400 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">
          Why Businesses Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-yellow-400 text-4xl font-bold">Reliable</p>
            <p className="text-gray-400 mt-2">
              We show up on time and get the job done right
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-4xl font-bold">Flexible</p>
            <p className="text-gray-400 mt-2">
              One-time jobs or ongoing contracts
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-4xl font-bold">Equipped</p>
            <p className="text-gray-400 mt-2">
              Lift gate ready for heavy loads
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-zinc-950 py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Need a Reliable Driver You Can Count On?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Avoid delays and unreliable drivers. Work with a trucking service that delivers on time, every time.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="tel:4044688651"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Call Now
          </a>

          <a
            href="sms:4044688651"
            className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:border-yellow-400 transition"
          >
            Text Now
          </a>
        </div>

        <p className="text-red-400 text-sm mt-4">
          Now accepting new business clients 🚚
        </p>
      </section>

      {/* FLOATING CTA */}
      <a
        href="tel:4044688651"
        className="fixed bottom-6 right-6 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        Call
      </a>

    </main>
  );
}