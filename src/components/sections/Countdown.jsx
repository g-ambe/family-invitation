import { motion } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'
import Container from '../Container'

const item = (label, value) => (
  <div className="rounded-2xl border border-white/25 bg-white/15 px-4 py-5 text-center backdrop-blur-md">
    <p className="font-serif text-3xl text-white sm:text-4xl">{String(value).padStart(2, '0')}</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/75">{label}</p>
  </div>
)

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <section className="relative -mt-24 pb-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/30 bg-black/35 p-4 shadow-2xl backdrop-blur-xl sm:p-6"
        >
          <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-white/80">Until the Day</p>
          <div className="grid grid-cols-4 gap-3">{[item('Days', days), item('Hours', hours), item('Minutes', minutes), item('Seconds', seconds)]}</div>
        </motion.div>
      </Container>
    </section>
  )
}
