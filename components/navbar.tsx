"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Make sure these lines are at the top of the imports
import { useNavigation } from "@/context/navigation-context"

// Replace the logo placeholder with our custom Logo component
import { Logo } from "@/components/logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add this inside the Navbar component, near the top
  const { navigateTo } = useNavigation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "py-3" : "py-6")}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500 backdrop-blur-md px-6 py-3",
              isScrolled ? "bg-white/20" : "bg-black/20",
            )}
          >
            {/* Replace the logo in the navbar */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <Logo size="sm" variant="full" animated={false} />
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {[
                { name: "Home", href: "/" },
                {
                  name: "About Us",
                  href: "/about",
                  hasDropdown: true,
                  dropdownItems: [
                    {
                      name: "Our Team",
                      href: "/about/team",
                      hasSubDropdown: true,
                      subDropdownItems: [
                        { name: "Mr. Likando D. Mataa", href: "/about/team#likando-mataa" },
                        { name: "Mr. Munanga Nosiku", href: "/about/team#munanga-nosiku" },
                        { name: "Eng. George Mulolo", href: "/about/team#george-mulolo" },
                        { name: "Goodwin Mankomba", href: "/about/team#goodwin-mankomba" },
                        { name: "Eng. Charles Mwanza", href: "/about/team#charles-mwanza" },
                        { name: "Eng. Edward Mutumba Sambisi", href: "/about/team#edward-sambisi" },
                      ],
                    },
                    { name: "Our Story", href: "/our-story" },
                    { name: "The Chairman's Message", href: "/about/chairman-message" },
                    { name: "Our Vision", href: "/about/vision" },
                    { name: "Mission", href: "/about/mission" },
                    { name: "Goals & Objectives", href: "/about/goals" },
                    { name: "Our Values", href: "/about/values" },
                    { name: "Corporate Philosophy", href: "/about/philosophy" },
                    { name: "Business Model", href: "/about/business-model" },
                    { name: "SWOT Analysis", href: "/about/swot" },
                    { name: "Our Process", href: "/about/process" },
                  ],
                },
                { name: "Products", href: "/products" },
                {
                  name: "News & Updates",
                  href: "/whats-new",
                  hasDropdown: true,
                  dropdownItems: [
                    { name: "Latest News", href: "/whats-new" },
                    { name: "Project Updates", href: "/projects" },
                  ],
                },
                {
                  name: "Downloads",
                  href: "/downloads",
                  hasDropdown: true,
                  dropdownItems: [
                    { name: "Brochures", href: "/downloads#brochures" },
                    { name: "Technical Specs", href: "/downloads#specs" },
                    { name: "User Manuals", href: "/downloads#manuals" },
                  ],
                },
              ].map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-orange-500 flex items-center group",
                      "text-white", // Always white, no conditionals
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(item.href)
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-1 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2 px-2 rounded-xl backdrop-blur-md bg-white/90 shadow-xl border border-white/20">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <div key={dropdownItem.name} className="relative group/sub">
                            <Link
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-800 hover:bg-white/30 hover:text-orange-500 rounded-lg transition-colors flex items-center justify-between"
                              onClick={(e) => {
                                e.preventDefault()
                                navigateTo(dropdownItem.href)
                              }}
                            >
                              {dropdownItem.name}
                              {dropdownItem.hasSubDropdown && (
                                <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover/sub:rotate-[-90deg]" />
                              )}
                            </Link>

                            {dropdownItem.hasSubDropdown && (
                              <div className="absolute left-full top-0 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                                <div className="py-2 px-2 rounded-xl backdrop-blur-md bg-white/90 shadow-xl border border-white/20 ml-2">
                                  {dropdownItem.subDropdownItems?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-3 py-2 text-sm text-gray-800 hover:bg-white/30 hover:text-orange-500 rounded-lg transition-colors"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        navigateTo(subItem.href)
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contact">
                <Button
                  className={cn(
                    "rounded-full transition-all duration-300 backdrop-blur-md",
                    isScrolled
                      ? "bg-orange-500/70 hover:bg-orange-600/70 text-white"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("/contact")
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <button className="lg:hidden z-50" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-orange-500/90 backdrop-blur-md z-40 pt-24 px-4 overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 items-center pt-10">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "News & Updates", href: "/whats-new" },
                { name: "Contact Us", href: "/contact" },
                { name: "Downloads", href: "/downloads" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-white text-xl font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      navigateTo(item.href)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

