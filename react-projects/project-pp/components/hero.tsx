"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop", alt: "Abstract design" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", alt: "Person working" },
  { src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop", alt: "Branding materials" },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-sm uppercase tracking-widest mb-6"
            >
              Digital Brand Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 text-balance"
            >
              Simple Lines, Bold Ideas,{" "}
              <span className="text-orange-500">Timeless Brands.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-neutral-400 text-lg mb-10 max-w-md"
            >
              We don&apos;t just design. We strip away the noise, leaving only what matters: timeless visuals and brand experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all"
              >
                Let&apos;s Collaborate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="text-orange-500 font-bold">★ 4.9</span>
              <span className="text-neutral-400 text-sm">on Clutch from 100+ reviews</span>
            </motion.div>
          </div>

          {/* Right content - Image grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={heroImages[0].src}
                    alt={heroImages[0].alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image
                    src={heroImages[1].src}
                    alt={heroImages[1].alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                  <Image
                    src={heroImages[2].src}
                    alt={heroImages[2].alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl"
            >
              <p className="font-bold text-lg">120+ Projects</p>
              <p className="text-neutral-600 text-sm">Delivered worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
