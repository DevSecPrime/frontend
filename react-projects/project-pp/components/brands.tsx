"use client"

import { motion } from "framer-motion"

const brands = [
  { name: "CloudWatch", icon: "◇" },
  { name: "Boltshift", icon: "⚡" },
  { name: "Epicurious", icon: "✦" },
  { name: "Nietzsche", icon: "✕" },
  { name: "Quotient", icon: "◈" },
]

export function Brands() {
  return (
    <section className="bg-black py-12 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-neutral-500 text-sm text-center mb-8 uppercase tracking-widest"
        >
          Trusted by leading brands
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
            >
              <span className="text-xl">{brand.icon}</span>
              <span className="font-medium tracking-wide">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
