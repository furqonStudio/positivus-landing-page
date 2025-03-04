type AccordionProps = {
  title: string
  index: number
}

const Accordion: React.FC<AccordionProps> = ({ title, index }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray p-8 rounded-[45px] border border-dark shadow-[0_4px_0px_#191A23]">
      <div className="flex flex-row items-center gap-8">
        <p className="text-3xl font-space font-medium">{index}</p>
        <h4 className="mob-heading-h4">{title}</h4>
      </div>
      <img src="/assets/icons/plus.png" alt="plus" width={30} height={30} />
    </div>
  )
}

export default Accordion
