import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import heroImage from "./assets/images/hero.jpg"
import leavesImage from "./assets/images/leaves.png"
import coupleImage from "./assets/images/couple3.jpg"

export default function App() {
  const targetDate = new Date("2026-05-24T11:00:00")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  const [tilt, setTilt] = useState(0)

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

  const handleOrientation = (event) => {
    if (event.gamma) {
      setTilt(event.gamma * 0.6)
    }
  }

  window.addEventListener(
    "deviceorientation",
    handleOrientation
  )

  return () => {
    clearInterval(timer)

    window.removeEventListener(
      "deviceorientation",
      handleOrientation
    )
  }
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
          paddingLeft: "clamp(28px, 8vw, 120px)",
          paddingRight: "clamp(24px, 5vw, 40px)",
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

        {/* Soft Light */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.10), transparent 55%)",
            pointerEvents: "none",
          }}
        />
        
      {/* Floating Leaves */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {[...Array(5)].map((_, i) => {
          const randomDelay = Math.random() * 20
          const randomDuration = 38 + Math.random() * 18
          const randomLeft = Math.random() * 100
          const randomRotate = Math.random() * 10 - 5
      
          return (
            <motion.div
              key={i}
              initial={{
                y: "-12vh",
                opacity: 0,
              }}
              animate={{
                y: "112vh",
                opacity: [0, 0.22, 0.22, 0.12],
                rotate: [
                  randomRotate,
                  randomRotate + 4,
                  randomRotate - 3,
                ],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "linear",
                delay: randomDelay,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: `${randomLeft}%`,
                width: `${12 + i * 2}px`,
                height: `${18 + i * 3}px`,
                borderRadius: "50% 0 50% 0",
                background:
                  "linear-gradient(135deg, rgba(156,196,145,0.52), rgba(202,224,190,0.16))",
                boxShadow:
                  "0 4px 10px rgba(126,169,116,0.10)",
                filter: "blur(0.4px)",
                transform: `
                  translateX(${tilt * 1.2}px)
                  rotate(45deg)
                `,
              }}
            />
          )
        })}
      </div>
        
        {/* Hero Content */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 3,
          }}
        >
          <p
            style={{
              letterSpacing: "0.3em",
              color: "#f3d9a4",
              marginBottom: "24px",
              fontSize: "14px",
            }}
          >
            FAMILY GATHERING
          </p>

          <h1
            style={{
              fontSize: "clamp(22px, 5.6vw, 56px)",
              marginBottom: "24px",
              fontWeight: "normal",
              color: "white",
              textShadow: "0 4px 20px rgba(0,0,0,0.25)",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
              overflow: "hidden",
              textOverflow: "ellipsis",
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
              color: "white",
              width: "min(520px, 90vw)",
              alignSelf: "center",
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
                gap: "clamp(16px, 6vw, 32px)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                opacity: 0.82,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(22px, 7vw, 32px)",
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
                    fontSize: "clamp(22px, 7vw, 32px)",
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
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
           style={{
              marginTop: "64px",
              position: "relative",
              width: "min(420px, 86vw)",
              transform:
                window.innerWidth < 768
                  ? "scale(1.08)"
                  : "scale(1)",
              transformOrigin: "center",
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
                objectPosition: "center 18%",
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
        </div>

      </motion.section>

      {/* Information */}
      <motion.section
        /*initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}*/
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
        
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
                width: "100%",
                maxWidth: "620px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* DATE */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 16px 1fr",
                    gap: "8px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#b8924f",
                      letterSpacing: "0.18em",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    DATE
                  </div>

                  <div
                    style={{
                      color: "#b8924f",
                    }}
                  >
                    ：
                  </div>

                  <div
                    style={{
                      lineHeight: 1.8,
                      fontSize: "clamp(15px, 2vw, 18px)",
                    }}
                  >
                    2026年5月24日（日）11:00
                  </div>
                </div>

                {/* PLACE */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 16px 1fr",
                    gap: "8px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#b8924f",
                      letterSpacing: "0.18em",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    PLACE
                  </div>

                  <div
                    style={{
                      color: "#b8924f",
                    }}
                  >
                    ：
                  </div>

                  <div
                    style={{
                      lineHeight: 1.8,
                      fontSize: "clamp(15px, 2vw, 18px)",
                    }}
                  >
                    THE KAWABUN NAGOYA
                  </div>
                </div>

                {/* ADDRESS */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 16px 1fr",
                    gap: "8px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#b8924f",
                      letterSpacing: "0.18em",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ADDRESS
                  </div>

                  <div
                    style={{
                      color: "#b8924f",
                    }}
                  >
                    ：
                  </div>

                <div
                  style={{
                    lineHeight: 1.9,
                    fontSize: "clamp(15px, 2vw, 18px)",
                    wordBreak: "keep-all",
                  }}
                >
                  愛知県名古屋市中区丸の内
                  <br />
                  2-12-30
                </div>
                </div>

                {/* TEL */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 16px 1fr",
                    gap: "8px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#b8924f",
                      letterSpacing: "0.18em",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    TEL
                  </div>

                  <div
                    style={{
                      color: "#b8924f",
                    }}
                  >
                    ：
                  </div>

                  <div
                    style={{
                      lineHeight: 1.8,
                      fontSize: "clamp(15px, 2vw, 18px)",
                    }}
                  >
                    052-222-0020
                  </div>
                </div>
              </div>
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
        {/* Course */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(14px)",
            borderRadius: "32px",
            padding: "56px 32px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(40px, 6vw, 56px)",
              color: "#b08a47",
              letterSpacing: "0.08em",
              fontWeight: 400,
              marginBottom: "48px",
            }}
          >
            Course
          </h2>
        
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              color: "#44403c",
            }}
          >
            {[
              {
                title: "AMUSE",
                body: [
                  "紅ずわい蟹とカリフラワー",
                  "vollonブリオッシュ国産ハモンセラーノ",
                ],
              },
              {
                title: "APPETIZER",
                body: ["サラダ・ド・オット"],
              },
              {
                title: "PASTA",
                body: ["雲丹クリームタリアテッレ"],
              },
              {
                title: "MAIN DISH",
                body: [
                  "① 渥美半島うまみ豚炭火焼",
                  "　　　or",      
                  "② 厳選黒毛和牛炭火焼",
                  "※黒毛和牛は前日までの予約となるので、事前にお知らせください。",
                ],
              },
              {
                title: "FIRST DESSERT",
                body: ["クアトロフォルマッジョ"],
              },
              {
                title: "SECOND DESSERT",
                body: [
                  "① ティラミス",
                  "　　　or",                  
                  "② 紅玉とふじりんごのアップルパイ",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderBottom: "1px solid rgba(176,138,71,0.14)",
                  paddingBottom: "24px",
                }}
              >
                <div
                  style={{
                    color: "#b08a47",
                    letterSpacing: "0.18em",
                    fontSize: "13px",
                    marginBottom: "14px",
                  }}
                >
                  {item.title}
                </div>
        
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    lineHeight: 1.9,
                    fontSize: "clamp(15px, 2vw, 18px)",
                  }}
                >
                  {item.body.map((text) => (
                    <div key={text}>{text}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  )
}
