"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
]

export function Testimonial() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-8">
            ← Client Testimonials
          </p>

          {/* Quote */}
          <div className="relative mb-12">
            <span className="text-orange-500 text-6xl font-serif absolute -top-4 -left-4">&ldquo;</span>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight text-balance px-8">
              They captured our vision with surprising clarity. The process was simple, colaborative, and the result feels timeless.
            </blockquote>
          </div>

          {/* Author */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <Image
                src={avatars[0]}
                alt="Sarah C"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-black">— Sarah C.</p>
              <p className="text-neutral-500 text-sm">Creative Lead, TechFlow</p>
            </div>
          </div>

          {/* Other clients */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {avatars.slice(1).map((avatar, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white"
                >
                  <Image
                    src={avatar}
                    alt={`Client ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-sm">
              <span className="text-black font-medium">100+ clients</span> trust us for design
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
