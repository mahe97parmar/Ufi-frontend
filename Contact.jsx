import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [ok, setOk] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

  const submit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${backend}/api/contact`, form)
      if(data?.success) setOk(true)
    } catch(e){
      alert('Failed to send message')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">Contact & Volunteer</h2>
      <p className="text-gray-600 mt-2">We would love to hear from you.</p>
      <form onSubmit={submit} className="bg-white rounded-2xl shadow p-6 mt-6 grid gap-4">
        {ok ? <div className="text-green-600 font-medium">Thank you! We will reach out soon.</div> : null}
        <input required placeholder="Full Name" className="border rounded-xl px-3 py-2"
               value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input required type="email" placeholder="Email" className="border rounded-xl px-3 py-2"
               value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input placeholder="Phone" className="border rounded-xl px-3 py-2"
               value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
        <textarea required placeholder="Your message" className="border rounded-xl px-3 py-2 min-h-[120px]"
                  value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
        <button className="px-5 py-3 rounded-2xl bg-ufi-primary text-white font-medium">Send</button>
      </form>
    </div>
  )
}
