import Heading from '../atoms/Heading'
import Card from '../molecules/Card'

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title1: 'Search engine',
      title2: 'optimation',
      headingType: 'green',
      bgColor: 'gray',
      bglink: 'black',
      iconLink: 'green',
      imgUrl: '/src/assets/services/service-1.png',
    },
    {
      id: 2,
      title1: 'Pay-per-click',
      title2: 'advertising',
      headingType: 'white',
      bgColor: 'green',
      bglink: 'black',
      iconLink: 'green',
      imgUrl: '/src/assets/services/service-2.png',
    },
    {
      id: 3,
      title1: 'Social Media',
      title2: 'Marketing',
      headingType: 'white',
      bgColor: 'black',
      bglink: 'white',
      iconLink: 'black',
      imgUrl: '/src/assets/services/service-3.png',
    },
    {
      id: 4,
      title1: 'Email',
      title2: 'Marketing',
      headingType: 'green',
      bgColor: 'gray',
      bglink: 'black',
      iconLink: 'green',
      imgUrl: '/src/assets/services/service-4.png',
    },
    {
      id: 5,
      title1: 'Content',
      title2: 'Creation',
      headingType: 'white',
      bgColor: 'green',
      bglink: 'black',
      iconLink: 'green',
      imgUrl: '/src/assets/services/service-5.png',
    },
    {
      id: 6,
      title1: 'Analytics and',
      title2: 'Tracking',
      headingType: 'white',
      bgColor: 'black',
      bglink: 'white',
      iconLink: 'black',
      imgUrl: '/src/assets/services/service-6.png',
    },
  ]

  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-10">
        <Heading
          text="Services"
          isCenter={{ sm: true, md: false, lg: false }}
        />
        <p className="mob-text-base mt-8 mb-10 text-center lg:text-left lg:w-[580px] lg:text-base">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="space-y-8 flex flex-col lg:flex-row lg:flex-wrap lg:space-y-0 lg:gap-7">
        {servicesData.map((service) => (
          <Card
            headingTitle1={service.title1}
            headingTitle2={service.title2}
            headingType={service.headingType}
            bgColor={service.bgColor}
            bgLink={service.bglink}
            iconLink={service.iconLink}
            imgUrl={service.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
