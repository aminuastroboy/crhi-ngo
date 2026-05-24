
'use client';
import { useState } from 'react';

export default function CRHIPlatform() {
  const [showDonate, setShowDonate] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello 👋 Welcome to CRHI. Ask me about volunteering, donations, programs, or our mission.'
    }
  ]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    let reply = 'Thank you for contacting CRHI.';
    const q = chatInput.toLowerCase();

    if (q.includes('donate')) {
      reply = 'Your donations support education, child protection, and humanitarian outreach.';
    } else if (q.includes('volunteer')) {
      reply = 'You can volunteer by filling the volunteer application form.';
    } else if (q.includes('mission')) {
      reply = 'CRHI empowers vulnerable children and underserved communities.';
    }

    setMessages([
      ...messages,
      { sender: 'user', text: chatInput },
      { sender: 'bot', text: reply }
    ]);

    setChatInput('');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl text-center">
          <img
            src="/images/logo.jpg"
            className="mx-auto mb-8 h-24 w-24 rounded-full object-cover"
          />

          <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm text-orange-300">
            Children's Raybridge of Hope Initiative (CRHI)
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time.
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg text-slate-300 md:text-2xl">
            Empowering vulnerable children, youth, and underserved communities across Northeast Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowDonate(true)}
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white"
            >
              Donate Now
            </button>

            <button
              onClick={() => setShowVolunteer(true)}
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            ['500+', 'Children Supported'],
            ['50+', 'Families Empowered'],
            ['10+', 'Communities Reached'],
            ['2022', 'Founded']
          ].map(([num, label]) => (
            <div key={label} className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <h2 className="text-4xl font-bold text-blue-900">{num}</h2>
              <p className="mt-3 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              About CRHI
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Children's Raybridge Of Hope Initiative was founded in response to educational disruption, child protection risks, poverty, and limited access to essential services affecting conflict- and poverty-affected communities. The organization operates using a rights-based, protection-centered, and community-driven approach.
            </p>

            <button
              onClick={() => setShowProfile(true)}
              className="mt-8 rounded-2xl bg-orange-500 px-8 py-4 text-white"
            >
              View Full Organization Profile
            </button>
          </div>

          <img
            src="/images/gallery1.jpg"
            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold">Gallery</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'hero.jpg'].map((img) => (
              <div key={img} className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={`/images/${img}`}
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              News & Updates
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <img src="/images/news1.jpg" className="h-60 w-full object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Community Outreach Program
                  </h3>

                  <p className="mt-4 text-slate-600">
                    CRHI continues supporting vulnerable communities through humanitarian action.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold">
            Social Media Feed
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {['Facebook', 'LinkedIn', 'Twitter/X'].map((item) => (
              <div key={item} className="rounded-3xl border bg-white p-10 shadow-xl">
                <h3 className="text-2xl font-bold">{item}</h3>
                <p className="mt-4 text-slate-600">
                  Follow CRHI for updates and humanitarian activities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold">Contact Us</h2>

          <div className="mt-10 space-y-5 text-lg text-slate-700">
            <p><strong>Address:</strong> No. 6 Jalingo Street, Yola Town, Adamawa State</p>
            <p><strong>Phone:</strong> 08065849073 / 08124976657</p>
            <p><strong>Email:</strong> support@crhinitiative.org</p>
          </div>
        </div>
      </section>

      {showDonate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-2xl rounded-[32px] bg-white p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Support CRHI</h2>
              <button onClick={() => setShowDonate(false)}>Close</button>
            </div>

            <p className="mt-8 text-lg text-slate-600">
              Your donations help fund education, child protection, and outreach programs.
            </p>
          </div>
        </div>
      )}

      {showVolunteer && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-6 py-10">
          <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Volunteer Application</h2>
              <button onClick={() => setShowVolunteer(false)}>Close</button>
            </div>

            <form className="mt-10 space-y-6">
              <input type="text" placeholder="Full Name" className="w-full rounded-2xl border px-5 py-4" />
              <input type="email" placeholder="Email Address" className="w-full rounded-2xl border px-5 py-4" />
              <textarea rows={6} placeholder="Tell us why you want to volunteer" className="w-full rounded-2xl border px-5 py-4"></textarea>

              <button className="w-full rounded-2xl bg-orange-500 px-8 py-4 text-white">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {showProfile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 px-6 py-10">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-12">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">CRHI Organization Profile</h2>
              <button onClick={() => setShowProfile(false)}>Close</button>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-orange-500">Mission</h3>
                <p className="mt-4 text-slate-600">
                  To empower and protect children and youth by providing access to education, life skills, protection services, and supportive community systems that help them overcome barriers and reach their full potential.
                </p>
                </b>
                <h3 className="text-2xl font-bold text-orange-500">Vision</h3>
                <p className="mt-4 text-slate-600">
                  A society where every child and young person has access to quality education, protection, mentorship, and opportunities to grow into confident, capable, and responsible leaders.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500">Core Values</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>• Hope</li>
                  <li>• Equity</li>
                  <li>• Accountability</li>
                  <li>• Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl"
        >
          🔒
        </button>

        {showAdmin && (
          <div className="mt-3 w-72 rounded-2xl bg-slate-950 p-5">
            <input type="text" placeholder="Username" className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3 text-white" />
            <input type="password" placeholder="Password" className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3 text-white" />

            <button
              onClick={() => setShowDashboard(true)}
              className="w-full rounded-xl bg-orange-500 px-4 py-3 text-white"
            >
              Login
            </button>
          </div>
        )}
      </div>

      {showDashboard && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/95 px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center justify-between rounded-3xl bg-slate-900 p-6">
              <h2 className="text-3xl font-bold text-white">
                CRHI Admin Dashboard
              </h2>

              <button
                onClick={() => setShowDashboard(false)}
                className="rounded-2xl bg-orange-500 px-6 py-3 text-white"
              >
                Close Dashboard
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {['News Posts', 'Gallery Uploads', 'Volunteers'].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-[120]">
        {showChatbot && (
          <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-[30px] bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between bg-orange-500 px-5 py-4 text-white">
              <h3 className="font-bold">CRHI Assistant</h3>
              <button onClick={() => setShowChatbot(false)}>✕</button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-900 p-5">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-orange-500 text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-4">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask CRHI something..."
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
              />

              <button
                onClick={sendMessage}
                className="rounded-2xl bg-orange-500 px-5 py-3 text-white"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-2xl"
        >
          💬
        </button>
      </div>

      <footer className="bg-slate-950 px-6 py-20 text-center text-slate-300">
        <h3 className="text-2xl font-bold text-white">
          Children's Raybridge of Hope Initiative
        </h3>

        <p className="mt-5 text-slate-400">
          Educate, Elevate, Empower.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Technlogy Partners: Astrovia Enterprise
        </p>
      </footer>
    </div>
  );
}
