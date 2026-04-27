"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic Plan",
    price: "$990",
    period: "/month",
    description: "For teams needing ongoing creative support.",
    features: [
      "Visual elements brief",
      "2 revision cycles",
      "Social media assets",
      "1 week turnaround",
    ],
    cta: "Choose This Plan",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "$2,400",
    period: "/month",
    description: "For teams handling ongoing multiple projects.",
    features: [
      "Larger deliverables count",
      "Motion Retainers (quarterly)",
      "Priority Turnaround",
      "Slack/Discord workspace",
    ],
    cta: "Choose This Plan",
    popular: true,
  },
  {
    name: "Project Based",
    price: "Custom",
    period: "",
    description: "For brands seeking full end-to-end solutions.",
    features: [
      "End-to-end design support",
      "Priority communication",
      "Strategy to execution",
      "Flexible engagement",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-24 md:py-32 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
            ← Pricing Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">
            Design, Scaled to Your Needs,<br />
            <span className="text-neutral-400">Instantly Ready When You Are.</span>
          </h2>
          <p className="text-neutral-500 max-w-xl">
            Choose a pricing plan that scales with your ongoing operations.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-neutral-300 ring-2 ring-[#f5f5f5]" />
                ))}
              </div>
              <span className="text-sm text-neutral-500">Trusted by 100+ brands</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-black">Spotify</span>
              <span className="text-sm font-medium text-black">Slack</span>
              <span className="text-sm font-medium text-black">Discord</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                plan.popular
                  ? "bg-black text-white"
                  : "bg-white text-black border border-neutral-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm mb-2 ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-neutral-400" : "text-neutral-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-orange-500" : "text-neutral-400"}`} />
                    <span className={`text-sm ${plan.popular ? "text-neutral-300" : "text-neutral-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-black hover:bg-neutral-800 text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
