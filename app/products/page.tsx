"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Battery, Shield, Sun, Lightbulb, Package, CheckCircle, MapPin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("inverters")

  const productCategories = [
    {
      id: "inverters",
      title: "Inverters & Batteries",
      icon: <Battery className="h-10 w-10 text-orange-500" />,
      image: "/placeholder.svg?height=600&width=800",
      description: "Power conversion and storage solutions for all energy needs",
      products: [
        {
          title: "Inverters",
          description: "Grid-tie, off-grid, and hybrid systems.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Batteries",
          description: "Next-gen lithium technology for efficiency and longevity.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "High-End Solutions",
          description: "Super capacitors for premium energy storage.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "mounting",
      title: "Mounting Systems & Protection Equipment",
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      image: "/placeholder.svg?height=600&width=800",
      description: "Secure installation and electrical safety components",
      products: [
        {
          title: "Mounting Systems",
          description: "Versatile solutions for all roof types and PV applications.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Protection Gear",
          description: "Comprehensive AC/DC surge protection, isolators, and circuit breakers.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "panels",
      title: "Solar Panels & Wind Turbines",
      icon: <Sun className="h-10 w-10 text-orange-500" />,
      image: "/placeholder.svg?height=600&width=800",
      description: "Renewable energy generation equipment for diverse applications",
      products: [
        {
          title: "Solar Panels",
          description: "Mono, Poly, PERC, and Dual PV Modules for diverse energy needs.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Wind Turbines",
          description: "Range from 700W to 1kW+ for residential and commercial use.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "design",
      title: "PV Design & Solar Kits",
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      image: "/placeholder.svg?height=600&width=800",
      description: "Custom and pre-configured solar energy solutions",
      products: [
        {
          title: "Tailored Solutions",
          description: "Custom PV system designs by accredited experts.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Solar Kits",
          description: "Pre-configured kits for easy installation and optimal performance.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  ]

  const projects = [
    {
      title: "Lwampa District Solar Park",
      location: "Western Province, Zambia",
      image: "/placeholder.svg?height=600&width=800",
      description: "A large-scale solar park development bringing renewable energy to the Western Province.",
      scope: [
        "Site Preparation: 100 Ha bush clearing.",
        "Infrastructure: 4km x 4km perimeter fencing for site security.",
        "Collaboration: Partnered with local contractors for community-driven execution.",
      ],
    },
    {
      title: "Virgin Land Development",
      location: "Lwampa District, Zambia",
      image: "/placeholder.svg?height=600&width=800",
      description: "Pre-development planning for a massive 1,000 Ha solar installation site.",
      scope: [
        "Land marking and formal handover by traditional authorities.",
        "Pre-development planning for large-scale solar park installation.",
        "Size: 1,000 Ha",
      ],
    },
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "Expertise",
      description: "Accredited PV design teams and cutting-edge technology.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "Quality",
      description: "Premium products (lithium batteries, PERC modules, hybrid inverters).",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "Sustainability",
      description: "End-to-end renewable energy solutions for residential, commercial, and industrial needs.",
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
            <span>Products</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Solutions</h1>
            <p className="text-xl text-white/90 mb-6">
              Comprehensive renewable energy products and solutions for residential, commercial, and industrial
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Package className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-medium">Product Categories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Product Range</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive selection of high-quality solar energy products and solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <div
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border ${activeTab === category.id ? "border-orange-500" : "border-gray-100"}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 p-1.5 bg-gray-100/70 backdrop-blur-sm rounded-xl">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base relative overflow-hidden transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-md data-[state=active]:font-medium data-[state=active]:scale-105 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 hover:bg-white/70 py-3"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="hidden md:inline-flex">{category.icon}</span>
                    <span>{category.title}</span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 data-[state=active]:scale-x-100"></span>
                </TabsTrigger>
              ))}
            </TabsList>

            <style jsx global>{`
              .tabs-content-transition {
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
              }
              
              [data-state="inactive"] .tabs-content-transition {
                opacity: 0;
                transform: translateY(10px);
              }
              
              [data-state="active"] .tabs-content-transition {
                opacity: 1;
                transform: translateY(0);
              }
            `}</style>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="tabs-content-transition">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    {category.icon}
                    <span>{category.title}</span>
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h4>
                          <p className="text-gray-600">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Sun className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-medium">Our Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Solar Installations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our major solar energy projects bringing sustainable power to communities across Zambia.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-orange-400" />
                        <span className="text-orange-300">{project.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{project.description}</p>

                    <h4 className="font-bold text-gray-900 mb-3">Project Scope:</h4>
                    <ul className="space-y-2 mb-6">
                      {project.scope.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Project Details</Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Solar panels background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Lunyati Solar Energy Corporation offers unmatched expertise, quality, and commitment to sustainability.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-white/90">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Harness Solar Energy?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your renewable energy needs and discover how our products and solutions can
                benefit you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="rounded-full px-8 group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

