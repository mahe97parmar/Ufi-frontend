import React from 'react'
export default function Programs(){
  const programs = [
    {name:'Clothes Donation Drive', desc:'Collecting usable clothes and distributing to the needy.'},
    {name:'Education Support', desc:'After-school classes and study material kits.'},
    {name:'Nutrition Camps', desc:'Healthy snacks and awareness sessions for children.'},
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Programs</h2>
      <div className="mt-6 grid gap-6">
        {programs.map(p => (
          <div key={p.name} className="bg-white rounded-2xl shadow p-6">
            <div className="font-semibold">{p.name}</div>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
