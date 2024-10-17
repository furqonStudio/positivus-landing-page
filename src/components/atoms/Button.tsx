type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({
  text = 'edit this text',
  type = 'primary',
}) => {
  const className = (() => {
    switch (type) {
      case 'secondary':
        return 'border border-dark text-dark'
      case 'tertiary':
        return 'bg-green text-dark'
      case 'primary':
      default:
        return 'bg-dark text-white'
    }
  })()

  return (
    <div className={`${className}  px-9 py-5 rounded-2xl lg:w-fit`}>
      <p className="font-space text-xl text-center">{text}</p>
    </div>
  )
}

export default Button
