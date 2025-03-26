"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  bgColor?: string
  bgImage?: string
}

export default function ParallaxSection({
  children,
  bgColor = "bg-gray-900",
  bgImage = "/placeholder.svg?height=1080&width=1920",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${bgColor}`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

