import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import heroImage from "./assets/images/hero.jpg"
import leavesImage from "./assets/images/leaves.png"

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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
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
        {/* Botanical overlay */}
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

        {/* Content */}
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
            fontSize: "56px",
            marginBottom: "24px",
            fontWeight: "normal",
            color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.25)",
            zIndex: 2,
            position: "relative",
          }}
        >
          両家顔合わせのご案内
        </h1>

        <p
          style={{
            fontSize: "18px",
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
        <div
          style={{
            marginTop: "40px",
            padding: "20px 32px",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "999px",
            backdropFilter: "blur(10px)",
            color: "white",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            zIndex: 2,
            position: "relative",
          }}
        >
          あと {timeLeft.days} 日 {timeLeft.hours} 時間{" "}
          {timeLeft.minutes} 分
        </div>
      </motion.section>

      {/* Information */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.82)",
            borderRadius: "32px",
            padding: "48px",
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
            }}
          >
            Information
          </h2>

          <div
            style={{
              lineHeight: 2.4,
              color: "#44403c",
              fontSize: "17px",
            }}
          >
            <p>日時：2026年5月24日（日）11:00</p>
            <p>人数：6名</p>

            <br />

            <p>THE KAWABUN NAGOYA</p>
            <p>愛知県名古屋市中区丸の内2-12-30</p>
            <p>TEL：052-222-0020</p>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
