import burgerIcon from '/assets/icons/burger.png'
import Logo from '../atoms/Logo'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 mt-8 lg:px-24">
      <div className="w-[144px] md:w-fit">
        <Logo />
      </div>
      <img src={burgerIcon} alt="burger-menu-navigation" />
    </div>
  )
}

export default Navbar
