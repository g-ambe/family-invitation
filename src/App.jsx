import heroImage from "./assets/images/hero.jpg"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function App() {
  const targetDate = new Date("2026-05-24T11:00:00")

const [timeLeft, setTimeLeft] = useState({})

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
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.25)
            ),
            url(${heroImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "0.3em",
            color: "#a16207",
            marginBottom: "24px",
            fontSize: "14px",
          }}
        >
          FAMILY GATHERING
        </p>

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "24px",
            fontWeight: "normal",
          }}
        >
          両家顔合わせのご案内
        </h1>
        

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "600px",
            color: "white",
          }}
        >
          ご縁を結ぶ、穏やかなひととき
        </p>
        <div
          style={{
            marginTop: "40px",
            padding: "20px 32px",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "999px",
            backdropFilter: "blur(10px)",
            color: "white",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          あと {timeLeft.days} 日 {timeLeft.hours} 時間{" "}
          {timeLeft.minutes} 分
        </div>
        
      </motion.section>

      {/* Info */}
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
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "32px",
              color: "#a16207",
            }}
          >
            Information
          </h2>

          <div style={{ lineHeight: 2 }}>
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
