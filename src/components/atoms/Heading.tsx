type HeadingProps = {
  text: string
  type?: string
  isSmall?: boolean
  isCenter?: boolean
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

  return (
    <div
      className={`${className} px-2 w-fit rounded-lg ${
        isCenter ? 'm-auto' : null
      }`}
    >
      <p className={`${isSmall ? 'mob-heading-h3' : 'mob-heading-h2'} `}>
        {text}
      </p>
    </div>
  )
}

export default Heading
