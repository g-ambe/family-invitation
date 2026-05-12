import { invitation } from '../../data'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import Container from '../Container'

export default function Message() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle en="Message" ja="ご挨拶" />
          <p className="max-w-3xl font-serif text-lg leading-10 text-stone-700 sm:text-xl">
            このたび、{invitation.groomName} と {invitation.brideName} の両家顔合わせを執り行う運びとなりました。
            感謝の気持ちを込めて、穏やかで温かなひとときをご一緒できましたら幸いです。
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
