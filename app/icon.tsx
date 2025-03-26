import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Sun rays background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "conic-gradient(from 0deg, transparent 0deg 15deg, #f97316 15deg 30deg, transparent 30deg 45deg, #f97316 45deg 60deg, transparent 60deg 75deg, #f97316 75deg 90deg, transparent 90deg 105deg, #f97316 105deg 120deg, transparent 120deg 135deg, #f97316 135deg 150deg, transparent 150deg 165deg, #f97316 165deg 180deg, transparent 180deg 195deg, #f97316 195deg 210deg, transparent 210deg 225deg, #f97316 225deg 240deg, transparent 240deg 255deg, #f97316 255deg 270deg, transparent 270deg 285deg, #f97316 285deg 300deg, transparent 300deg 315deg, #f97316 315deg 330deg, transparent 330deg 345deg, #f97316 345deg 360deg)",
        }}
      />

      {/* White circle */}
      <div
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Green lightning bolt */}
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 3H4L1 12h9l-3 9 13-13h-9l3-5z" />
        </svg>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

