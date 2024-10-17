import CompanyLogosSection from './components/molecules/CompanyLogosSection'
import Navbar from './components/molecules/Navbar'
import ProposalCard from './components/molecules/ProposalCard'
import CaseStudies from './components/organisms/CaseStudies'
import ContactUs from './components/organisms/ContactUs'
import Footer from './components/organisms/Footer'
import Hero from './components/organisms/Hero'
import OurWorkingProcess from './components/organisms/OurWorkingProcess'
import Services from './components/organisms/Services'
import Team from './components/organisms/Team'
import Testimonials from './components/organisms/Testimonials'

function App() {
  return (
    <main>
      <div className="max-w-[430px] md:max-w-max m-auto">
        <Navbar />
        <div className="px-5 mt-8 lg:px-24">
          <section className="mt-10">
            <Hero />
          </section>
          <section className="mt-16">
            <CompanyLogosSection />
          </section>
          <section className="mt-16">
            <Services />
          </section>
          <section className="mt-16">
            <ProposalCard />
          </section>
          <section className="mt-16">
            <CaseStudies />
          </section>
          <section className="mt-16">
            <OurWorkingProcess />
          </section>
          <section className="mt-16">
            <Team />
          </section>
          <section className="mt-16">
            <Testimonials />
          </section>
          <section className="mt-16">
            <ContactUs />
          </section>
        </div>
      </div>
      <footer className="mt-16 bg-dark">
        <Footer />
      </footer>
    </main>
  )
}

export default App
