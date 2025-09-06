import React from 'react'
export default function About(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">About UFI</h2>
      <p className="mt-4 text-gray-700">
        Umeed Foundation of India (UFI) is a trust based in Satna, Madhya Pradesh. We focus initially on child education and nutrition,
        and in our next phase we will expand to environmental initiatives.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-gray-600 mt-2">Ensure access to learning and nutrition for every child.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-gray-600 mt-2">Build a healthier, educated generation — One Hope, One Change.</p>
        </div>
      </div>
    </div>
  )
}
