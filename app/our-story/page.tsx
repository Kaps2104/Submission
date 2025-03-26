"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Play, Users, Sun, Lightbulb, Heart, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VideoPlayer } from "@/components/video-player"

export default function OurStoryPage() {
  const [videoOpen, setVideoOpen] = useState(false)

  // Replace with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ" // Example ID - replace with your actual video ID

  const milestones = [
    {
      year: "2013",
      title: "Foundation",
      description: "Lunyati Solar Energy Corporation was founded with a vision to transform Zambia's energy landscape.",
    },
    {
      year: "2016",
      title: "First Major Project",
      description:
        "Completed our first large-scale solar installation, bringing renewable energy to rural communities.",
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Expanded operations to cover more regions in Zambia, with a growing team of solar experts.",
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Introduced cutting-edge solar technologies and battery storage solutions to the Zambian market.",
    },
    {
      year: "2023",
      title: "Luampa Solar Park",
      description: "Broke ground on our largest project to date, the Luampa District Solar Park.",
    },
  ]

  const values = [
    {
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      title: "Sustainability",
      description: "We're committed to creating a cleaner, more sustainable future through renewable energy.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Community",
      description: "We believe in empowering communities through access to reliable, clean energy.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Innovation",
      description: "We continuously seek innovative solutions to meet Zambia's evolving energy needs.",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and accountability in all our dealings.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white relative overflow-hidden">
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
            <span>Our Story</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/90 mb-6">
              Discover the journey of Lunyati Solar Energy Corporation and our mission to transform Zambia's energy
              landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-8 cursor-pointer group"
                onClick={() => setVideoOpen(true)}
              >
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Lunyati Solar video thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Powering Zambia's Sustainable Future</h2>
                <p>
                  Lunyati Solar Energy Corporation Limited was founded with a clear vision: to harness the abundant
                  solar resources of Zambia and transform them into reliable, sustainable energy for all. Our journey
                  began with a small team of passionate individuals who believed in the power of renewable energy to
                  change lives and protect our planet.
                </p>
                <p>
                  Today, we've grown into one of Zambia's leading solar energy providers, with a track record of
                  successful projects ranging from residential installations to large-scale solar farms. Our team
                  combines local expertise with international best practices to deliver solar solutions that are
                  tailored to the unique needs of our clients and communities.
                </p>
                <p>
                  What sets us apart is our commitment to not just installing solar systems, but creating lasting
                  impact. We work closely with communities, businesses, and government entities to ensure that our solar
                  solutions address real needs and create meaningful change. From reducing energy costs for families to
                  helping businesses become more sustainable, we're proud of the positive impact our work has on Zambia.
                </p>
                <p>
                  As we look to the future, our mission remains clear: to light up Zambia and the rest of the region
                  with clean, reliable solar energy. We're excited about the growing adoption of renewable energy in
                  Zambia and are committed to leading this transformation with innovation, integrity, and a deep
                  commitment to sustainability.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key milestones in our mission to transform Zambia's energy landscape.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-16 md:left-24 top-0 bottom-0 w-1 bg-orange-100"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                      <div className="flex items-center gap-4 min-w-[120px] md:min-w-[180px]">
                        <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
                          {milestone.year.substring(2)}
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden md:block">{milestone.year}</span>
                      </div>
                      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex-1 border-l-4 border-orange-500 ml-8 md:ml-0">
                        <div className="md:hidden text-lg font-bold text-gray-900 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The core principles that guide everything we do at Lunyati Solar.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 h-full">
                  <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/80 to-orange-600/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Solar panels background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Us in Our Mission</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're looking to power your home with solar energy or interested in partnering with us on
                larger projects, we'd love to hear from you.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg border border-white/30"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {videoOpen && <VideoPlayer videoId={youtubeVideoId} onClose={() => setVideoOpen(false)} />}
      </AnimatePresence>
    </main>
  )
}

