import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Camera, Utensils, Heart, Calendar, MapPin, Star, Phone, Mail } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Wedding Inquiry')
    const body = encodeURIComponent(`Hello,

I would love to learn more about your wedding services.

Email: ${email}
`)
    window.location.href = `mailto:hello@everafterweddings.co?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Spline Cover */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient + vignette for readable text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

        <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700 shadow-sm">
              <Camera className="h-4 w-4" />
              Timeless Weddings • Modern Aesthetic
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Capture love. Savor moments. Celebrate beautifully.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              A full‑service wedding company specializing in photography, catering, planning, and design. We craft unforgettable experiences with a modern, minimalist touch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:bg-gray-800 transition">
                Get a custom proposal
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-6 py-3 font-semibold shadow ring-1 ring-gray-200 hover:ring-gray-300 transition">
                Explore services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500" />
              4.9/5 from 300+ couples
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Everything for your perfect day</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">Comprehensive, coordinated services with one creative team. Fewer vendors, more harmony.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-md bg-gray-900 text-white px-5 py-2 font-semibold shadow hover:bg-gray-800 transition">Check availability</a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<Camera className="h-6 w-6" />} title="Photography" desc="Editorial‑style coverage, candid moments, and artful storytelling." tags={["Engagement", "Wedding Day", "Albums"]} />
            <ServiceCard icon={<Utensils className="h-6 w-6" />} title="Catering" desc="Seasonal menus, signature cocktails, and refined presentation." tags={["Tastings", "Bar", "Desserts"]} />
            <ServiceCard icon={<Calendar className="h-6 w-6" />} title="Planning" desc="From timelines to vendor management, we handle every detail." tags={["Full Service", "Day‑Of", "Design"]} />
            <ServiceCard icon={<Heart className="h-6 w-6" />} title="Design & Decor" desc="Minimalist florals, tablescapes, and immersive atmospheres." tags={["Florals", "Lighting", "Rentals"]} />
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-2xl font-bold">Recent moments</h3>
            <a href="#contact" className="text-gray-900 font-semibold hover:opacity-80">Request full portfolio →</a>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519741497282-17ac2045f06b?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511285561407-70feae95edc1?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519741314278-c3d46df4cf04?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1600&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img src={src} alt="Wedding moment" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold">Loved by couples</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'They captured the essence of our day perfectly. Every photo feels like art.',
                name: 'Amelia & Noah',
                location: 'Napa Valley',
              },
              {
                quote: 'Flawless planning and the food was phenomenal. We didn\'t worry about a thing.',
                name: 'Maya & Julian',
                location: 'Brooklyn',
              },
              {
                quote: 'Minimalist design that felt uniquely us. The atmosphere was magical.',
                name: 'Sofia & Daniel',
                location: 'Austin',
              },
            ].map((t, i) => (
              <blockquote key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  {[...Array(5)].map((_, s) => (<Star key={s} className="h-4 w-4 fill-yellow-500" />))}
                </div>
                <p className="text-gray-800">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-gray-600">{t.name} • {t.location}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">Let’s craft your day</h3>
              <p className="mt-3 text-gray-600 max-w-xl">Share your email and we’ll reach out with availability, packages, and a custom proposal tailored to your venue and style.</p>

              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex items-center gap-3"><Calendar className="h-5 w-5" /><span>Limited 2025 weekend dates</span></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /><span>Serving nationwide • Based in NYC</span></div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5" /><span>(212) 555‑0133</span></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5" /><span>hello@everafterweddings.co</span></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Your email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
              <button type="submit" className="mt-4 w-full rounded-md bg-gray-900 text-white px-4 py-3 font-semibold hover:bg-gray-800 transition">
                Request availability
              </button>
              <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted about your inquiry.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ever After Weddings</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="/test" className="hover:text-gray-900">System</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, desc, tags }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default App
