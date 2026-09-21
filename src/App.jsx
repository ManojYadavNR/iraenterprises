import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Film from './components/Film.jsx'
import Why from './components/Why.jsx'
import Process from './components/Process.jsx'
import Store from './components/Store.jsx'
import OwnerStory from './components/OwnerStory.jsx'
import City from './components/City.jsx'
import Dealership from './components/Dealership.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Film />
        <Why />
        <Process />
        <Store />
        <OwnerStory />
        <City />
        <Testimonials />
        <Faq />
        <Dealership />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
