"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Heart, ChevronRight, Shield, RefreshCw, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ValuesPage() {
  const values = [
    {
      icon: <Shield className="h-16 w-16 text-purple-600" />,
      title: "Integrity",
      description:
        "LuSEC shall have strict adherence to moral and ethical practices. We believe in transparency, honesty, and accountability in all our dealings with stakeholders, customers, and communities.",
    },
    {
      icon: <RefreshCw className="h-16 w-16 text-purple-600" />,
      title: "Continuous Improvement",
      description:
        "LuSEC shall get better each time. We are committed to ongoing learning, innovation, and enhancement of our processes, products, and services to deliver ever-improving value to our customers.",
    },
    {
      icon: <Zap className="h-16 w-16 text-purple-600" />,
      title: "Delivery",
      description:
        "We get things done. We are results-oriented and committed to fulfilling our promises, meeting deadlines, and exceeding expectations in all aspects of our operations.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-purple-600/90 to-purple-700/90 text-white relative overflow-hidden">
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
            <span>Our Values</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
            <p className="text-xl text-white/90 mb-6">The principles that guide our actions and decisions</p>
          </motion.div>
        </div>
      </section>

      {/* Values Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Core Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Three Pillars of LuSEC</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The following three pillars represent the values of LuSEC and guide everything we do.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 text-center p-8">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-purple-50 p-8 rounded-xl mb-12 border border-purple-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Living Our Values</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Lunyati Solar Energy Corporation, our values aren't just words on a page—they're the foundation of
                our culture and guide our daily actions. We strive to embody these principles in every interaction,
                decision, and project we undertake.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/goals">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Goals & Objectives
              </Button>
            </Link>
            <Link href="/about/philosophy">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                Corporate Philosophy <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

