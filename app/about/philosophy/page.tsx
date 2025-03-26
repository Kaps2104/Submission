"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  BarChart,
  Zap,
  Home,
  DollarSign,
  Factory,
  Tractor,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PhilosophyPage() {
  const energyConsumption = [
    { sector: "Mining", percentage: 51.08, icon: <Zap className="h-5 w-5 text-yellow-500" /> },
    { sector: "Domestic", percentage: 33.16, icon: <Home className="h-5 w-5 text-yellow-500" /> },
    { sector: "Finance & Property", percentage: 5.46, icon: <DollarSign className="h-5 w-5 text-yellow-500" /> },
    { sector: "Manufacturing", percentage: 3.38, icon: <Factory className="h-5 w-5 text-yellow-500" /> },
    { sector: "Agriculture", percentage: 2.27, icon: <Tractor className="h-5 w-5 text-yellow-500" /> },
    { sector: "Other Sectors", percentage: 4.65, icon: <BarChart className="h-5 w-5 text-yellow-500" /> },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white relative overflow-hidden">
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
            <span>Corporate Philosophy</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Philosophy</h1>
            <p className="text-xl text-white/90 mb-6">
              Understanding Zambia's energy landscape and our role in its transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-gray-700" />
                <span className="text-gray-700 font-medium">Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Energy Landscape in Zambia</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the current energy consumption patterns and challenges in Zambia
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <ScrollReveal>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Energy Consumption by Sector</h3>
                <div className="space-y-4">
                  {energyConsumption.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
                          <span className="font-medium text-gray-800">{item.sector}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-900">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">Source: ERB Energy Statistics, 2018</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Deficit Challenge</h3>
                <div className="prose prose-lg">
                  <p>
                    There is evidence of a major power supply deficit in the Southern African Development Community
                    (SADC) and Zambia is no exception. The ramifications of the country's failure to diversify its
                    electricity generation mix became marked in 2015/2016, 2018/2019 and 2019/2020 when the energy
                    deficit resulted in unprecedented levels of electricity supply rationing to all consumers.
                  </p>
                  <p>
                    The country's power crisis has been largely as a result of inadequate and delayed investments in
                    generation and transmission infrastructure and the failure to diversify energy generation sources
                    over the last 30 years. This was further compounded by inadequate incentives to attract investment
                    in the sector.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="bg-gray-900 text-white p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-4">Climate Change Impact</h3>
              <p className="text-lg leading-relaxed mb-6">
                The deficit was exacerbated by the effects of climate change, in particular low rainfall, given that
                Zambia has been highly dependent on hydro-power. Thus, while Zambia's installed capacity has
                continuously trailed behind the demand, actual generation, which is limited by water reserves, has
                fallen short of demand since 2016.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Energy Demand vs. Supply</h4>
                    <p className="text-white/80">The gap continues to widen</p>
                  </div>
                </div>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="bg-yellow-500 h-2 w-2 rounded-full"></span>
                    <span>Demand for electricity stood at 6,949 MW</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-yellow-500 h-2 w-2 rounded-full"></span>
                    <span>The sector was only able to generate 3,281 MW</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-yellow-500 h-2 w-2 rounded-full"></span>
                    <span>Peak demand is likely to be 6,908.75 MW by 2023</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-yellow-500 h-2 w-2 rounded-full"></span>
                    <span>Expected to increase to over 13,525 MW in 2030</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-yellow-50 p-8 rounded-xl mb-12 border border-yellow-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lunyati's Role</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To increase supply, there is need to promote investment in generation facilities such as hydro, nuclear,
                geothermal, wind and solar energy generation plants. It is anticipated Lunyati will supply power to the
                local market, and would seek to enter into power purchase agreement with ZESCO, CEC, and also directly
                sale to the local community and others such as export to neighbouring countries. The local community's
                primary economic activity is agriculture, with fuel wood as the main source of energy.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-between mt-12">
            <Link href="/about/values">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Our Values
              </Button>
            </Link>
            <Link href="/about/business-model">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
                Business Model <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

