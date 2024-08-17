import Heading from '../atoms/Heading'
import TestimonialCard from '../molecules/TestimonialCard'

const Testimonials = () => {
  return (
    <div>
      <Heading text="Testimonials" isCenter />
      <p className="mob-text-base mt-8 mb-10 text-center">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
        about Our Digital Marketing Services
      </p>
      <TestimonialCard />
    </div>
  )
}

export default Testimonials
