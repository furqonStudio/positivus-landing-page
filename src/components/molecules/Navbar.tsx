import Logo from '../atoms/Logo'
import burgerIcon from '../../assets/icons/burger.png'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 mt-8">
      <Logo />
      <img src={burgerIcon} alt="burger-menu-navigation" />
    </div>
  )
}

export default Navbar
