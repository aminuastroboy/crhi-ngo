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
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/crhi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950/75" />

        <div className="absolute left-8 top-8 z-20 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
          <img
            src="/images/crhi-logo.png"
            alt="CRHI Logo"
            className="h-16 w-16 object-contain"
          />

          <div>
            <h2 className="text-lg font-bold text-white">
              Children's Raybridge of Hope Initiative
            </h2>
            <p className="text-sm text-slate-200">Building Bridges of Hope</p>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm text-orange-300">
            Children's Raybridge of Hope Initiative
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
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
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

      {/* Stats */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1"
            >
              <h2 className="text-4xl font-bold text-blue-900">{num}</h2>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/crhi-community.jpg"
            alt="Community"
            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div>
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              About CRHI
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Community-driven humanitarian action
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              CRHI is committed to child protection, education, youth empowerment,
              and sustainable community development across Northeast Nigeria.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Through partnerships with schools, volunteers, and local leaders,
              we create safe environments where children can learn and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Focus Areas
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Sustainable Humanitarian Programs
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-bold text-blue-900">
                  •
                </div>

                <h3 className="mt-6 text-2xl font-bold">{program}</h3>

                <p className="mt-4 text-slate-600">
                  Supporting vulnerable communities through impactful interventions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Impact Stories
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Real Communities. Real Impact.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Latest Updates
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              News & Community Activities
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {newsPosts.map((post, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer-section" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-slate-50 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="bg-blue-950 p-12 text-white">
              <h2 className="text-4xl font-bold">
                Join Our Humanitarian Mission
              </h2>

              <p className="mt-6 text-lg text-slate-300">
                Become part of a passionate network helping vulnerable children
                and underserved communities.
              </p>
            </div>

            <div className="p-12">
              <h3 className="text-4xl font-bold text-slate-900">
                Volunteer Form
              </h3>

              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="mt-10 space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us why you want to volunteer"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600"
                >
                  Submit Volunteer Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="donate-section" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-slate-900">
            Contact Us To Donate
          </h2>

          <div className="mt-10 space-y-5 text-lg text-slate-700">
            <p><strong>Phone:</strong> 08065849073 / 08124976657</p>
            <p><strong>Email:</strong> wudengiyajohn11@gmail.com</p>
            <p><strong>Location:</strong> Yola Town, Adamawa State, Nigeria</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-20 text-slate-300">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-2xl font-bold text-white">
            Children Raybridge of Hope Initiative
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Empowering children and communities through education, protection,
            and sustainable humanitarian action.
          </p>

          <div className="mt-16 border-t border-slate-800 pt-8 text-slate-500">
            <p>
              © 2026 Children Raybridge of Hope Initiative (CRHI)
            </p>

            <p className="mt-3 text-sm">
              Powered by <span className="font-semibold text-orange-400">Astrovia Enterprise</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
