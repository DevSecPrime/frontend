"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Sonnet Poster",
    description: "A masterful blend of poetry, lines, and rhythm. Crafted to elevate a conceptual editorial.",
    tags: ["Branding Identity", "Print Design"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop",
    featured: true,
  },
  {
    title: "Earbuds Device App",
    description: "A sleek Figma interface designed for clarity, confidence, and effortless control.",
    tags: ["App", "Product Design"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
  },
  {
    title: "Fiberspace Branding",
    description: "Visual harmony with an angular twist. Clean typography for simple everyday solutions.",
    tags: ["Branding", "Visual Identity"],
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce App",
    description: "A sleek e-commerce that transforms product discovery to a lifestyle shopping experience.",
    tags: ["App Development", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
  },
  {
    title: "Kinetica Logo",
    description: "A modern cross-section icon that has evolved to reflect the evolving movement.",
    tags: ["Branding Identity", "Logo Design"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
  },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
              ← Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Our Work Doesn&apos;t Fade<br />
              <span className="text-neutral-500">It Stays With You.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <p className="text-neutral-400 max-w-md mb-4">
              Every project is more than results. Your lasting impression leaves a lasting impression.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              See More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:row-span-2 group"
          >
            <div className="relative h-full rounded-2xl overflow-hidden bg-neutral-900">
              <div className="relative aspect-[3/4]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-500 text-sm">Sonnet 012</span>
                  <span className="text-neutral-500">—</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{projects[0].title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{projects[0].description}</p>
                <div className="flex gap-2 flex-wrap">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/10 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/10 text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
