'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: '3D Web Development',
    description: 'Custom 3D websites built with Three.js and React Three Fiber for immersive user experiences',
    features: ['WebGL Integration', 'Interactive Models', 'Real-time Rendering', 'Cross-platform'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Animation Design',
    description: 'Smooth, engaging animations powered by Framer Motion and GSAP for premium feel',
    features: ['Micro-interactions', 'Scroll Animations', 'Page Transitions', 'Motion Graphics'],
    gradient: 'from-primary to-cyan-600',
  },
  {
    title: 'UI/UX Design',
    description: 'Modern, conversion-optimized interfaces designed with user psychology in mind',
    features: ['User Research', 'Wireframing', 'Prototyping', 'A/B Testing'],
    gradient: 'from-pink-600 to-purple-600',
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for Core Web Vitals and SEO excellence',
    features: ['Code Splitting', 'Lazy Loading', 'Asset Optimization', 'CDN Integration'],
    gradient: 'from-cyan-600 to-primary',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-white">Our</span> <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital vision to life with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              <div className="glass-effect rounded-3xl p-8 h-full border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-primary rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-3 bg-gradient-to-r from-purple-600/20 to-primary/20 border border-purple-500/50 rounded-full font-semibold hover:from-purple-600 hover:to-primary transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-effect rounded-full px-8 py-4">
            <p className="text-gray-400">
              Can't find what you need? <span className="text-gradient font-semibold cursor-pointer hover:underline">Let's talk custom solutions →</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}