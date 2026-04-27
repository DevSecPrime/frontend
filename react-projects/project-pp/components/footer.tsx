"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

const footerLinks = {
  general: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Testimonial", href: "#testimonial" },
  ],
  services: [
    { name: "Basic Plan", href: "#pricing" },
    { name: "Pro Plan", href: "#pricing" },
    { name: "Custom Plan", href: "#pricing" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "Behance", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="#home" className="text-white font-bold text-2xl tracking-tight">
              FORME<span className="text-orange-500">.</span>
            </Link>
            <p className="text-neutral-400 mt-4 max-w-sm">
              We create timeless brand identities and digital experiences that stand the test of time.
            </p>
          </div>

          {/* General Links */}
          <div>
            <p className="text-white font-medium mb-4">General</p>
            <ul className="space-y-3">
              {footerLinks.general.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <p className="text-white font-medium mb-4">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-white font-medium mb-4">Social Media</p>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-t border-white/10">
          <div>
            <p className="text-neutral-500 text-sm mb-1">Let&apos;s Work to Life</p>
            <a
              href="mailto:hello@formestudio.com"
              className="text-white text-2xl md:text-3xl font-bold hover:text-orange-500 transition-colors"
            >
              hello@formestudio.com
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-neutral-500 text-sm">
            &copy; 2024 Forme Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Large logo */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[8vw] md:text-[6vw] font-bold text-white/5 tracking-tighter">
            FORME<span className="text-orange-500/20">.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
