'use client'

import { motion } from 'framer-motion'

const shapes = [
  { size: 300, left: '10%', top: '20%', duration: 20 },
  { size: 200, left: '80%', top: '60%', duration: 25 },
  { size: 250, left: '60%', top: '10%', duration: 30 },
  { size: 180, left: '20%', top: '70%', duration: 22 },
  { size: 220, left: '90%', top: '30%', duration: 28 },
]

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}