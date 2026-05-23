
import { useState } from 'react';

export default function CRHIFreshPreview() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Children's Raybridge of Hope Initiative
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-2xl">
            Building Bridges of Hope, One Child at a Time
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white">
              Donate Now
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {['Outreach', 'Education', 'Community'].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">{item}</h3>
              <p className="mt-4 text-slate-600">
                CRHI continues empowering vulnerable communities.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-4 left-4">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="rounded-full bg-orange-500 px-5 py-3 text-white"
        >
          {showAdmin ? 'Hide Admin' : 'Admin'}
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
    </div>
  );
}
