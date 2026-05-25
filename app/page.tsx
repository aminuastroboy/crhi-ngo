
'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  const [chat,setChat] = useState(false)

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center">
        <img src="/images/hero.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <img src="/images/logo.png" className="mx-auto mb-8 h-32 w-32" />

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Children's Raybridge of Hope Initiative
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-200">
            Building Bridges of Hope, One Child at a Time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/donate" className="rounded-full bg-orange-500 px-8 py-4 text-white">
              Donate Now
            </a>

            <a href="/volunteer" className="rounded-full border border-white/30 px-8 py-4 text-white">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
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
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-bold">Strategic Focus Areas</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              'Child Protection',
              'Education Support',
              'Youth Empowerment',
              'Safeguarding & PSEA',
              'Humanitarian Outreach',
              'Community Development',
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={() => setChat(!chat)}
        className="fixed bottom-4 right-4 rounded-full bg-orange-500 p-5 text-white shadow-2xl"
      >
        💬
      </button>

      {chat && (
        <div className="fixed bottom-24 right-4 h-[420px] w-[320px] rounded-3xl bg-slate-950 p-5 text-white shadow-2xl">
          <h3 className="text-xl font-bold">CRHI Assistant</h3>
          <div className="mt-6 rounded-2xl bg-slate-900 p-4">
            Hello 👋 Ask about volunteering, donations, outreach, or CRHI programs.
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
