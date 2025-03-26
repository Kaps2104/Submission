"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Users, ChevronRight, Mail, Phone, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TeamPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null)

  const teamMembers = [
    {
      id: "likando-mataa",
      name: "Mr. Likando D. Mataa",
      role: "Executive Chairman & Co-Founder",
      qualification: "BSc. Business Administration",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Has nearly 20 years of experience in business development and strategic planning. Currently, in Lunyati, he provides business leadership and governance and sets the overall organization's strategic direction. He further leads on establishing strategic partnerships for the corporation, with both local and international agencies. He is the proprietor of BDL Enterprise LTD, a company specialized in mining and construction.",
      email: "likando@lunyatisolar.com",
      phone: "+260 978 123 456",
      linkedin: "https://linkedin.com/in/likando-mataa",
    },
    {
      id: "munanga-nosiku",
      name: "Mr. Munanga Nosiku",
      role: "Chief Executive Officer & Co-Founder",
      qualification: "BSc. Project Management",
      image: "/placeholder.svg?height=400&width=300",
      bio: "A seasoned entrepreneur and a business developer with over 18 years experience in business development and leadership. He established a multi-displinary Engineering Construction Companies: TOSH BUILDING CONTRACTORS LIMITED and DETOX ENGINEERING SERVICES. He brings a great wealth in project development and management. He values professionalism, integrity and has passion to influence others for social economic development.",
      email: "munanga@lunyatisolar.com",
      phone: "+260 978 234 567",
      linkedin: "https://linkedin.com/in/munanga-nosiku",
    },
    {
      id: "george-mulolo",
      name: "Eng. George Mulolo",
      role: "Director - Civil Engineering",
      qualification: "MSc. Civil Engineering",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Seasoned Civil Engineer with over 20 years experience in Civil and Structural Engineering. An accomplished entrepreneur with over 10 years experience. He is the Chairman of Fitch Consult Limited. He brings to Lunyati Solar a whole hands-on wealth of expertise and corporate acumen.",
      email: "george@lunyatisolar.com",
      phone: "+260 978 345 678",
      linkedin: "https://linkedin.com/in/george-mulolo",
    },
    {
      id: "goodwin-mankomba",
      name: "Goodwin Mankomba",
      role: "Director - Finance",
      qualification: "CPA, MBA Finance",
      image: "/placeholder.svg?height=400&width=300",
      bio: "An entrepreneur with over 10 years' experience; An Accountant by profession certified by the Charted Institute of Business Management and Qualified in Management Practice with over 20 years' experience in Financial Management and Accounting in various industries (South Africa). Exceptional in start-up business development. He has 10 years' experience as a Forensics accountant and Financial Forensic investigations. He is a qualified and Certified Forensic Accountant with the institute of forensic accountants (IFA) and a member of the Association of Certified Fraud Examiners (ACFE). He is the founder member of the Zambia Institute of Forensic Accountants and Investigative Auditors (ZIFAIA).",
      email: "goodwin@lunyatisolar.com",
      phone: "+260 978 456 789",
      linkedin: "https://linkedin.com/in/goodwin-mankomba",
    },
    {
      id: "charles-mwanza",
      name: "Eng. Charles Mwanza",
      role: "Director - Mechanical Engineering",
      qualification: "BSc. Mechanical Engineering",
      image: "/placeholder.svg?height=400&width=300",
      bio: "A mechanical Engineer with vast experience in Energy Sector from Renewable to Thermal Power as well as in mining. He has exceptional analytical and technical skills in project management of engineering projects. Thus, he brings 20 years experience in project management from both the business and technical. He is Chairman and CEO of Chatazy Group; Chatazzy Engineering Limited, Chatazzy Security Services and Chatazzy Energies.",
      email: "charles@lunyatisolar.com",
      phone: "+260 978 567 890",
      linkedin: "https://linkedin.com/in/charles-mwanza",
    },
    {
      id: "edward-sambisi",
      name: "Eng. Edward Mutumba Sambisi",
      role: "Chief Power Officer - Electrical",
      qualification: "MBA, M.Eng., B.Eng.",
      image: "/placeholder.svg?height=400&width=300",
      bio: "He has 15 years of experience in distribution lines construction under the Zambia Electricity Supply Corporation Limited (ZESCO). This includes and is not limited to 400v, 11,000V, 33,000 and 66,000V wooden pole construction of overhead and underground networks including substation construction. He also has 3 years of experience in Distribution System Operations and Maintenance in ZESCO. This involved ensuring continuity of supply of electricity to customers using various interventions. Distribution System Operations and Maintenance. Ensuring reliability of supply to consumers. Effective maintenance of the distribution system. Resolution of faults on the distribution network which is at 33kv down to 4kv.",
      email: "edward@lunyatisolar.com",
      phone: "+260 978 678 901",
      linkedin: "https://linkedin.com/in/edward-sambisi",
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
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Our Team</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl text-white/90 mb-6">
              Meet the experienced professionals leading Lunyati Solar Energy Corporation Limited towards a sustainable
              future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-medium">Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experienced Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team brings decades of combined experience in renewable energy, engineering, finance, and business
                development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <div
                  id={member.id}
                  className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setActiveTeamMember(member.id === activeTeamMember ? null : member.id)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 font-medium">{member.role}</p>
                      {member.qualification && <p className="text-orange-300 text-sm mt-1">{member.qualification}</p>}
                    </div>
                  </div>

                  <div
                    className={`p-6 bg-white transition-all duration-500 overflow-hidden ${
                      activeTeamMember === member.id ? "max-h-[800px]" : "max-h-0 p-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>

                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail className="h-4 w-4 text-orange-500" />
                        <a href={`mailto:${member.email}`} className="hover:text-orange-500 transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-orange-500" />
                        <a href={`tel:${member.phone}`} className="hover:text-orange-500 transition-colors">
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Linkedin className="h-4 w-4 text-orange-500" />
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-500 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-between mt-12">
            <Link href="/about">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to About
              </Button>
            </Link>
            <Link href="/about/chairman-message">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
                Chairman's Message <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

