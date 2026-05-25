
'use client';
import { useState } from 'react';

export default function CRHIEnterprisePlatform() {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
        <div>
          <h1 className="text-6xl font-bold text-white">
            Children's Raybridge of Hope Initiative
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Building Bridges of Hope, One Child at a Time.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => setShowDonate(true)}
              className="rounded-full bg-orange-500 px-8 py-4 text-white"
            >
              Donate Now
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 text-white">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-4">
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
          <h2 className="text-5xl font-bold">About CRHI</h2>
          <p className="mt-6 max-w-4xl text-lg text-slate-600">
            CRHI is a humanitarian nonprofit organization registered in Nigeria focused on child protection, education, youth empowerment, humanitarian outreach, and community development.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center">Gallery</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-72 rounded-3xl bg-slate-200 shadow-xl"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center">News & Updates</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold">Community Outreach</h3>
                <p className="mt-4 text-slate-600">
                  CRHI continues empowering vulnerable communities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showDonate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="rounded-3xl bg-white p-10">
            <h2 className="text-3xl font-bold">Support CRHI</h2>
            <button
              onClick={() => setShowDonate(false)}
              className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>

        <p className="mt-6 text-slate-500">
          Powered by Astrovia Enterprise
        </p>
      </footer>
    </div>
  );
}
