import Button from '../atoms/Button'

const ProposalCard = () => {
  return (
    <div className="p-12 rounded-[45px] bg-gray space-y-5">
      <h3 className="mob-heading-h3 lg:heading-h3">Let’s make things happen</h3>
      <p className="mob-text-base lg:w-[500px] lg:text-base">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>
      <Button text="Get your proposal" />
    </div>
  )
}

export default ProposalCard
