"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ChairmanMessagePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
            <span>Chairman's Message</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Message from the Executive Chairperson</h1>
            <p className="text-xl text-white/90 mb-6">
              A vision for sustainable energy and economic development in Zambia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 lg:col-span-3">
              <ScrollReveal>
                <div className="sticky top-32">
                  <div className="relative h-96 rounded-xl overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Executive Chairperson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Mr. Likando D. Mataa</h3>
                  <p className="text-orange-500 font-medium mb-4">Executive Chairperson</p>
                  <p className="text-gray-600 text-sm">BSc. Business Administration</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <ScrollReveal>
                <div className="bg-gray-50 p-8 rounded-xl relative mb-8">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-orange-200" />
                  <p className="text-xl text-gray-700 italic leading-relaxed">
                    "Lunyati Solar Energy Cooperation brings together a team of enthusiastic, dedicated and experienced
                    minds in the renewable energy sector in Zambia."
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p>
                    Lunyati Solar Energy Cooperation brings together a team of enthusiastic, dedicated and experienced
                    minds in the renewable energy sector in Zambia.
                  </p>
                  <p>
                    A team that is passionate about rethinking energy in terms of making deliberate efforts to
                    contribute to a clean environment as well as monetizing the sector.
                  </p>
                  <p>
                    It cannot be overemphasized that renewable source of power; solar energy is critical in reducing
                    greenhouse gas emissions and mitigating climate change to protect humans, wild life and the
                    ecosystems.
                  </p>
                  <p>
                    With the backing of renowned local and international funding agencies and corporations, Lunyati is
                    set up for success through the establishment of several solar energy plants across the country,
                    sparking massive job prospects for Zambians, and that will result in improved livelihoods for
                    families and communities, and that will greatly contribute to the economic development of the
                    country. The solar project which is anticipated to operate at its full generation capacity of
                    1,500MW in three years' time, will evidently activate economic activities in several parts of the
                    country, particularly the underserved rural communities where the majority of Zambians live.
                    Furthermore, Lunyati is strategic about supporting the government of the Republic of Zambia to be an
                    energy hub within Sub-Saharan Africa to address the energy deficit the region is faced with.
                  </p>
                  <p className="font-bold text-xl text-orange-600">
                    Our vision is clear, solid and intentional! We are "lighting up Zambia and the rest of the region."
                  </p>
                </div>
              </ScrollReveal>

              <div className="flex justify-between mt-12">
                <Link href="/about/team">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Our Team
                  </Button>
                </Link>
                <Link href="/about/vision">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
                    Our Vision <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

