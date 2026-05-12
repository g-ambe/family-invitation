import { invitation } from '../../data'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import Container from '../Container'

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
                <a href={invitation.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm transition hover:border-accent hover:text-accent">Google Map</a>
                <a href={invitation.joinUrl} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-3 text-center text-sm text-paper transition hover:opacity-85">参加サイトを開く</a>
              </div>
            </article>
            <article className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 text-center">
              <p className="text-xs leading-6 tracking-[0.08em] text-stone-500">
                IMAGE SLOT
                <br />
                会場写真・家紋・装花など、
                <br />
                後から画像を配置できます。
              </p>
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
