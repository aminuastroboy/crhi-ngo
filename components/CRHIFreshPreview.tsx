import { useState } from 'react';

export default function CRHIFreshPreview() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello 👋 Welcome to CRHI. Ask me about donations, volunteering, contact information, programs, or our mission.',
    },
  ]);

  const stats = [
    ['500+', 'Children Supported'],
    ['50+', 'Families Empowered'],
    ['10+', 'Communities Reached'],
    ['2022', 'Founded'],
  ];

  const handleChatbotSend = () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      sender: 'user',
      text: chatInput,
    };

    let botReply = 'Thank you for contacting CRHI.';

    const lower = chatInput.toLowerCase();

    if (lower.includes('donate')) {
      botReply = 'You can support CRHI through donations that help provide education support and humanitarian aid.';
    } else if (lower.includes('volunteer')) {
      botReply = 'You can become a CRHI volunteer by filling out the volunteer application form.';
    } else if (lower.includes('contact')) {
      botReply = 'You can contact CRHI via 08065849073 or support@crhi.org.';
    } else if (lower.includes('mission')) {
      botReply = 'CRHI empowers vulnerable children and underserved communities.';
    }

    setChatMessages((prev) => [
      ...prev,
      userMessage,
      { sender: 'bot', text: botReply },
    ]);

    setChatInput('');
  };

  const news = [
    {
      title: 'Community Outreach Program',
      category: 'Outreach',
      image:
        'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop',
      description:
        'CRHI continues supporting vulnerable communities through humanitarian action.',
    },
    {
      title: 'Youth Empowerment Initiative',
      category: 'Youth',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      description:
        'Young leaders participated in mentorship and empowerment programs.',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  ];

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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowDonate(true)}
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
            >
              Donate Now
            </button>

            <button
              onClick={() => setShowVolunteer(true)}
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg"
            >
              <h2 className="text-4xl font-bold text-blue-900">{num}</h2>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              About CRHI
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Community-driven humanitarian action
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Children's Raybridge of Hope Initiative empowers vulnerable communities.
            </p>

            <button
              onClick={() => setShowProfile(true)}
              className="mt-8 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white"
            >
              More About CRHI
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
            alt="Community Outreach"
            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      {showProfile && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-black/80 px-6 py-10">
          <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-slate-900">
                Full Organization Profile
              </h2>

              <button
                onClick={() => setShowProfile(false)}
                className="rounded-2xl bg-slate-100 px-5 py-3"
              >
                Close
              </button>
            </div>

            <p className="mt-10 text-lg leading-relaxed text-slate-600">
              CRHI is a humanitarian and community development organization dedicated to supporting vulnerable children and underserved communities.
            </p>
          </div>
        </div>
      )}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Outreach & Community Moments
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={image}
                  alt="Gallery"
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              News & Community Activities
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {news.map((post) => (
              <div
                key={post.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                    {post.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-slate-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showDonate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-2xl rounded-[32px] bg-white p-10 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900">
                Support Our Mission
              </h2>

              <button
                onClick={() => setShowDonate(false)}
                className="rounded-full bg-slate-100 px-4 py-2"
              >
                Close
              </button>
            </div>

            <div className="mt-8 space-y-4 text-slate-700">
              <p><strong>Phone:</strong> 08065849073</p>
              <p><strong>Email:</strong> donations@crhi.org</p>
            </div>
          </div>
        </div>
      )}

      {showVolunteer && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-6 py-10">
          <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900">
                Volunteer Application
              </h2>

              <button
                onClick={() => setShowVolunteer(false)}
                className="rounded-full bg-slate-100 px-4 py-2"
              >
                Close
              </button>
            </div>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              />

              <textarea
                rows={6}
                placeholder="Tell us why you want to volunteer"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white"
              >
                Submit Volunteer Application
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-slate-900">Contact Us</h2>

          <div className="mt-10 space-y-5 text-lg text-slate-700">
            <p><strong>Phone:</strong> 08065849073 / 08124976657</p>
            <p><strong>Email:</strong> support@crhi.org</p>
            <p><strong>Location:</strong> Adamawa State, Nigeria</p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl"
        >
          🔒
        </button>

        {showAdmin && (
          <div className="w-64 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-2xl">
            <input
              type="text"
              placeholder="Username"
              className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3 text-white"
            />

            <input
              type="password"
              placeholder="Password"
              className="mb-3 w-full rounded-xl bg-slate-800 px-4 py-3 text-white"
            />

            <button
              onClick={() => {
                setAdminMessage('Login successful');
                setShowDashboard(true);
              }}
              className="w-full rounded-xl bg-orange-500 px-4 py-3 text-white"
            >
              Login
            </button>

            {adminMessage && (
              <p className="mt-3 text-green-400">{adminMessage}</p>
            )}
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

            <div className="rounded-3xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                Create News Update
              </h3>

              <form className="mt-8 space-y-6">
                <input
                  type="text"
                  placeholder="News Title"
                  className="w-full rounded-2xl bg-slate-800 px-5 py-4 text-white"
                />

                <textarea
                  rows={6}
                  placeholder="Write update content..."
                  className="w-full rounded-2xl bg-slate-800 px-5 py-4 text-white"
                ></textarea>

                <input
                  type="file"
                  className="w-full rounded-2xl bg-slate-800 px-5 py-4 text-slate-400"
                />

                <button
                  type="submit"
                  className="rounded-2xl bg-orange-500 px-8 py-4 text-white"
                >
                  Publish Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-[120]">
        {showChatbot && (
          <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-[30px] border border-slate-700 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between bg-orange-500 px-5 py-4 text-white">
              <h3 className="font-bold">CRHI Assistant</h3>

              <button
                onClick={() => setShowChatbot(false)}
                className="rounded-full bg-white/20 px-3 py-1 text-sm"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-900 p-5">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-orange-500 text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3 border-t border-slate-800 bg-slate-950 p-4">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask CRHI something..."
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
              />

              <button
                onClick={handleChatbotSend}
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
          Empowering children and communities through sustainable humanitarian action.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Powered by Astrovia Enterprise
        </p>
      </footer>
    </div>
  );
}
