type HeadingProps = {
  text: string
  type?: string
  isSmall?: boolean
  isCenter?: boolean | { sm?: boolean; md?: boolean; lg?: boolean }
}

const Heading: React.FC<HeadingProps> = ({
  text = 'edit this text',
  type,
  isSmall = false,
  isCenter = false,
}) => {
  const className = (() => {
    switch (type) {
      case 'white':
        return 'bg-white text-black'
      case 'black':
        return 'bg-dark text-white'
      case 'green':
      default:
        return 'bg-green text-black'
    }
  })()

  const centerClass = (() => {
    if (typeof isCenter === 'boolean') {
      return isCenter ? 'm-auto' : ''
    } else {
      return `${isCenter.sm ? 'sm:m-auto' : 'sm:m-0'} ${
        isCenter.md ? 'md:m-auto' : 'md:m-0'
      } ${isCenter.lg ? 'lg:m-auto' : 'lg:m-0'}`
    }
  })()

  return (
    <div className={`${className} ${centerClass} px-2 w-fit rounded-lg`}>
      <p className={`${isSmall ? 'mob-heading-h3' : 'mob-heading-h2'}`}>
        {text}
      </p>
    </div>
  )
}

export default Heading
