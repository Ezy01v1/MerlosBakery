import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
        <HowItWorks />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
