"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Users,
  MessageSquare,
  Eye,
  Target,
  Heart,
  BookOpen,
  Briefcase,
  BarChart3,
  Settings,
  Play,
  Sun,
  Lightbulb,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VideoModal } from "@/components/video-modal"

export default function AboutPage() {
  const [videoOpen, setVideoOpen] = useState(false)

  // Replace with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ" // Example ID - replace with your actual video ID

  const aboutSections = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Our Team",
      description: "Meet our experienced leadership team driving Lunyati Solar forward.",
      href: "/about/team",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Chairman's Message",
      description: "A vision for sustainable energy and economic development in Zambia.",
      href: "/about/chairman-message",
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: <Eye className="h-8 w-8 text-white" />,
      title: "Our Vision",
      description: "Lighting up Zambia and the region with clean, sustainable energy.",
      href: "/about/vision",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Mission",
      description: "Driving sustainable energy solutions for a brighter future.",
      href: "/about/mission",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Goals & Objectives",
      description: "Strategic targets that drive our organization forward.",
      href: "/about/goals",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Our Values",
      description: "The principles that guide our actions and decisions.",
      href: "/about/values",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Corporate Philosophy",
      description: "Understanding Zambia's energy landscape and our role in its transformation.",
      href: "/about/philosophy",
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Business Model",
      description: "How we create, deliver, and capture value in the renewable energy market.",
      href: "/about/business-model",
      color: "from-teal-600 to-teal-700",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "SWOT Analysis",
      description: "Understanding our strengths, weaknesses, opportunities, and threats.",
      href: "/about/swot",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Our Process",
      description: "A systematic approach to delivering solar energy solutions.",
      href: "/about/process",
      color: "from-cyan-600 to-cyan-700",
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
            <span>About Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lunyati Solar</h1>
            <p className="text-xl text-white/90 mb-6">
              Discover our story, our team, and our commitment to sustainable energy solutions in Zambia and beyond.
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

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
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

      {/* About Navigation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn More About Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the different aspects of Lunyati Solar Energy Corporation to understand our vision, mission,
                values, and approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <Link href={section.href} className="block h-full">
                  <div
                    className={`bg-gradient-to-br ${section.color} rounded-xl shadow-lg overflow-hidden h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="p-8">
                      <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-6">{section.description}</p>
                      <div className="inline-flex items-center text-white/80 group-hover:text-white transition-colors">
                        <span>Learn More</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
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
        {videoOpen && <VideoModal videoId={youtubeVideoId} onClose={() => setVideoOpen(false)} />}
      </AnimatePresence>
    </main>
  )
}

