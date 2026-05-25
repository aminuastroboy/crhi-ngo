
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="px-6 py-40">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold">Gallery</h1>
          <p className="mt-8 text-xl text-slate-600">
            Community outreach gallery and humanitarian activities.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
