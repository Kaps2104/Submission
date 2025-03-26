"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigation } from "@/context/navigation-context"

// Import the Logo component
import { Logo } from "@/components/logo"

export default function Footer() {
  const { navigateTo } = useNavigation()
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            {/* Replace the logo in the footer */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo size="md" variant="full" animated={false} />
            </Link>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Lunyati Solar Energy Corporation Limited - Providing innovative solar energy solutions for a sustainable
              future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl h-full border border-gray-700/30">
              <h3 className="text-xl font-bold mb-6 text-white relative">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-orange-500"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Products", href: "/products" },
                  { name: "News & Updates", href: "/whats-new" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Downloads", href: "/downloads" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center group py-1"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo(item.href)
                      }}
                    >
                      <div className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl h-full border border-gray-700/30">
              <h3 className="text-xl font-bold mb-6 text-white relative">
                <span className="relative z-10">Products</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-orange-500"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Solar Panels", href: "/products#panels" },
                  { name: "Inverters", href: "/products#inverters" },
                  { name: "Energy Storage", href: "/products#storage" },
                  { name: "Monitoring Systems", href: "/products#monitoring" },
                  { name: "Solar Accessories", href: "/products#accessories" },
                  { name: "Commercial Solutions", href: "/products#commercial" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center group py-1"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo(item.href)
                      }}
                    >
                      <div className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
              <h3 className="text-xl font-bold mb-6 text-white relative">
                <span className="relative z-10">Newsletter</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-orange-500"></span>
              </h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter to receive the latest updates and news about our products and services.
              </p>
              <div className="flex gap-2 mb-8">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800/70 backdrop-blur-sm border-gray-700 text-white rounded-l-full rounded-r-none border-r-0 focus-visible:ring-orange-500"
                />
                <Button className="bg-orange-500/70 hover:bg-orange-600/70 backdrop-blur-sm text-white rounded-r-full rounded-l-none border border-orange-400/30">
                  Subscribe
                </Button>
              </div>

              <h3 className="text-xl font-bold mb-6 text-white relative mt-8">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-8 bg-orange-500"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <span className="text-gray-400 group-hover:text-gray-300">
                    Plot No. 14013, Kamloops Road, Lusaka, Zambia
                  </span>
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-orange-500 shrink-0 group-hover:animate-pulse" />
                  <a href="tel:+260978806937" className="text-gray-400 group-hover:text-orange-500 transition-colors">
                    +260 978 806 937
                  </a>
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-orange-500 shrink-0 group-hover:animate-pulse" />
                  <a href="tel:+260971586363" className="text-gray-400 group-hover:text-orange-500 transition-colors">
                    +260 971 586 363
                  </a>
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-orange-500 shrink-0 group-hover:animate-pulse" />
                  <a
                    href="mailto:info@lunyatisolar.com"
                    className="text-gray-400 group-hover:text-orange-500 transition-colors"
                  >
                    info@lunyatisolar.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lunyati Solar Energy Corporation Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-orange-500 text-sm relative group"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("/privacy-policy")
              }}
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-orange-500 text-sm relative group"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("/terms-of-service")
              }}
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-orange-500 text-sm relative group"
              onClick={(e) => {
                e.preventDefault()
                navigateTo("/sitemap")
              }}
            >
              Sitemap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

