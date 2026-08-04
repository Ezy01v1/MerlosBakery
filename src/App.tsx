import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Header />
      <main>
        <Hero />
        <Menu />
        <HowItWorks />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
