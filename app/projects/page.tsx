"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Calendar, Clock, ArrowRight, AlertCircle, CheckCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProjectUpdatesPage() {
  const ongoingProjects = [
    {
      id: "luampa-solar-park",
      title: "Lwampa District Solar Park",
      location: "Western Province, Zambia",
      startDate: "May 10, 2023",
      estimatedCompletion: "December 2024",
      progress: 25,
      status: "In Progress",
      description:
        "A large-scale solar park development bringing renewable energy to the Western Province. Currently in the site preparation and infrastructure development phase.",
      image: "/placeholder.svg?height=600&width=800",
      updates: [
        {
          date: "June 15, 2023",
          title: "Contract Signing",
          description:
            "Successfully completed contract signing with 8 contractors for bush clearing and perimeter fencing.",
        },
        {
          date: "May 28, 2023",
          title: "Site Survey Completed",
          description: "Comprehensive site survey and environmental assessment completed.",
        },
        {
          date: "May 10, 2023",
          title: "Ground Breaking Ceremony",
          description: "Official ground breaking ceremony marking the commencement of our solar farm project.",
        },
      ],
    },
    {
      id: "virgin-land-development",
      title: "Virgin Land Development",
      location: "Lwampa District, Zambia",
      startDate: "April 22, 2023",
      estimatedCompletion: "March 2024",
      progress: 15,
      status: "In Progress",
      description:
        "Pre-development planning and preparation for a massive 1,000 Ha solar installation site. Currently in the initial planning and land preparation phase.",
      image: "/placeholder.svg?height=600&width=800",
      updates: [
        {
          date: "April 22, 2023",
          title: "Site Handover",
          description: "Formal handover of the 1,000 Ha land by traditional authorities for solar farm development.",
        },
        {
          date: "May 5, 2023",
          title: "Initial Assessment",
          description: "Completed initial land assessment and topographical survey.",
        },
      ],
    },
  ]

  const upcomingProjects = [
    {
      id: "community-solar-initiative",
      title: "Community Solar Initiative",
      location: "Multiple Locations, Zambia",
      plannedStart: "Q3 2023",
      description:
        "A series of smaller solar installations designed to bring renewable energy directly to underserved rural communities.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "commercial-solar-solutions",
      title: "Commercial Solar Solutions",
      location: "Lusaka, Zambia",
      plannedStart: "Q4 2023",
      description: "Solar energy solutions for commercial buildings and industrial facilities in the capital city.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

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
            <span>Project Updates</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Updates</h1>
            <p className="text-xl text-white/90 mb-6">
              Track the progress of our ongoing solar energy projects across Zambia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Status Banner */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 text-blue-800">
            <AlertCircle className="h-6 w-6 text-blue-600" />
            <p className="text-lg">
              We're currently working on some exciting projects that were recently launched. Check back regularly for
              progress updates as these developments continue.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                <span className="text-blue-600 font-medium">In Progress</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ongoing Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow the progress of our current solar energy initiatives as they develop.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {ongoingProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Started: {project.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">Est. Completion: {project.estimatedCompletion}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-blue-600 mb-4">{project.location}</p>
                      <p className="text-gray-700 mb-6">{project.description}</p>

                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Project Progress</span>
                          <span className="text-sm font-medium text-blue-600">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <Link href={`/projects/${project.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Detailed Progress</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 p-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Updates</h4>
                    <div className="space-y-4">
                      {project.updates.map((update, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="relative">
                            <div className="bg-blue-100 rounded-full p-2 z-10 relative">
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            {i < project.updates.length - 1 && (
                              <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-200"></div>
                            )}
                          </div>
                          <div className="pb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-gray-500">{update.date}</span>
                              <h5 className="font-medium text-gray-900">{update.title}</h5>
                            </div>
                            <p className="text-gray-700 text-sm">{update.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Coming Soon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Preview our planned initiatives that will soon contribute to Zambia's renewable energy landscape.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="bg-blue-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        Planned Start: {project.plannedStart}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 text-sm mb-4">{project.location}</p>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <Button variant="outline" className="w-full group">
                      Register Interest
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Projects?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us to learn more about our ongoing and upcoming solar energy initiatives, or to discuss
                potential collaboration opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/whats-new">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                    Latest News
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

