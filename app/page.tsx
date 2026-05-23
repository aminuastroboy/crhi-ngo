export default function CRHIHomepage() {
  const stats = [
    ['500+', 'Children Supported'],
    ['50+', 'Families Empowered'],
    ['10+', 'Communities Reached'],
    ['2022', 'Founded'],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section
        className="relative flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/crhi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950/75" />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-200 md:text-2xl">
            Empowering vulnerable children, youth, and families across Northeast Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#donate-section"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Donate Now
            </a>

            <a
              href="#volunteer-section"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-blue-900">{num}</h2>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="volunteer-section" className="bg-slate-50 px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-slate-900">
            Volunteer With CRHI
          </h2>

          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us why you want to volunteer"
              className="w-full rounded-2xl border border-slate-300 px-5 py-4"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Submit Volunteer Application
            </button>
          </form>
        </div>
      </section>

      <section id="donate-section" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-slate-50 p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-slate-900">
            Contact Us To Donate
          </h2>

          <div className="mt-8 space-y-4 text-lg text-slate-700">
            <p><strong>Phone:</strong> 08065849073 / 08124976657</p>
            <p><strong>Email:</strong> wudengiyajohn11@gmail.com</p>
            <p><strong>Location:</strong> Yola Town, Adamawa State, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
}
