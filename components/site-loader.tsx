"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"

interface SiteLoaderProps {
  onLoadingComplete: () => void
}

export function SiteLoader({ onLoadingComplete }: SiteLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onLoadingComplete()
          }, 500)
          return 100
        }
        return prev + 4
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center flex flex-col items-center justify-center">
        {/* Enhanced Circular Loader with Logo Elements */}
        <div className="loader relative mb-8">
          <div className="loader-sun-rays"></div>
          <div className="loader-circle">
            <div className="loader-circle-inner">
              <Zap className="h-8 w-8 text-green-400" />
            </div>
            <div className="loader-circle-outline"></div>
          </div>
        </div>

        {/* Text */}
        <motion.div className="mb-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Lunyati Solar
          </motion.h1>

          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Powering Tomorrow With Solar Energy Today
          </motion.p>
        </motion.div>

        {/* Progress Bar - Properly centered */}
        <div className="flex flex-col items-center w-full">
          <div className="w-72 md:w-96 h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          <motion.p
            className="mt-6 text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="font-medium">{progress}%</span> - Harnessing the power of the sun...
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          --color: hsl(0, 0%, 100%);
          --animation: 2s ease-in-out infinite;
          width: 160px;
          height: 160px;
        }

        .loader-sun-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px; // Reduced from 140px
          height: 90px; // Reduced from 140px
          background: conic-gradient(
            from 0deg,
            transparent 0deg 15deg,
            #f97316 15deg 30deg,
            transparent 30deg 45deg,
            #f97316 45deg 60deg,
            transparent 60deg 75deg,
            #f97316 75deg 90deg,
            transparent 90deg 105deg,
            #f97316 105deg 120deg,
            transparent 120deg 135deg,
            #f97316 135deg 150deg,
            transparent 150deg 165deg,
            #f97316 165deg 180deg,
            transparent 180deg 195deg,
            #f97316 195deg 210deg,
            transparent 210deg 225deg,
            #f97316 225deg 240deg,
            transparent 240deg 255deg,
            #f97316 255deg 270deg,
            transparent 270deg 285deg,
            #f97316 285deg 300deg,
            transparent 300deg 315deg,
            #f97316 315deg 330deg,
            transparent 330deg 345deg,
            #f97316 345deg 360deg
          );
          animation: sun-rays var(--animation);
          opacity: 0.8;
        }

        .loader-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100px;
          height: 100px;
          border: solid 4px var(--color);
          border-radius: 50%;
          background-color: transparent;
          animation: circle-keys var(--animation);
          z-index: 1;
        }

        .loader-circle-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: white;
          animation: dot-keys var(--animation);
        }

        .loader-circle-outline {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border: solid 2px var(--color);
          border-radius: 50%;
          opacity: 0;
          animation: outline-keys var(--animation);
        }

        @keyframes sun-rays {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(0.8);
            opacity: 0.5;
          }
        }

        @keyframes circle-keys {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dot-keys {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0.8);
          }
        }

        @keyframes outline-keys {
          0% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(0.8);
          }
          25% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
      `}</style>
    </motion.div>
  )
}

