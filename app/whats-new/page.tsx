"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Calendar,
  Play,
  X,
  ChevronLeft,
  ChevronRightIcon,
  ArrowRight,
  Clock,
  AlertCircle,
  CheckCircle,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function WhatsNewPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Latest news updates
  const latestUpdates = [
    {
      id: "meeting-contractors",
      title: "Meeting Projects Contractors and contracts signing off at Lunyati Office, Lusaka",
      date: "June 15, 2023",
      type: "video",
      thumbnail: "/placeholder.svg?height=600&width=800",
      description: "Official contract signing ceremony with project contractors at our headquarters in Lusaka.",
    },
    {
      id: "luampa-gallery",
      title: "Luampa Site Photo Gallery",
      date: "May 28, 2023",
      type: "gallery",
      description: "Explore the progress at our Luampa District solar farm site through our latest photo collection.",
      images: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
    },
    {
      id: "ground-breaking",
      title: "Ground Breaking in Luampa District",
      date: "May 10, 2023",
      type: "video",
      thumbnail: "/placeholder.svg?height=600&width=800",
      description:
        "Official ground breaking ceremony marking the commencement of our solar farm project in Luampa District.",
    },
    {
      id: "site-handover",
      title: "Luampa District site hand over to 8 contractors",
      date: "April 22, 2023",
      type: "video",
      thumbnail: "/placeholder.svg?height=600&width=800",
      description:
        "Luampa District site hand over to 8 contractors doing bush clearing and perimeter fencing for a solar farm. The solar farm will be constructed on a 200 hectares of land with a generation capacity of 100MW of power.",
    },
  ]

  // Ongoing projects
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

  // Upcoming projects
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

  // Function to render YouTube video placeholder
  const renderVideoPlaceholder = (update: any) => (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 group cursor-pointer">
      <Image
        src={update.thumbnail || "/placeholder.svg"}
        alt={update.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
    </div>
  )

  // Function to render gallery preview
  const renderGalleryPreview = (update: any) => (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {update.images.slice(0, 3).map((image: string, index: number) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {update.images.length > 3 && (
        <Button variant="outline" className="w-full" onClick={() => setSelectedImage(0)}>
          View All {update.images.length} Photos
        </Button>
      )}
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-600/90 to-green-700/90 text-white relative overflow-hidden">
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
            <span>News & Updates</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-white/90 mb-6">
              Stay updated with our latest news, developments, and project progress at Lunyati Solar.
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

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">Latest News</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Latest Updates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most recent developments and milestones as we expand our solar energy initiatives.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {latestUpdates.map((update, index) => (
              <ScrollReveal key={update.id} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{update.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{update.title}</h3>
                    <p className="text-gray-700 mb-8">{update.description}</p>

                    {update.type === "video" && renderVideoPlaceholder(update)}
                    {update.type === "gallery" && renderGalleryPreview(update)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Updated with Our Newsletter</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates on our projects, products, and company news
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-screen Gallery Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                className="bg-black/40 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  const galleryUpdate = latestUpdates.find((u) => u.type === "gallery")
                  if (galleryUpdate && selectedImage !== null) {
                    const newIndex = selectedImage === 0 ? galleryUpdate.images.length - 1 : selectedImage - 1
                    setSelectedImage(newIndex)
                  }
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                className="bg-black/40 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  const galleryUpdate = latestUpdates.find((u) => u.type === "gallery")
                  if (galleryUpdate && selectedImage !== null) {
                    const newIndex = (selectedImage + 1) % galleryUpdate.images.length
                    setSelectedImage(newIndex)
                  }
                }}
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                {latestUpdates.find((u) => u.type === "gallery")?.images && (
                  <Image
                    src={latestUpdates.find((u) => u.type === "gallery")?.images[selectedImage] || ""}
                    alt={`Gallery image ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage + 1} / {latestUpdates.find((u) => u.type === "gallery")?.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

