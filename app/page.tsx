"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Sun, Wrench, Phone, Users, ChevronDown, ArrowUpRight, Play, Zap, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import ProductCard from "@/components/product-card"
import ParallaxSection from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingCta } from "@/components/floating-cta"
import { VideoModal } from "@/components/video-modal"
import { SiteLoader } from "@/components/site-loader"

export default function Home() {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {isLoading && <SiteLoader onLoadingComplete={() => setIsLoading(false)} />}

      <main className={`min-h-screen overflow-x-hidden bg-white font-sans ${isLoading ? "hidden" : ""}`}>
        <Navbar />

        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2574&auto=format&fit=crop"
              alt="Solar panels with sun flare"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>

          <motion.div
            className="container relative z-10 text-left px-4 md:px-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Powering <span className="text-orange-400">Tomorrow</span> With Solar Energy Today
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Lunyati Solar Energy Corporation Limited delivers innovative solar solutions for a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500/70 hover:bg-orange-600/70 backdrop-blur-md text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg border border-orange-400/30"
                >
                  Get a Free Consultation
                </Button>
                <Link href="/our-story">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-8 py-6 text-lg font-medium group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:text-orange-400 transition-colors" />
                    Watch Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            style={{ opacity, scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              onClick={scrollToProducts}
              className="text-white flex flex-col items-center transition-transform hover:translate-y-1"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-10 w-10 animate-bounce" />
            </button>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20 max-w-5xl mx-auto">
              {[
                { value: "10+", label: "Years Experience", icon: <Sun className="h-6 w-6 text-orange-500" /> },
                { value: "500+", label: "Projects Completed", icon: <Zap className="h-6 w-6 text-orange-500" /> },
                { value: "1000+", label: "Happy Clients", icon: <Users className="h-6 w-6 text-orange-500" /> },
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100/50 flex items-center gap-6">
                    <div className="bg-orange-50 p-4 rounded-full flex items-center justify-center">{stat.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2574&auto=format&fit=crop"
                      alt="Solar installation team"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <div className="inline-block px-4 py-2 bg-orange-100/70 backdrop-blur-sm text-orange-600 rounded-full font-medium mb-4">
                    About Lunyati Solar
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                    Pioneering <span className="text-green-600">Sustainable</span> Energy Solutions
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Lunyati Solar Energy Corporation Limited is at the forefront of the renewable energy revolution,
                    dedicated to harnessing the power of the sun for sustainable energy production.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our mission is to provide innovative, reliable, and efficient solar energy products and services to
                    meet the growing demand for clean energy solutions across various sectors.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { title: "Innovation", description: "Cutting-edge solar technology" },
                      { title: "Quality", description: "Premium products & services" },
                      { title: "Expertise", description: "Industry-leading professionals" },
                      { title: "Support", description: "Dedicated customer service" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-100/70 backdrop-blur-sm p-2 rounded-full mt-1">
                          <Shield className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/about">
                    <Button className="rounded-full px-8 group bg-gray-900/70 hover:bg-gray-800/70 backdrop-blur-md border border-gray-800/30">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Products Section with Parallax */}
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2574&auto=format&fit=crop">
          <section id="products" className="py-32">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="text-center mb-20 max-w-3xl mx-auto">
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium mb-4">
                    Our Premium Products
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Cutting-Edge Solar Solutions
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed">
                    Explore our range of high-efficiency solar energy products designed for maximum performance and
                    reliability. Our products are sourced from top manufacturers and undergo rigorous quality testing to
                    ensure longevity and optimal energy production.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                  title="Premium Solar Panels"
                  description="High-efficiency monocrystalline solar panels designed for maximum energy production in various environmental conditions. Our panels feature advanced PERC technology with efficiency ratings up to 22%, ensuring you get the most energy from every ray of sunshine."
                  image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2558&auto=format&fit=crop"
                  icon={<Sun className="h-10 w-10" />}
                  delay={0.1}
                />
                <ProductCard
                  title="Advanced Inverters"
                  description="State-of-the-art inverter technology to convert solar energy into usable electricity for your home or business. Our range includes grid-tie, off-grid, and hybrid systems with smart monitoring capabilities and industry-leading efficiency ratings of up to 98%."
                  image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop"
                  icon={<Wrench className="h-10 w-10" />}
                  delay={0.2}
                />
                <ProductCard
                  title="Smart Energy Storage"
                  description="Reliable battery storage solutions with intelligent management systems to ensure continuous power supply. Our lithium-based storage systems offer up to 10,000 cycle lifespans, 10-year warranties, and seamless integration with both new and existing solar installations."
                  image="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2671&auto=format&fit=crop"
                  icon={<Zap className="h-10 w-10" />}
                  delay={0.3}
                />
              </div>

              <ScrollReveal delay={0.4}>
                <div className="text-center mt-16">
                  <Link href="/products">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-8 group"
                    >
                      View All Products{" "}
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ParallaxSection>

        {/* What's New Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="inline-block px-4 py-2 bg-green-100/70 backdrop-blur-sm text-green-600 rounded-full font-medium mb-4">
                  Latest Updates
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  What's <span className="text-green-600">New</span> at Lunyati Solar
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Stay updated with the latest developments and innovations from our team.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Next-Gen Solar Panel Launch",
                  description:
                    "Introducing our latest high-efficiency solar panel series with improved energy conversion rates and enhanced durability.",
                  date: "June 15, 2023",
                  image:
                    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2574&auto=format&fit=crop",
                },
                {
                  title: "Industry Excellence Award",
                  description:
                    "Lunyati Solar receives prestigious award for innovation in renewable energy solutions at the annual Global Energy Summit.",
                  date: "May 22, 2023",
                  image:
                    "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2670&auto=format&fit=crop",
                },
                {
                  title: "International Expansion",
                  description:
                    "We're excited to announce our expansion into new international markets, bringing sustainable energy to more communities worldwide.",
                  date: "April 10, 2023",
                  image:
                    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2574&auto=format&fit=crop",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden border border-gray-100/50">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-orange-600 mb-2 font-medium">{item.date}</p>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        Read Full Story{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-16">
                <Link href="/whats-new">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-green-600 border-green-600/30 bg-green-50/50 hover:bg-green-50/70 backdrop-blur-md rounded-full px-8 group"
                  >
                    View All Updates{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50/70 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="inline-block px-4 py-2 bg-orange-100/70 backdrop-blur-sm text-orange-600 rounded-full font-medium mb-4">
                  Client Testimonials
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  What Our <span className="text-orange-500">Clients</span> Say
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Don't just take our word for it - hear from our satisfied customers.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Business Owner"
                quote="Switching to Lunyati Solar was one of the best business decisions we've made. The energy savings have been substantial, and their ongoing support is exceptional."
                delay={0.1}
              />
              <TestimonialCard
                name="Michael Chen"
                role="Homeowner"
                quote="Lunyati Solar made the transition to solar energy seamless. Their team was professional, efficient, and the results have exceeded our expectations."
                delay={0.2}
              />
              <TestimonialCard
                name="Emily Rodriguez"
                role="Property Developer"
                quote="From consultation to installation, Lunyati Solar provided exceptional service. They answered all our questions and designed a system perfect for our development needs."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-500/80 to-orange-600/80 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2574&auto=format&fit=crop"
              alt="Solar panels background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Ready to Harness the Power of the Sun?
                  </h2>
                  <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Contact us today for a free consultation and discover how Lunyati Solar can transform your energy
                    future.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg border border-white/30"
                      >
                        Schedule a Consultation
                      </Button>
                    </Link>
                    <Link href="tel:+260978806937">
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-8 py-6 text-lg font-medium"
                      >
                        <Phone className="mr-2 h-5 w-5" /> Call Us Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />

        <FloatingCta />

        <AnimatePresence>{videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}</AnimatePresence>
      </main>
    </>
  )
}

