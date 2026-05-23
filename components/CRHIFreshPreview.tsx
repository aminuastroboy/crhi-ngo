
import { useState } from 'react';

export default function CRHIFreshPreview() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm text-orange-300">
            Children's Raybridge of Hope Initiative (CRHI)
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            Empowering vulnerable children, youth, and underserved communities across Northeast Nigeria through education, protection, mentorship, and humanitarian action.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white">
              Donate Now
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            About CRHI
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-slate-600">
            Children Raybridge of Hope Initiative (CRHI) is a Nigerian nonprofit organization registered with the Corporate Affairs Commission (CAC No. 9000126). Established in 2022 in Lamurde LGA, Adamawa State, CRHI works to improve the protection, education, and resilience of vulnerable children, youth, and families in Northeast Nigeria.
          </p>

          <button
            onClick={() => setShowProfile(true)}
            className="mt-10 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white"
          >
            View Full Organization Profile
          </button>
        </div>
      </section>

      {showProfile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 px-6 py-10">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-12 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-slate-900">
                CRHI Organization Profile
              </h2>

              <button
                onClick={() => setShowProfile(false)}
                className="rounded-2xl bg-slate-100 px-5 py-3"
              >
                Close
              </button>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-orange-600">Mission</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  To empower and protect children and youth by providing access to education, life skills, protection services, and supportive community systems.
                </p>

                <h3 className="mt-10 text-2xl font-bold text-orange-600">Vision</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  A society where every child and young person has access to quality education, protection, mentorship, and opportunities to grow into confident and capable leaders.
                </p>

                <h3 className="mt-10 text-2xl font-bold text-orange-600">
                  Core Values
                </h3>

                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>• Hope</li>
                  <li>• Equity</li>
                  <li>• Accountability</li>
                  <li>• Innovation</li>
                  <li>• Sustainability</li>
                  <li>• Safeguarding</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-600">
                  Primary Focus Areas
                </h3>

                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>• Child Protection</li>
                  <li>• Education Support</li>
                  <li>• Youth Empowerment</li>
                  <li>• WASH Programs</li>
                  <li>• Nutrition Awareness</li>
                  <li>• Community Development</li>
                </ul>

                <h3 className="mt-10 text-2xl font-bold text-orange-600">
                  Contact Information
                </h3>

                <div className="mt-5 space-y-3 text-slate-700">
                  <p>No. 6 Jalingo Street, Yola Town, Adamawa State, Nigeria</p>
                  <p>08065849073 / 08124976657</p>
                  <p>wudengiyajohn11@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>

        <p className="mt-5 text-slate-400">
          Educate, Elevate, Empower.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Powered by Astrovia Enterprise
        </p>
      </footer>
    </div>
  );
}
