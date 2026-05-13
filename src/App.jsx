import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import heroImage from "./assets/images/hero.jpg"
import leavesImage from "./assets/images/leaves.png"
import coupleImage from "./assets/images/couple.jpeg"

export default function App() {
  const targetDate = new Date("2026-05-24T11:00:00")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f4",
        color: "#1c1917",
        fontFamily: "serif",
      }}
    >
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(24px, 5vw, 40px)",
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.40),
              rgba(0, 0, 0, 0.28)
            ),
            url(${heroImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Botanical Overlay */}
        <img
          src={leavesImage}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.12,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        />

        {/* Hero Content */}
        <p
          style={{
            letterSpacing: "0.3em",
            color: "#f3d9a4",
            marginBottom: "24px",
            fontSize: "14px",
            zIndex: 2,
            position: "relative",
          }}
        >
          FAMILY GATHERING
        </p>

        <h1
          style={{
            fontSize: "clamp(28px, 7vw, 56px)",
            marginBottom: "24px",
            fontWeight: "normal",
            color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.25)",
            zIndex: 2,
            position: "relative",
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
          }}
        >
          〜両家顔合わせのご案内〜
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 4vw, 18px)",
            lineHeight: 1.8,
            maxWidth: "600px",
            color: "rgba(255,255,255,0.88)",
            zIndex: 2,
            position: "relative",
          }}
        >
          ご縁を結ぶ、穏やかなひととき
        </p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{
            marginTop: "52px",
            zIndex: 2,
            position: "relative",
            color: "white",
            width: "min(520px, 90vw)",
          }}
        >
          {/* Top Line */}
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.28)",
              marginBottom: "28px",
            }}
          />
        
          {/* Main Count */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "clamp(72px, 18vw, 140px)",
                lineHeight: 0.9,
                fontWeight: "200",
                letterSpacing: "-0.04em",
              }}
            >
              {String(timeLeft.days).padStart(2, "0")}
            </span>
        
            <span
              style={{
                fontSize: "clamp(16px, 3vw, 22px)",
                opacity: 0.82,
                marginBottom: "12px",
                letterSpacing: "0.12em",
              }}
            >
              DAYS
            </span>
          </div>
        
          {/* Bottom */}
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              fontSize: "14px",
              letterSpacing: "0.08em",
              opacity: 0.82,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "4px",
                }}
              >
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              HOURS
            </div>
        
            <div>
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "4px",
                }}
              >
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              MINUTES
            </div>
          </div>
        
          {/* Bottom Line */}
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.28)",
              marginTop: "28px",
            }}
          />
        </motion.div>

        {/* Couple Photo */}
{/* Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: "64px",
            zIndex: 2,
            position: "relative",
            width: "min(360px, 82vw)",
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              background:
                "radial-gradient(rgba(255,255,255,0.18), transparent 72%)",
              filter: "blur(40px)",
              zIndex: 1,
            }}
          />
        
          {/* Soft Background Blur */}
          <div
            style={{
              position: "absolute",
              inset: "-10px",
              backdropFilter: "blur(18px)",
              borderRadius: "48px",
              background: "rgba(255,255,255,0.03)",
              zIndex: 1,
            }}
          />
        
          {/* Main Image */}
          <img
          src={coupleImage}
          alt="couple"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "42px",
            position: "relative",
            zIndex: 2,
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
            filter: "saturate(0.96) contrast(1.02)",
          }}
          />
        
          {/* Edge Fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "42px",
              background: `
                linear-gradient(
                  to top,
                  rgba(0,0,0,0.18),
                  transparent 36%
                )
              `,
              zIndex: 3,
              mixBlendMode: "soft-light",
            }}
          />
        
          {/* Outer Fade */}
          <div
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "44px",
              background:
                "radial-gradient(circle at center, transparent 58%, rgba(245,245,244,0.75) 100%)",
              zIndex: 4,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </motion.section>

      {/* Information */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.82)",
            borderRadius: "32px",
            padding: "clamp(24px, 6vw, 48px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "40px",
              color: "#b8924f",
              fontWeight: "normal",
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            Information
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div
              style={{
                lineHeight: 2.4,
                color: "#44403c",
                fontSize: "17px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <p>日時：2026年5月24日（日）11:00</p>
              <br />

              <p>会場：：THE KAWABUN NAGOYA</p>
              <p>住所：愛知県名古屋市中区丸の内2-12-30</p>
              <p>TEL：052-222-0020</p>
            </div>

            {/* Right */}
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: "320px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps?q=THE+KAWABUN+NAGOYA&output=embed"
                width="100%"
                height="320"
                style={{
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
