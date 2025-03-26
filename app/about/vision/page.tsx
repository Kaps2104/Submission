"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Eye, ChevronRight, Sun, Users, Heart, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function VisionPage() {
  const visionPillars = [
    {
      icon: <Sun className="h-8 w-8 text-white" />,
      title: "Clean, Carbon-free",
      description:
        "To provide sustainable and environmentally friendly energy solutions that reduce carbon emissions and protect our planet for future generations.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "People Capital",
      description:
        "To build 'People Capital' with integrity and proven experience. Establish integrity in all aspects of our business through the creation of a climate of respect for the individual and encourage self respect.",
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Corporate Social Responsibility",
      description:
        "A strong focus on corporate social responsibility to aid sustainable development in our communities through social and educational programs, environmental awareness and job creation is a core feature in all our developments.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Innovation & Entrepreneurship",
      description:
        "Delivering low cost renewable energy through innovation and entrepreneurship, constantly seeking new ways to improve efficiency and accessibility.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-600/90 to-green-700/90 text-white relative overflow-hidden">
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
            <span>Our Vision</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl text-white/90 mb-6">
              Lighting up Zambia and the rest of the region with sustainable, clean energy solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Eye className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Building a Sustainable Future</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our vision is built on four key pillars that guide everything we do at Lunyati Solar Energy Corporation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {visionPillars.map((pillar, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="p-8">
                    <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                    <p className="text-white/90 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Lunyati Solar Energy Corporation, we envision a future where clean, renewable energy is accessible to
                all, powering economic growth while preserving our environment. We aim to be the leading provider of
                solar energy solutions in Zambia and beyond, known for our innovation, integrity, and positive impact on
                communities.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/chairman-message">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Chairman's Message
              </Button>
            </Link>
            <Link href="/about/mission">
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                Our Mission <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

