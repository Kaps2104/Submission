"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Target, ChevronRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600/90 to-blue-700/90 text-white relative overflow-hidden">
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
            <span>Goals & Objectives</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Goals & Objectives</h1>
            <p className="text-xl text-white/90 mb-6">Strategic targets that drive our organization forward</p>
          </motion.div>
        </div>
      </section>

      {/* Goals Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Target className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Our Goals</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Objectives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The goals of this project for Lunyati Solar Energy Corporation Limited ("Lunyati") are focused on
                efficiency, profitability, and positive impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100 mb-12">
                <p className="text-xl text-gray-800 leading-relaxed">
                  The goals of this project for Lunyati Solar Energy Corporation Limited ("Lunyati") is to be an
                  efficient organization to implement this Solar PV power plant and do it in a way that the organization
                  is financially profitable and therefore sustainable, so that investors have a low risk and safe
                  investment opportunity, that customers get a good outcome and society as a whole gets a positive
                  impact.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Organization</h3>
                    <p className="text-gray-700">
                      Build and maintain an efficient organizational structure to implement Solar PV power plants with
                      maximum effectiveness and minimal waste.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Profitability</h3>
                    <p className="text-gray-700">
                      Ensure the organization is financially profitable and therefore sustainable in the long term,
                      creating value for all stakeholders.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Low-Risk Investment</h3>
                    <p className="text-gray-700">
                      Provide investors with a low risk and safe investment opportunity through careful planning, risk
                      management, and transparent operations.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Positive Impact</h3>
                    <p className="text-gray-700">
                      Ensure that customers get a good outcome and society as a whole experiences a positive impact
                      through our renewable energy solutions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <Link href="/about/mission">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Our Mission
              </Button>
            </Link>
            <Link href="/about/values">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                Our Values <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

