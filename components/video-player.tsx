"use client"
import { X } from "lucide-react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  videoId: string
  onClose: () => void
}

export function VideoPlayer({ videoId, onClose }: VideoPlayerProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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

        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </motion.div>
  )
}

