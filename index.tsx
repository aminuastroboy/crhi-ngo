import { useState } from 'react';

export default function CRHIPreview() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Building Bridges of Hope
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-2xl">
            Empowering vulnerable children and communities across Northeast Nigeria.
          </p>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="mb-3 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
        >
          {showAdmin ? 'Hide Admin' : 'Admin'}
        </button>

        {showAdmin && (
          <div className="w-64 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-2xl">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
              Admin Access
            </h3>

            <input
              type="text"
              placeholder="Username"
              className="mb-3 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
            />

            <input
              type="password"
              placeholder="Password"
              className="mb-3 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
            />

            <button className="w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white">
              Login
            </button>
          </div>
        )}
      </div>

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>
      </footer>
    </div>
  );
}
