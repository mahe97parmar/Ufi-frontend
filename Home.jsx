import React from 'react'
import Hero from '../components/Hero'
export default function Home(){
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          {t:'Child Education', d:'After-school learning, basic literacy, and study kits.'},
          {t:'Nutrition Support', d:'Mid-day snacks, nutrition awareness and health camps.'},
          {t:'Community Drives', d:'Clothes donation, cleanliness and plantation drives.'},
        ].map((c) => (
          <div key={c.t} className="bg-white rounded-2xl shadow p-6">
            <div className="text-lg font-bold">{c.t}</div>
            <p className="text-gray-600 mt-2">{c.d}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
