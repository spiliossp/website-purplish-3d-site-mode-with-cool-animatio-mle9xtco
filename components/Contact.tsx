'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const contactMethods = [
  { icon: '📧', label: 'Email', value: 'hello@purplish3d.com' },
  { icon: '💬', label: 'Chat', value: 'Start Live Chat' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-gradient">Let's Create</span> <span className="text-white">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's build something extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-3xl p-8 mb-8">
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
              </p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer group"
                  >
                    <div className="text-4xl transform group-hover:scale-110 transition-transform">{method.icon}</div>
                    <div>
                      <div className="text-sm text-gray-500">{method.label}</div>
                      <div className="text-lg text-white group-hover:text-gradient transition-all">{method.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold mb-4 text-white">Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-primary rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-full inline-flex items-center gap-8 px-8 py-4">
            <span className="text-gray-400">Follow us:</span>
            {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-gradient transition-all font-medium"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="relative mt-32 pt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Purplish 3D. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}