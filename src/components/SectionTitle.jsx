export default function SectionTitle({ en, ja }) {
  return (
    <div className="mb-7 sm:mb-9">
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-accent">{en}</p>
      <h2 className="font-serif text-2xl leading-tight sm:text-3xl">{ja}</h2>
    </div>
  )
}
