import Heading from '../atoms/Heading'
import TestimonialCard from '../molecules/TestimonialCard'

const Testimonials = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-10">
        <Heading text="Testimonials" />
        <p className="mob-text-base mt-8 mb-10 text-center lg:text-left lg:w-[500px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <TestimonialCard />
    </div>
  )
}

export default Testimonials
