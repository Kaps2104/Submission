"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Lock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ContentManagementGuide } from "@/components/content-management-guide"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication for demo purposes
    // In a real application, use proper authentication
    if (password === "lunyatiadmin") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password. Please try again.")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Admin background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Admin</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admin Dashboard</h1>
            <p className="text-xl text-white/90 mb-6">Manage your website content and access helpful resources.</p>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Lock className="h-8 w-8 text-gray-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h2>

              {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</div>}

              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    Login
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure admin area</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to the Admin Dashboard</h2>
                <p className="text-gray-700 mb-8">
                  This dashboard provides resources to help you manage and update your Lunyati Solar website content.
                  Below you'll find a comprehensive guide on how to update various aspects of your site.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">Content Management</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Learn how to update text, images, and other content on your website.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => document.getElementById("content-guide")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      View Guide
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">Developer Contact</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Need technical assistance? Contact your website developer.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">Logout</h3>
                    <p className="text-gray-600 text-sm mb-4">Securely log out of the admin dashboard.</p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => setIsAuthenticated(false)}>
                      Logout
                    </Button>
                  </div>
                </div>
              </div>

              <div id="content-guide">
                <ContentManagementGuide />
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

