
'use client';
import { useState } from 'react';

const gallery = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
];

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src="/images/hero.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <img src="/images/logo.png" className="mx-auto mb-8 h-32 w-32" />
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Children's Raybridge of Hope Initiative
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-200">
            Building Bridges of Hope, One Child at a Time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-orange-500 px-8 py-4 text-white shadow-xl">
              Donate Now
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 text-white">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {[
            ['500+', 'Children Supported'],
            ['50+', 'Families Empowered'],
            ['10+', 'Communities Reached'],
            ['2022', 'Founded'],
          ].map(([n,l]) => (
            <div key={l} className="rounded-3xl bg-slate-50 p-10 text-center shadow-xl">
              <h2 className="text-5xl font-bold text-orange-500">{n}</h2>
              <p className="mt-4 text-slate-600">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              About CRHI
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Humanitarian Action With Sustainable Impact
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Children's Raybridge of Hope Initiative (CRHI) is a nonprofit humanitarian organization supporting vulnerable children, women, youth, and underserved communities through education, safeguarding, empowerment, mentorship, humanitarian outreach, and sustainable development programs across Northeast Nigeria.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Child Protection',
                'Youth Empowerment',
                'Education Support',
                'Safeguarding & PSEA',
                'Community Outreach',
                'Humanitarian Response'
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow">
                  <h3 className="font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <img src="/images/gallery-1.jpg" className="rounded-[40px] shadow-2xl" />
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-bold">Gallery</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((img) => (
              <div key={img} className="overflow-hidden rounded-3xl shadow-2xl">
                <img src={img} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-bold">News & Updates</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <img src={`/images/gallery-${i}.jpg`} className="h-56 w-full object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Community Outreach Program
                  </h3>

                  <p className="mt-4 text-slate-600">
                    CRHI continues empowering vulnerable communities through impactful humanitarian engagement.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold">Social Media Feed</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {['Facebook', 'LinkedIn', 'Twitter/X'].map((social) => (
              <div key={social} className="rounded-3xl border p-10 shadow-xl">
                <h3 className="text-2xl font-bold">{social}</h3>
                <p className="mt-4 text-slate-600">
                  Follow CRHI for humanitarian activities and updates.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold">Contact Us</h2>

          <div className="mt-10 space-y-4 text-lg">
            <p><strong>Email:</strong> info@crhi.org</p>
            <p><strong>Phone:</strong> +234 806 584 9073</p>
            <p><strong>Location:</strong> Adamawa State, Nigeria</p>
          </div>
        </div>
      </section>

      <button
        onClick={() => setAdminOpen(!adminOpen)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-orange-500 p-5 text-white shadow-2xl"
      >
        🔒
      </button>

      {adminOpen && (
        <div className="fixed bottom-24 left-4 z-50 w-80 rounded-3xl bg-slate-950 p-6 text-white shadow-2xl">
          <h3 className="mb-4 text-xl font-bold">Admin Login</h3>
          <input className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3" placeholder="Username" />
          <input className="mb-4 w-full rounded-xl bg-slate-800 px-4 py-3" placeholder="Password" type="password" />

          <button className="w-full rounded-xl bg-orange-500 px-4 py-3">
            Login
          </button>
        </div>
      )}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-orange-500 p-5 text-white shadow-2xl"
      >
        💬
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-4 z-50 h-[500px] w-[350px] rounded-[30px] bg-slate-950 p-5 text-white shadow-2xl">
          <h3 className="text-2xl font-bold">CRHI Assistant</h3>

          <div className="mt-6 rounded-2xl bg-slate-900 p-4">
            Hello 👋 Ask about volunteering, donations, programs, safeguarding, or outreach activities.
          </div>

          <input
            placeholder="Ask CRHI something..."
            className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3"
          />
        </div>
      )}

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <img src="/images/logo.png" className="mx-auto h-20 w-20" />

        <h3 className="mt-6 text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>

        <p className="mt-4 text-slate-500">
          Powered by Astrovia Enterprise
        </p>
      </footer>
    </main>
  );
}
