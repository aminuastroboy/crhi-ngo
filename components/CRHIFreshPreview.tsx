import { useState } from 'react';

export default function CRHIFreshPreview() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm text-orange-300">
            Children's Raybridge of Hope Initiative
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            Empowering vulnerable children and communities across Northeast Nigeria.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            About CRHI
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            CRHI is committed to empowering vulnerable children and underserved communities through education, mentorship, and humanitarian outreach.
          </p>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl"
        >
          🔒
        </button>

        {showAdmin && (
          <div className="mt-3 w-64 rounded-2xl bg-slate-950 p-4 text-white shadow-2xl">
            <input
              type="text"
              placeholder="Username"
              className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3"
            />

            <button className="w-full rounded-xl bg-orange-500 px-4 py-3">
              Login
            </button>
          </div>
        )}
      </div>

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>

        <p className="mt-8 text-sm text-slate-500">
          Powered by Astrovia Enterprise
        </p>
      </footer>
    </div>
  );
}
