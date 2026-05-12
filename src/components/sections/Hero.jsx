import { motion } from 'framer-motion'
import { invitation } from '../../data'
import Container from '../Container'

const copyLines = ['両家のご縁を結ぶ、', '穏やかなひととき。']

export default function Hero() {
  return (
    <section className="hero-frame relative min-h-screen overflow-hidden border-b border-gold/30">
      <motion.div
        initial={{ opacity: 0.86, scale: 1.02 }}
        animate={{ opacity: 0.96, scale: 1.08 }}
        transition={{ duration: 18, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={invitation.images.hero} alt="Invitation background" className="h-full w-full object-cover opacity-75" />
      </motion.div>

      <div className="hero-vignette absolute inset-0" />
      <div className="hero-cinematic absolute inset-0" />

      <motion.div className="botanical-overlay absolute -left-12 top-8 h-72 w-72" animate={{ y: [0, -6, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="botanical-overlay absolute -right-10 bottom-12 h-80 w-80 rotate-180" animate={{ y: [0, 5, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="floating-light absolute left-1/3 top-1/4 h-40 w-40" animate={{ x: [0, 10, 0], y: [0, -6, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />

      <Container className="relative z-10 flex min-h-screen items-center py-24">
        <div className="gold-frame w-full max-w-3xl px-8 py-12 sm:px-12 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mb-6 text-[11px] uppercase tracking-[0.42em] text-ivory/80">Invitation</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.05 }} className="font-serif text-5xl leading-[1.24] tracking-[0.06em] text-ivory sm:text-6xl">Koki & Haruka</motion.h1>
          <div className="my-8 h-px w-20 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <div className="space-y-2 text-lg leading-[2.2] tracking-[0.08em] text-ivory/90 sm:text-xl">
            {copyLines.map((line, i) => (
              <motion.p key={line} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 + i * 0.14 }}>
                {line}
              </motion.p>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }} className="mt-10 text-xs tracking-[0.25em] text-ivory/70">{invitation.date}</motion.p>
        </div>
      </Container>
    </section>
  )
}
