"use client"
import { Zap } from "lucide-react"
import { useState, type CSSProperties } from "react"

/**
 * Props for the Logo component
 * @property {string} size - Size of the logo: "sm", "md", or "lg"
 * @property {string} variant - Style of the logo: "full" or "icon"
 * @property {boolean} animated - Whether the logo should be animated by default
 */
interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon"
  animated?: boolean
}

/**
 * Logo component for Lunyati Solar Energy Corporation
 *
 * @component
 * @example
 * // Basic usage with default props
 * <Logo />
 *
 * @example
 * // Icon only, large size, animated
 * <Logo size="lg" variant="icon" animated={true} />
 */
export function Logo({ size = "md", variant = "full", animated = false }: LogoProps) {
  // Hover state for animation toggle
  const [isHovered, setIsHovered] = useState(false)

  // Size configurations for different logo sizes
  const sizes = {
    sm: {
      container: "w-8 h-8",
      rays: "w-5 h-5",
      circle: "w-6 h-6 border-[2px]",
      inner: "w-3.5 h-3.5",
      icon: "h-2 w-2",
      text: "text-lg ml-1.5",
    },
    md: {
      container: "w-12 h-12",
      rays: "w-7 h-7",
      circle: "w-8 h-8 border-[3px]",
      inner: "w-5 h-5",
      icon: "h-3 w-3",
      text: "text-xl ml-2",
    },
    lg: {
      container: "w-16 h-16",
      rays: "w-10 h-10",
      circle: "w-12 h-12 border-[4px]",
      inner: "w-7 h-7",
      icon: "h-4 w-4",
      text: "text-2xl ml-3",
    },
  }

  // Get the appropriate size configuration
  const s = sizes[size]

  // Determine if animation should be active (based on props or hover state)
  const isAnimated = animated || isHovered

  // Animation styles based on animation state
  const raysStyle: CSSProperties = {
    animation: isAnimated ? "sun-rays 3s ease-in-out infinite" : "none",
  }

  const circleStyle: CSSProperties = {
    animation: isAnimated ? "circle-keys 3s ease-in-out infinite" : "none",
  }

  const innerStyle: CSSProperties = {
    animation: isAnimated ? "dot-keys 3s ease-in-out infinite" : "none",
  }

  return (
    <div className="flex items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`relative ${s.container} flex items-center justify-center`}>
        {/* Sun Rays - Smaller to fit within the circle */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${s.rays} bg-sun-rays`}
          style={raysStyle}
        ></div>

        {/* Outer Circle */}
        <div
          className={`${s.circle} border-white rounded-full flex items-center justify-center z-10 bg-transparent`}
          style={circleStyle}
        >
          {/* Inner Circle with Lightning Bolt */}
          <div className={`${s.inner} rounded-full bg-white flex items-center justify-center`} style={innerStyle}>
            <Zap className={`${s.icon} text-green-500`} />
          </div>
        </div>
      </div>

      {/* Company Name (only displayed in "full" variant) */}
      {variant === "full" && <span className={`font-bold text-white ${s.text}`}>Lunyati Solar</span>}

      {/* Animations and gradient styles */}
      <style jsx>{`
        .bg-sun-rays {
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
        }
        
        @keyframes sun-rays {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(0.9);
            opacity: 0.7;
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
            transform: scale(0.9);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}

