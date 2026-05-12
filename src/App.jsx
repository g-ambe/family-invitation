import Access from './components/sections/Access'
import Countdown from './components/sections/Countdown'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Information from './components/sections/Information'
import Message from './components/sections/Message'
import Schedule from './components/sections/Schedule'
import Story from './components/sections/Story'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <Countdown />
      <Story />
      <Message />
      <Schedule />
      <Information />
      <Access />
      <Footer />
    </div>
  )
}
