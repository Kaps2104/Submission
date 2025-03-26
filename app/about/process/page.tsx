"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Settings, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough consultation to understand your energy needs, goals, and site conditions.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description:
        "Our engineers conduct a detailed site assessment to determine the optimal solar solution for your location.",
    },
    {
      number: "03",
      title: "Custom Design",
      description:
        "We create a customized solar system design tailored to your specific requirements and site conditions.",
    },
    {
      number: "04",
      title: "Proposal & Agreement",
      description:
        "We present a comprehensive proposal including system specifications, costs, and expected returns on investment.",
    },
    {
      number: "05",
      title: "Permitting & Approvals",
      description:
        "We handle all necessary permits and regulatory approvals to ensure compliance with local requirements.",
    },
    {
      number: "06",
      title: "Installation",
      description:
        "Our experienced team installs your solar system with minimal disruption to your property or operations.",
    },
    {
      number: "07",
      title: "System Testing",
      description: "We conduct thorough testing to ensure your system is operating at peak efficiency and performance.",
    },
    {
      number: "08",
      title: "Commissioning",
      description: "The system is officially commissioned and connected to the grid or your internal power network.",
    },
    {
      number: "09",
      title: "Monitoring & Maintenance",
      description: "We provide ongoing monitoring and maintenance services to ensure optimal system performance.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-cyan-600/90 to-cyan-700/90 text-white relative overflow-hidden">
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
            <span>Our Process</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-white/90 mb-6">A systematic approach to delivering solar energy solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Process Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-cyan-600" />
                <span className="text-cyan-600 font-medium">Our Methodology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures efficient, high-quality solar energy solutions from consultation to
                completion.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-cyan-100"></div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-8">
                      <div className="relative">
                        <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
                          {step.number}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="absolute top-12 left-6 h-12 w-1 bg-cyan-600"></div>
                        )}
                      </div>
                      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex-1 border-l-4 border-cyan-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <ScrollReveal>
            <div className="bg-cyan-50 p-8 rounded-xl mt-16 mb-12 border border-cyan-100">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At every step of our process, we are committed to transparency, quality, and customer satisfaction. We
                keep you informed throughout the journey and ensure that the final solution meets or exceeds your
                expectations. Our goal is not just to install solar systems, but to build lasting relationships with our
                clients based on trust and exceptional results.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/swot">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> SWOT Analysis
              </Button>
            </Link>
            <Link href="/about">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white flex items-center gap-2">
                Back to About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

