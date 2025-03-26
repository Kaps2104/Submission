"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  delay?: number
}

export default function TestimonialCard({ name, role, quote, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Quote className="h-12 w-12 text-orange-500/20 absolute top-6 right-6" />
      <p className="text-gray-700 mb-8 italic text-lg leading-relaxed relative z-10">"{quote}"</p>
      <div className="flex flex-col items-start gap-2">
        <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
        <p className="text-orange-600">{role}</p>
      </div>
    </motion.div>
  )
}

