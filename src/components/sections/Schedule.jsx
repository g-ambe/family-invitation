import { Clock3, GlassWater, Utensils } from 'lucide-react'
import Container from '../Container'

const events = [
  { time: '11:00', label: 'Greeting', icon: Clock3 },
  { time: '11:15', label: 'Toast', icon: GlassWater },
  { time: '11:30', label: 'Course Lunch', icon: Utensils },
]

export default function Schedule() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Schedule</p>
        <h2 className="mt-3 font-serif text-3xl">Time Flow</h2>
        <div className="mt-8 space-y-4">
          {events.map(({ time, label, icon: Icon }) => (
            <div key={time} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/60 p-4 backdrop-blur">
              <Icon className="h-5 w-5 text-accent" />
              <p className="w-16 font-serif text-lg">{time}</p>
              <p className="text-stone-600">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
