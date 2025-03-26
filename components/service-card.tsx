"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
      <Link href="/products" className="inline-flex items-center text-white hover:text-green-300 transition-colors">
        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

