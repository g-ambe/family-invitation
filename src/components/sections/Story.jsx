import { motion } from 'framer-motion'
import { invitation } from '../../data'
import Container from '../Container'
import LuxuryImage from '../ui/LuxuryImage'

export default function Story() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Story</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">Two Families, One New Beginning</h2>
            <p className="mt-6 leading-8 text-stone-600">
              二つの家族が静かに出会い、これから先の未来をやさしく重ねていくための時間。
              上質な空間で、心からの感謝をお伝えします。
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }} className="overflow-hidden rounded-3xl border border-stone-200">
            <LuxuryImage src={invitation.images.couple} alt="Couple" className="aspect-[4/5] transition duration-700 hover:scale-105" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
