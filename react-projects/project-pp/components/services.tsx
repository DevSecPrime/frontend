"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Branding & Identity",
    description: "We shape brands, craft identities, and produce graphics that don't chase trends - they set them.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful digital experiences that delight users and drive results.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
  },
  {
    title: "Creative Direction",
    description: "Strategic creative leadership that transforms vision into compelling visual narratives.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
  },
  {
    title: "Development",
    description: "Building fast, scalable, and beautiful websites and applications with modern technologies.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="bg-[#f5f5f5] py-24 md:py-32 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-neutral-500 text-sm uppercase tracking-widest mb-4"
        >
          ← Our Services
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Service list */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group py-6 border-b border-neutral-300 cursor-pointer transition-all ${
                  activeIndex === index ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-400">{"←"}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      {service.title}
                    </h3>
                    <span className="text-sm text-neutral-400">{"—"}</span>
                  </div>
                  <ArrowUpRight className={`w-6 h-6 transition-all ${
                    activeIndex === index ? "text-orange-500 rotate-0" : "text-neutral-400 -rotate-45"
                  }`} />
                </div>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-neutral-600 mt-3 pl-10"
                  >
                    {service.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right - Dynamic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden sticky top-32"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
