'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Advanced 3D Graphics',
    description: 'Stunning WebGL-powered 3D experiences that run smoothly across all devices',
    icon: '🎨',
  },
  {
    title: 'Smooth Animations',
    description: 'Fluid, performance-optimized animations that bring your vision to life',
    icon: '✨',
  },
  {
    title: 'Modern Design',
    description: 'Clean, contemporary interfaces that convert visitors into customers',
    icon: '🚀',
  },
  {
    title: 'Optimized Performance',
    description: 'Lightning-fast load times with cutting-edge optimization techniques',
    icon: '⚡',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-gradient">Why Choose</span> <span className="text-white">Purplish?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We blend creativity with technology to deliver immersive digital experiences that stand out
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">{feature.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Trusted by innovative brands worldwide
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              We've delivered exceptional 3D web experiences for startups and enterprises alike, pushing the boundaries of what's possible on the web.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-4xl">
              <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="cursor-pointer">🌟</motion.span>
              <motion.span whileHover={{ scale: 1.2, rotate: -10 }} className="cursor-pointer">💎</motion.span>
              <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="cursor-pointer">🎯</motion.span>
              <motion.span whileHover={{ scale: 1.2, rotate: -10 }} className="cursor-pointer">🔮</motion.span>
              <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="cursor-pointer">✨</motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}