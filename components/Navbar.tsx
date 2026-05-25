
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/90 backdrop-blur text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" className="h-10 w-10" />
          <span className="font-bold">CRHI</span>
        </div>

        <div className="hidden gap-6 md:flex">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
