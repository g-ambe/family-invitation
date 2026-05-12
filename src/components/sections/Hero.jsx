import { motion, useScroll, useTransform } from 'framer-motion'
import { invitation } from '../../data'
import Container from '../Container'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={invitation.images.hero} alt="Invitation background" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-paper" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%)]" />

      <Container className="relative z-10 flex min-h-screen items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">Invitation</p>
          <h1 className="font-serif text-5xl leading-[1.2] text-white sm:text-6xl">Koki & Haruka</h1>
          <p className="mt-6 max-w-lg text-sm leading-8 text-white/80 sm:text-base">
            A refined gathering celebrating two families, crafted in calm elegance and heartfelt hospitality.
          </p>
          <p className="mt-7 text-sm tracking-[0.2em] text-white/70">{invitation.date}</p>
        </motion.div>
      </Container>
    </section>
  )
}
