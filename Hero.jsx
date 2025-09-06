import React from 'react'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-ufi-primary/10 via-white to-ufi-accent/10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          <h1 className="text-4xl font-extrabold leading-tight text-ufi-dark">
            Together for Children’s <span className="text-ufi-primary">Education</span> & <span className="text-ufi-accent">Nutrition</span>
          </h1>
          <p className="mt-4 text-gray-600">UFI empowers children with access to learning and healthy meals. Join our movement: One Hope, One Change.</p>
          <div className="mt-6 flex gap-3">
            <a href="/donate" className="px-5 py-3 rounded-2xl bg-ufi-primary text-white font-medium">Donate Now</a>
            <a href="/contact" className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium">Volunteer</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.6, delay:.1}} className="rounded-3xl shadow-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" alt="Children learning" className="w-full h-full object-cover"/>
        </motion.div>
      </div>
    </section>
  )
}
