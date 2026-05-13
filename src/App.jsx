export default function App() {
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
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
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
            color: "#57534e",
          }}
        >
          ご縁を結ぶ、穏やかなひととき
        </p>
      </section>

      {/* Info */}
      <section
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
      </section>
    </main>
  )
}
