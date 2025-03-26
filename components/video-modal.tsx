"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface VideoModalProps {
  onClose: () => void
}

export function VideoModal({ onClose }: VideoModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden max-w-4xl w-full aspect-video border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full z-10 hover:bg-black/60 transition-colors border border-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="w-full h-full flex items-center justify-center bg-gray-900/70 backdrop-blur-sm">
          <p className="text-white/70">Video player would be embedded here</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

