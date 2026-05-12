import { invitation } from '../../data'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import Container from '../Container'

const items = [
  ['日時', invitation.date],
  ['人数', invitation.guests],
  ['会場', invitation.venue],
  ['電話番号', invitation.phone, `tel:${invitation.phone.replaceAll('-', '')}`],
  ['住所', invitation.address],
]

export default function Information() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle en="Information" ja="開催概要" />
          <dl className="grid gap-y-6 border-y border-stone-300 py-8 sm:grid-cols-[140px_1fr]">
            {items.map(([label, value, href]) => (
              <div key={label} className="contents">
                <dt className="text-sm tracking-[0.14em] text-stone-500">{label}</dt>
                <dd className="text-base leading-8 text-ink">
                  {href ? (
                    <a href={href} className="transition-colors hover:text-accent">{value}</a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
