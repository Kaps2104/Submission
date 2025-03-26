"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  icon: ReactNode
  image: string
  delay?: number
}

export default function ProductCard({ title, description, icon, image, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl h-[400px] flex items-end"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Background Image */}
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
      />

      {/* Content */}
      <div className="relative z-10 p-8 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/80 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        <Link
          href="/products"
          className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors font-medium"
        >
          Learn More{" "}
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  )
}

