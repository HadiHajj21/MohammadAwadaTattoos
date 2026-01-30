import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'
import MapSection from '../components/MapSection'
import Footer from '../components/Footer'
import Signature from '../components/Signature'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <BookingForm />
      <MapSection />
      <Footer />
      <Signature />
    </>
  )
}
