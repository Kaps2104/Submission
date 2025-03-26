"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-16 right-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-4 w-64 mb-4 border border-white/20"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">Contact Us</h3>
                  <p className="text-gray-600 text-sm">We're here to help with your solar needs</p>
                </div>
                <div className="space-y-3">
                  <Link
                    href="tel:+260978806937"
                    className="flex items-center gap-3 bg-gray-100/70 hover:bg-gray-200/70 backdrop-blur-sm transition-colors p-3 rounded-xl text-gray-800"
                  >
                    <Phone className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-gray-600">+260 978 806 937</div>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 bg-gray-100/70 hover:bg-gray-200/70 backdrop-blur-sm transition-colors p-3 rounded-xl text-gray-800"
                  >
                    <MessageCircle className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">Send a Message</div>
                      <div className="text-sm text-gray-600">We'll respond ASAP</div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-orange-500/70 hover:bg-orange-600/70 backdrop-blur-md text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl border border-orange-400/30"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

