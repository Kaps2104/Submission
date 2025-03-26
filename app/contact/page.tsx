"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "installation",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      phone: "",
      interest: "installation",
      message: "",
    })
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Have questions about solar energy? Get in touch with our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form below and one of our solar experts will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ukhozijoels"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>I'm interested in:</Label>
                    <RadioGroup
                      value={formState.interest}
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="installation" id="installation" />
                        <Label htmlFor="installation">Solar Installation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintenance" id="maintenance" />
                        <Label htmlFor="maintenance">Maintenance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consultation" id="consultation" />
                        <Label htmlFor="consultation">Consultation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or questions..."
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-700">Plot No. 14013, Kamloops Road</p>
                    <p className="text-gray-700">Lusaka, Zambia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-700">+260 978 806 937</p>
                    <p className="text-gray-700">+260 971 586 363</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-700">info@lunyatisolar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-10 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

