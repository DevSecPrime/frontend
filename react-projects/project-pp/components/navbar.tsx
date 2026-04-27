"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>

          <Link href="#home" className="text-white font-bold text-xl tracking-tight">
            FORME<span className="text-orange-500">.</span>
          </Link>

          <Link
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <span className="text-white font-bold text-xl tracking-tight">
                  FORME<span className="text-orange-500">.</span>
                </span>
                <div className="w-10" />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
