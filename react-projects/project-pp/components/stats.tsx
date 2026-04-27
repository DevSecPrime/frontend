"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Brands Transformed" },
  { value: 92, suffix: "%", label: "Returning Clients" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tabular-nums">
      {count.toString().padStart(2, "0")}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-[#f5f5f5] py-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-neutral-500 text-sm uppercase tracking-widest mb-12"
        >
          ← Agency Statistics
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-neutral-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
