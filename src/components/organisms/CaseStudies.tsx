import Heading from '../atoms/Heading'
import CaseStudyCard from '../molecules/CaseStudyCard'

const CaseStudies = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-10">
        <Heading text="Case Studies" />
        <p className="mob-text-base mt-8 mb-10 text-center lg:text-left lg:w-[580px] lg:text-base">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex gap-5 lg:bg-dark lg:justify-around lg:rounded-[45px] overflow-scroll scrollbar-hidden">
        <CaseStudyCard />
        <div className="hidden lg:block w-[0.5px] my-10 bg-white" />
        <CaseStudyCard />
        <div className="hidden lg:block w-[0.5px] my-10 bg-white" />
        <CaseStudyCard />
      </div>
    </div>
  )
}

export default CaseStudies
