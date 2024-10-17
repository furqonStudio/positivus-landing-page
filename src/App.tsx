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
    <div>
      <div className="max-w-[430px] md:max-w-max m-auto">
        <Navbar />
        <main className="px-5 mt-8 lg:px-24">
          <section className="mt-10 lg:mt-16">
            <Hero />
          </section>
          <section className="mt-16 lg:mt-32">
            <CompanyLogosSection />
          </section>
          <section className="mt-16 lg:mt-32">
            <Services />
          </section>
          <section className="mt-16 lg:mt-32">
            <ProposalCard />
          </section>
          <section className="mt-16 lg:mt-32">
            <CaseStudies />
          </section>
          <section className="mt-16 lg:mt-32">
            <OurWorkingProcess />
          </section>
          <section className="mt-16 lg:mt-32">
            <Team />
          </section>
          <section className="mt-16 lg:mt-32">
            <Testimonials />
          </section>
          <section className="mt-16 lg:mt-32">
            <ContactUs />
          </section>
        </main>
      </div>
      <div className="mt-16 lg:mt-32 lg:px-24">
        <Footer />
      </div>
    </div>
  )
}

export default App
