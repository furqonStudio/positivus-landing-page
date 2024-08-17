import Heading from '../atoms/Heading'
import CaseStudyCard from '../molecules/CaseStudyCard'

const CaseStudies = () => {
  return (
    <div>
      <Heading text="Case Studies" isCenter />
      <p className="mob-text-base mt-8 mb-10 text-center">
        Explore Real-Life Examples of Our Proven Digital Marketing Success
        through Our Case Studies
      </p>
      <div className="flex gap-5">
        <CaseStudyCard />
        <CaseStudyCard />
      </div>
    </div>
  )
}

export default CaseStudies
