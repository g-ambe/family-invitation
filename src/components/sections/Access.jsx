import { invitation } from '../../data'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import LuxuryImage from '../ui/LuxuryImage'

export default function Access() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle en="Access" ja="アクセス" />
          <div className="grid gap-5 sm:grid-cols-[1.1fr_1fr]">
            <article className="rounded-2xl border border-stone-200 bg-white/70 p-6 sm:p-8">
              <p className="font-serif text-xl">{invitation.venue}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600">{invitation.address}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={invitation.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm transition hover:scale-[1.02] hover:border-accent hover:shadow-lg hover:shadow-stone-200">Google Map</a>
                <a href={invitation.joinUrl} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-3 text-center text-sm text-paper transition hover:scale-[1.02] hover:opacity-90">参加サイトを開く</a>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-stone-200">
              <LuxuryImage src={invitation.images.restaurant} alt="Restaurant" className="aspect-[4/3] transition duration-700 hover:scale-105" />
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
