"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
            ← What we&apos;re selling
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
            Forme Create for Brands that Value —{" "}
            <span className="text-neutral-400">
              Clarity Over Noise, Believing that Meaningful Design Begins with Intention and Grows.
            </span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern office space"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black text-white p-8 rounded-2xl">
              <p className="text-5xl font-bold mb-2">★ ★ ★</p>
              <p className="text-neutral-300">
                We are a creative agency passionate about crafting impactful digital experiences. Every project is a new opportunity to push creative boundaries.
              </p>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 mt-6 text-orange-500 hover:text-orange-400 transition-colors"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Image and description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-neutral-600 text-lg">
              We craft visual identities that embody and digital experiences with innovative thinking, strategic precision, and execution that stands apart.
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="text-sm text-neutral-500 hover:text-black transition-colors underline underline-offset-4"
              >
                Our Philosophy
              </Link>
              <Link
                href="#services"
                className="text-sm text-neutral-500 hover:text-black transition-colors underline underline-offset-4"
              >
                Brand Storytelling
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
