"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BarChart3, ChevronRight, TrendingUp, AlertTriangle, Sun, CloudRain } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SwotPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-600/90 to-indigo-700/90 text-white relative overflow-hidden">
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
            <span>SWOT Analysis</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SWOT Analysis</h1>
            <p className="text-xl text-white/90 mb-6">
              Understanding our strengths, weaknesses, opportunities, and threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* SWOT Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-600 font-medium">Where We Stand</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SWOT Analysis</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive assessment of our position in the renewable energy market
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <div className="bg-green-50 p-8 rounded-xl border border-green-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Strengths</h3>
                </div>
                <div className="prose prose-lg">
                  <p>
                    Aside from the fact that we have vast hectares of land in a strategic location for our solar farm,
                    our core strength lies in the power of our team; our workforce. We have a team of certified and
                    highly trained and experienced solar panel installation, maintenance, and repair engineers and
                    technicians, a team with excellent qualifications and experience in various niche areas in The Solar
                    Pack Developers industry.
                  </p>
                  <p>
                    Aside from the synergy that exists in our carefully selected workforce, our services will be guided
                    by best practices in the industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-red-50 p-8 rounded-xl border border-red-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Weaknesses</h3>
                </div>
                <div className="prose prose-lg">
                  <p>
                    As a new solar pack and solar panel installation, maintenance, and repair company in Mumbwe, it
                    might take some time for our organization to break into the market and gain acceptance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Sun className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Opportunities</h3>
                </div>
                <div className="prose prose-lg">
                  <p>
                    No doubt, the opportunities in the Solar Pack power plant industry are massive considering the
                    support from the government and of course the number of individuals and corporate organizations who
                    are now switching over to alternative energy such as solar energy.
                  </p>
                  <p>We are ready to take advantage of any opportunity that is available in the industry.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CloudRain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Threats</h3>
                </div>
                <div className="prose prose-lg">
                  <p>
                    Just like any other business, one of the major threats that we are likely going to face is an
                    economic downturn. It is a fact that the economic downturn affects purchasing/spending power.
                  </p>
                  <p>
                    Another threat that may likely confront us is the arrival of a new solar farm or solar panel
                    installation, maintenance and repair company in the same location where our target market exists and
                    who may want to adopt the same Business model as us.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-between mt-12">
            <Link href="/about/business-model">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Business Model
              </Button>
            </Link>
            <Link href="/about/process">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
                Our Process <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

