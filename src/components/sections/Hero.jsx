import { invitation } from '../../data'
import Reveal from '../Reveal'
import Container from '../Container'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-accent">Family Gathering Invitation</p>
          <h1 className="font-serif text-4xl leading-[1.3] sm:text-5xl">両家顔合わせのご案内</h1>
          <p className="mt-8 max-w-xl text-sm leading-8 text-stone-600 sm:text-base">
            {invitation.groomFamily}・{invitation.brideFamily}の新たなご縁を結ぶ日。
            <br className="hidden sm:block" />
            静かでやわらかな時間を、心よりご案内申し上げます。
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
