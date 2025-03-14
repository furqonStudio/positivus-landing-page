const TestimonialCard = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      name: 'John Smith',
      jobTitle: 'Marketing Director at XYZ Corp',
    },
    {
      id: 2,
      quote:
        'Positivus has transformed our online presence! Their dedicated team is knowledgeable and always available to answer our questions. We couldn’t be happier with the results!',
      name: 'Jane Doe',
      jobTitle: 'CEO of ABC Inc',
    },
    {
      id: 3,
      quote:
        "The level of service and commitment from Positivus is unmatched. They've helped us grow our digital marketing strategy and deliver great results!",
      name: 'Michael Brown',
      jobTitle: 'Chief Marketing Officer at 123 Co',
    },
  ]

  return (
    <div className="p-8 rounded-[45px] bg-dark ">
      <div className="flex flex-row gap-8 overflow-x-scroll scrollbar-hidden">
        {testimonialsData.map(({ id, quote, name, jobTitle }) => (
          <div key={id} className="p-8 border border-green rounded-[45px] ">
            <p className="mob-text-base text-white min-w-56 md:min-w-96 min-h-fit">
              "{quote}"
            </p>
            <div className="mt-4">
              <h4 className="mob-heading-h4 text-green">{name}</h4>
              <p className="mob-text-base text-white">{jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center mt-8  max-w-sm m-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(-1, 1)"
          opacity={'50%'}
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
            fill="white"
          />
        </svg>

        <div className="flex space-x-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={index < 4 ? '#B9FF66' : 'white'}
              />
            </svg>
          ))}
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default TestimonialCard
