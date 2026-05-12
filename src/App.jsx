import Access from './components/sections/Access'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Information from './components/sections/Information'
import Message from './components/sections/Message'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <Message />
      <Information />
      <Access />
      <Footer />
    </div>
  )
}
