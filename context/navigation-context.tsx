"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Zap } from "lucide-react"

interface NavigationContextType {
  navigateTo: (url: string) => void
  isNavigating: boolean
}

const NavigationContext = createContext<NavigationContextType>({
  navigateTo: () => {},
  isNavigating: false,
})

export function useNavigation() {
  return useContext(NavigationContext)
}

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const [targetPath, setTargetPath] = useState<string | null>(null)

  const navigateTo = useCallback(
    (url: string) => {
      if (url !== pathname) {
        setTargetPath(url)
        setIsNavigating(true)

        setTimeout(() => {
          router.push(url)

          setTimeout(() => {
            setIsNavigating(false)
            setTargetPath(null)
          }, 300)
        }, 300)
      }
    },
    [pathname, router],
  )

  return (
    <NavigationContext.Provider value={{ navigateTo, isNavigating }}>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 bg-orange-500/90 backdrop-blur-md z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="loader">
              <div className="loader-sun-rays"></div>
              <div className="loader-circle">
                <div className="loader-circle-inner">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div className="loader-circle-outline"></div>
              </div>
            </div>

            <style jsx>{`
              // Update the navigation loader to ensure perfect centering
              .loader {
                display: flex;
                justify-content: center;
                align-items: center;
                --color: white;
                --animation: 2s ease-in-out infinite;
                position: relative;
                width: 120px;
                height: 120px;
                margin: 0 auto;
              }

              .loader-sun-rays {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 70px; // Reduced from 100px
                height: 70px; // Reduced from 100px
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
                width: 80px;
                height: 80px;
                border: solid 3px var(--color);
                border-radius: 50%;
                background-color: transparent;
                animation: circle-keys var(--animation);
              }

              .loader-circle-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: white;
                animation: dot-keys var(--animation);
              }

              .loader-circle-outline {
                position: absolute;
                transform: translate(-50%, -50%);
                width: 80px;
                height: 80px;
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
        )}
      </AnimatePresence>
      {children}
    </NavigationContext.Provider>
  )
}

