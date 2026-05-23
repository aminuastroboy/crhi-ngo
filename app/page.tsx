export default function CRHIHomepage() {
  const stats = [
    ['500+', 'Children Supported'],
    ['50+', 'Families Empowered'],
    ['10+', 'Communities Reached'],
    ['2022', 'Founded'],
  ];

  const programs = [
    'Child Protection',
    'Education',
    'Youth Empowerment',
    'Community Development',
    'WASH',
    'Nutrition',
  ];

  const galleryImages = [
    '/images/crhi-gallery-1.jpg',
    '/images/crhi-gallery-2.jpg',
    '/images/crhi-gallery-3.jpg',
    '/images/crhi-gallery-4.jpg',
  ];

  const newsPosts = [
    {
      title: 'Educational Outreach Program',
      image: '/images/crhi-gallery-1.jpg',
      description:
        'CRHI continues supporting students with mentorship and educational engagement activities.',
    },
    {
      title: 'Community Awareness Session',
      image: '/images/crhi-gallery-2.jpg',
      description:
        'Community leaders and families gathered to discuss child protection and resilience.',
    },
    {
      title: 'Youth Empowerment Initiative',
      image: '/images/crhi-gallery-3.jpg',
      description:
        'Young people participated in life-skills and leadership development activities.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/crhi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950/75" />

        <div className="absolute top-8 left-8 z-20 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
          <img
            src="/images/crhi-logo.png"
            alt="CRHI Logo"
            className="h-16 w-16 object-contain"
          />

          <div className="text-left">
            <h2 className="text-lg font-bold leading-tight text-white">
              Children Raybridge of Hope Initiative
            </h2>
            <p className="text-sm text-slate-200">Building Bridges of Hope</p>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm text-orange-300">
            Children Raybridge of Hope Initiative
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-slate-200 md:text-2xl">
            Empowering vulnerable children, youth, and families through education,
            protection, mentorship, and community-driven support across Northeast Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#donate-section"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
            >
              Donate Now
            </a>

            <a
              href="#volunteer-section"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
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
    </div>
  );
}
