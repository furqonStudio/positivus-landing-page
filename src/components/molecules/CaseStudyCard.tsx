import LabelLink from '../atoms/LabelLink'

const CaseStudyCard = () => {
  return (
    <div className="bg-dark rounded-[45px] px-12 py-10">
      <p className="mob-text-base w-[250px] text-white mb-5">
        For a local restaurant, we implemented a targeted PPC campaign that
        resulted in a 50% increase in website traffic and a 25% increase in
        sales.
      </p>
      <LabelLink text="Learn more" color="green" />
    </div>
  )
}

export default CaseStudyCard
