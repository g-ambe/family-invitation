import { invitation } from '../../data'
import Container from '../Container'

export default function Footer() {
  return (
    <footer className="py-14">
      <Container className="text-center">
        <p className="font-serif text-sm tracking-[0.16em] text-stone-500">
          {invitation.groomFamily}　{invitation.groomName} / {invitation.brideFamily}　{invitation.brideName}
        </p>
      </Container>
    </footer>
  )
}
