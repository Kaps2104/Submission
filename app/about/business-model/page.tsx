"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Briefcase, ChevronRight, Zap, Wrench, Building, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function BusinessModelPage() {
  const businessAreas = [
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Energy Supply",
      description:
        "Supply solar energy to domestic, commercial and industrial enterprises in need of clean, efficient and reliable solar energy.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "Panel Installations",
      description:
        "Installation of solar panels, repair and maintenance services thanks to a qualified and reputable installation and quality assurance team.",
    },
    {
      icon: <Building className="h-12 w-12 text-white" />,
      title: "Plant Constructions",
      description:
        "Construction of Solar Power Plants, through power plants using the latest environmentally friendly technologies.",
    },
    {
      icon: <LineChart className="h-12 w-12 text-white" />,
      title: "Consultation",
      description:
        "Consultation, energy analysis studies and designing of integrated solar system plans. This involves holding discussions with potential customers to determine their solar needs and recommend an appropriate solution.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600/90 to-teal-700/90 text-white relative overflow-hidden">
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
            <span>Business Model</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Model</h1>
            <p className="text-xl text-white/90 mb-6">
              How we create, deliver, and capture value in the renewable energy market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Model Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-teal-600" />
                <span className="text-teal-600 font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Operate</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our business model is built around four key areas that allow us to provide comprehensive solar energy
                solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {businessAreas.map((area, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="p-8">
                    <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-white/90 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-gray-50 p-8 rounded-xl mb-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value Proposition</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  At Lunyati Solar Energy Corporation, our business model is centered around providing sustainable,
                  reliable, and cost-effective solar energy solutions to meet the growing energy needs in Zambia and
                  beyond. We create value through:
                </p>
                <ul>
                  <li>
                    <strong>Reliability:</strong> Ensuring consistent energy supply through high-quality solar
                    installations
                  </li>
                  <li>
                    <strong>Sustainability:</strong> Reducing carbon footprints and promoting environmental conservation
                  </li>
                  <li>
                    <strong>Cost-effectiveness:</strong> Providing long-term energy savings compared to traditional
                    energy sources
                  </li>
                  <li>
                    <strong>Expertise:</strong> Leveraging our team's extensive experience in renewable energy and
                    engineering
                  </li>
                  <li>
                    <strong>Innovation:</strong> Continuously adopting the latest technologies and best practices
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/philosophy">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Corporate Philosophy
              </Button>
            </Link>
            <Link href="/about/swot">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
                SWOT Analysis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

