import Accordion from '../atoms/Accordion'
import Heading from '../atoms/Heading'

const OurWorkingProcess = () => {
  const accordionsData = [
    {
      id: 1,
      title: 'Consultation',
    },
    {
      id: 2,
      title: 'Research and Strategy Development',
    },
    {
      id: 3,
      title: 'Implementation',
    },
    {
      id: 4,
      title: 'Monitoring and Optimization',
    },
    {
      id: 5,
      title: 'Reporting and Communication',
    },
    {
      id: 6,
      title: 'Continual Improvement',
    },
  ]
  return (
    <div>
      <Heading text="Our Working" isCenter />
      <Heading text="Process" isCenter />
      <p className="mob-text-base mt-8 mb-10 text-center">
        Step-by-Step Guide to Achieving Your Business Goals
      </p>
      <div className="space-y-5">
        {accordionsData.map((accordion) => (
          <Accordion index={accordion.id} title={accordion.title} />
        ))}
      </div>
    </div>
  )
}

export default OurWorkingProcess
