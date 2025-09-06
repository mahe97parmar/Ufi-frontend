import React, { useState } from 'react'
import axios from 'axios'

export default function Donate(){
  const [amount, setAmount] = useState(500)
  const [loading, setLoading] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(`${backend}/api/donate/create-order`, { amount })
      // For demo: redirect to a thank you style page
      alert('Order created. In production, open Razorpay/Stripe checkout. OrderId: ' + data?.orderId)
    } catch (e) {
      alert('Failed to start donation')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Donate</h2>
      <p className="mt-3 text-gray-600">Support our mission. Choose an amount and proceed.</p>
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <label className="text-sm font-medium">Amount (₹)</label>
        <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))}
               className="mt-2 w-full border rounded-xl px-3 py-2"/>
        <button onClick={handleCheckout} disabled={loading}
                className="mt-4 w-full px-4 py-3 rounded-2xl bg-ufi-primary text-white font-medium">
          {loading ? 'Processing...' : 'Proceed to Donate'}
        </button>
        <div className="text-xs text-gray-500 mt-3">UPI/QR and Stripe/PayPal supported (configure in backend).</div>
      </div>
    </div>
  )
}
