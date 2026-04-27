"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, AlertCircle } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  whatsapp: string
  socialMedia: string
  website: string
  inquiryType: string
  description: string
}

interface FormErrors {
  fullName?: string
  email?: string
  whatsapp?: string
  website?: string
}

const inquiryTypes = [
  "Branding & Identity",
  "UI/UX Design",
  "Web Development",
  "Creative Direction",
  "Full Project",
  "Other",
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    socialMedia: "",
    website: "",
    inquiryType: "",
    description: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.whatsapp && !/^\d{10,}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "Please enter a valid phone number"
    }

    if (formData.website) {
      try {
        new URL(formData.website)
      } catch {
        newErrors.website = "Please enter a valid URL"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-black py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-neutral-400 mb-8">
              Your inquiry has been received successfully. We will contact you soon.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  fullName: "",
                  email: "",
                  whatsapp: "",
                  socialMedia: "",
                  website: "",
                  inquiryType: "",
                  description: "",
                })
              }}
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Submit another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
              ← Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Let&apos;s Create Something{" "}
              <span className="text-orange-500">Extraordinary</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Ready to transform your brand? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-neutral-500 text-sm">Email</p>
                <a
                  href="mailto:hello@formestudio.com"
                  className="text-white text-xl hover:text-orange-500 transition-colors"
                >
                  hello@formestudio.com
                </a>
              </div>
              <div>
                <p className="text-neutral-500 text-sm">WhatsApp</p>
                <a
                  href="tel:+1234567890"
                  className="text-white text-xl hover:text-orange-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white text-sm mb-2">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-neutral-900 border ${
                    errors.fullName ? "border-red-500" : "border-neutral-700"
                  } rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-sm mb-2">
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-neutral-900 border ${
                    errors.email ? "border-red-500" : "border-neutral-700"
                  } rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-white text-sm mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`w-full bg-neutral-900 border ${
                    errors.whatsapp ? "border-red-500" : "border-neutral-700"
                  } rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors`}
                  placeholder="+1 234 567 890"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Social Media & Website in a row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="socialMedia" className="block text-white text-sm mb-2">
                    Social Media Profile
                  </label>
                  <input
                    type="text"
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="@username"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-white text-sm mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className={`w-full bg-neutral-900 border ${
                      errors.website ? "border-red-500" : "border-neutral-700"
                    } rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors`}
                    placeholder="https://example.com"
                  />
                  {errors.website && (
                    <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.website}
                    </p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-white text-sm mb-2">
                  Inquiry About
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select an option</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-white text-sm mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
