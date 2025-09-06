import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Donate from './pages/Donate'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const Nav = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-ufi-accent/20 flex items-center justify-center text-ufi-accent font-bold">UFI</div>
        <div>
          <div className="text-lg font-bold text-ufi-dark">Umeed Foundation of India</div>
          <div className="text-xs text-gray-500 italic">One Hope, One Change</div>
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        {['/', '/about', '/programs', '/donate', '/gallery', '/contact'].map((to,i)=>{
          const labels = ['Home','About','Programs','Donate','Gallery','Contact']
          return <NavLink key={to} to={to} className={({isActive})=>`px-3 py-1.5 rounded-xl ${isActive?'bg-ufi-primary text-white':'hover:bg-gray-100'}`}>{labels[i]}</NavLink>
        })}
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="mt-16 bg-white border-t">
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
      <div>
        <div className="text-lg font-bold">UFI</div>
        <p className="text-sm text-gray-600 mt-2">Working for child education and nutrition in India.</p>
      </div>
      <div>
        <div className="font-semibold">Contact</div>
        <p className="text-sm text-gray-600 mt-2">📧 umeedfoundationofindia@gmail.com<br/>📞 8236090874</p>
        <p className="text-sm text-gray-600 mt-2">📸 Instagram: @ufi_india_0905</p>
      </div>
      <div>
        <div className="font-semibold">Address</div>
        <p className="text-sm text-gray-600 mt-2">Satna, Madhya Pradesh, India</p>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Umeed Foundation of India • One Hope, One Change</div>
  </footer>
)

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
