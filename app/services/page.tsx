"use client"

import { motion } from "framer-motion"
import { Sun, Wrench, Phone, BarChart, Battery, Building, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      id: "installation",
      title: "Solar Panel Installation",
      description:
        "Our expert team handles the entire installation process, from initial assessment to final setup. We ensure your solar panels are optimally positioned for maximum energy production.",
      icon: <Sun className="h-10 w-10" />,
      features: [
        "Comprehensive site assessment",
        "Custom system design",
        "Professional installation",
        "Quality equipment and materials",
        "Permits and paperwork handling",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "maintenance",
      title: "Solar Maintenance",
      description:
        "Keep your solar system running at peak efficiency with our maintenance services. Regular maintenance extends the life of your system and ensures maximum energy production.",
      icon: <Wrench className="h-10 w-10" />,
      features: [
        "Regular panel cleaning",
        "System performance checks",
        "Inverter maintenance",
        "Wiring and connection inspection",
        "Efficiency optimization",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "consultation",
      title: "Energy Consultation",
      description:
        "Our energy experts provide personalized consultation to help you understand your energy needs and how solar can benefit your specific situation.",
      icon: <Phone className="h-10 w-10" />,
      features: [
        "Energy usage analysis",
        "ROI and savings calculation",
        "Financing options guidance",
        "Tax incentives information",
        "Custom solution recommendations",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "monitoring",
      title: "System Monitoring",
      description:
        "Track your solar system's performance with our advanced monitoring solutions. Get real-time data and insights to ensure your system is always performing optimally.",
      icon: <BarChart className="h-10 w-10" />,
      features: [
        "Real-time performance tracking",
        "Mobile app monitoring",
        "Production analytics",
        "Automated alerts",
        "Monthly performance reports",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "battery",
      title: "Battery Storage",
      description:
        "Maximize your energy independence with our battery storage solutions. Store excess energy for use during peak hours or power outages.",
      icon: <Battery className="h-10 w-10" />,
      features: [
        "High-capacity battery options",
        "Backup power capability",
        "Smart energy management",
        "Seamless integration with solar",
        "Expandable capacity",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "commercial",
      title: "Commercial Solutions",
      description:
        "Tailored solar solutions for businesses of all sizes. Reduce operating costs and demonstrate your commitment to sustainability.",
      icon: <Building className="h-10 w-10" />,
      features: [
        "Custom commercial system design",
        "Large-scale installation capability",
        "Business-specific ROI analysis",
        "Commercial tax incentive guidance",
        "Minimal business disruption",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solar Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive solar solutions tailored to your specific needs. From installation to maintenance, we've got
              you covered.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-yellow-100 p-3 rounded-full">{service.icon}</div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mt-1 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Learn More</Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Start Your Solar Journey?
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact us today for a free consultation and quote. Our team of experts is ready to help you harness the
              power of solar energy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Get a Free Quote
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

