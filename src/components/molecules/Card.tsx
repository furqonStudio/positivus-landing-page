import React from 'react'
import ButtonLink from '../atoms/ButtonLink'
import Heading from '../atoms/Heading'

interface CardProps {
  headingTitle1: string
  headingTitle2: string
  headingType: string
  bgColor: string
  bgLink?: string
  iconLink?: string
  imgUrl?: string
}

const Card: React.FC<CardProps> = ({
  headingTitle1,
  headingTitle2,
  headingType = 'small',
  bgColor,
  bgLink = 'black',
  iconLink = 'green',
  imgUrl = '/src/assets/services/seo.png',
}) => {
  const bgClassName = (() => {
    switch (bgColor) {
      case 'gray':
        return 'bg-gray'
      case 'black':
        return 'bg-dark'
      case 'green':
      default:
        return 'bg-green'
    }
  })()

  return (
    <div
      className={`${bgClassName} p-12 rounded-[45px] border border-dark shadow-[0_4px_0px_#191A23]`}
    >
      <Heading text={headingTitle1} isSmall type={headingType} />
      <Heading text={headingTitle2} isSmall type={headingType} />
      <div className="flex flex-row justify-between items-end mt-7">
        <ButtonLink backgroundColor={bgLink} iconColor={iconLink} />
        <img src={imgUrl} alt="seo" />
      </div>
    </div>
  )
}

export default Card
