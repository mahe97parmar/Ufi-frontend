import React from 'react'
export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519345178453-1b9a8a8aa8c2?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Gallery</h2>
      <p className="text-gray-600 mt-2">Snapshots from our drives and programs.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {imgs.map((src,i)=>(
          <img key={i} src={src} alt={"gallery-"+i} className="rounded-2xl shadow"/>
        ))}
      </div>
    </div>
  )
}
