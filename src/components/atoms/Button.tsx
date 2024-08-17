type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
  isFull?: boolean // Ubah menjadi boolean
}

const Button: React.FC<ButtonProps> = ({
  text = 'edit this text',
  type = 'primary',
  isFull = false,
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
    <div
      className={`${className} ${
        isFull ? 'w-full text-center' : 'w-fit'
      } px-9 py-5 w-fit rounded-2xl`}
    >
      <p className="font-space text-xl">{text}</p>
    </div>
  )
}

export default Button
