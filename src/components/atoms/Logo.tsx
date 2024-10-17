import logoDefault from '../../assets/logo-default.png'
import logoWhite from '../../assets/logo-white.png'

type LogoProps = {
  type?: 'default' | 'white'
}

const Logo: React.FC<LogoProps> = ({ type = 'default' }) => {
  const logoSrc = type === 'white' ? logoWhite : logoDefault

  return <img src={logoSrc} alt="logo" />
}

export default Logo
