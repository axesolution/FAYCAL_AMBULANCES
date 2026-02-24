import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  const width = 1200
  const height = 630

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0F36AA",
          color: "#FFFFFF",
          padding: "64px",
          fontFamily: "Inter, system-ui, Segoe UI",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Ambulance Fayçal
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 28,
              opacity: 0.95,
            }}
          >
            Transport médical & funéraire à Alger · 24/7
          </div>
        </div>

        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 24,
            background: "rgba(255,255,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 140,
              height: 90,
              borderRadius: 16,
              background: "#FFFFFF",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 16,
                top: 28,
                width: 40,
                height: 40,
                background: "#0F36AA",
                borderRadius: 8,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 16,
                top: 28,
                width: 56,
                height: 36,
                borderRadius: 8,
                background: "#0F36AA",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 12,
                top: 12,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#0F36AA",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  )
}
