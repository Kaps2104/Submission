"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Target, ChevronRight, TrendingUp, Leaf, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MissionPage() {
  const missionPoints = [
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
      title: "Develop Profitable Power Plants",
      description:
        "Management's mission is to develop the Power Plant into a profitable venture that will provide the Company and its owners with a steady stream of income from the sale of energy production services.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-orange-500" />,
      title: "Environmentally Friendly Technologies",
      description:
        "LuSEC aims to provide environmentally friendly energy technologies and management systems to mitigate against global warming.",
    },
    {
      icon: <Building className="h-10 w-10 text-orange-500" />,
      title: "Economic Development",
      description:
        "Contributing to national and regional economic development through employment creation and good corporate citizenship.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-500/90 via-orange-600/90 to-orange-700/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Solar panels background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Mission</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-white/90 mb-6">Driving sustainable energy solutions for a brighter future</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Target className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Purpose and Direction</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Lunyati Solar Energy Corporation, our mission guides our daily operations and long-term strategy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {missionPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="p-8">
                    <div className="bg-orange-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-orange-50 p-8 rounded-xl mb-12 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission at Lunyati Solar Energy Corporation is to develop profitable and sustainable solar power
                plants that provide reliable energy solutions while contributing to environmental protection and
                economic development in Zambia and the broader region. We are committed to operational excellence,
                innovation, and creating value for all our stakeholders.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/vision">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Our Vision
              </Button>
            </Link>
            <Link href="/about/goals">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
                Goals & Objectives <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

