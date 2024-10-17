import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <footer className="py-12 bg-dark rounded-t-[45px] lg:p-16">
      <div className="lg:flex lg:flex-row items-center justify-between">
        <div className="w-fit mb-9 lg:mb-0 m-auto lg:m-0 ">
          <Logo type="white" />
        </div>
        <div className="text-center flex flex-col gap-4 lg:flex-row">
          <p className="mob-text-base text-white">About Us</p>
          <p className="mob-text-base text-white">Services</p>
          <p className="mob-text-base text-white">Use Cases</p>
          <p className="mob-text-base text-white">Pricing</p>
        </div>
        <img
          src="/src/assets/icons/social-footer.png"
          alt="social-footer"
          className="hidden lg:block object-contain"
        />
      </div>
      <div className="lg:flex flex-row ">
        <div className="lg:w-4/12">
          <div className="px-2 w-fit rounded-lg bg-green m-auto my-9 lg:mx-0">
            <p className="mob-text-base font-medium">Contact Us:</p>
          </div>
          <div className="space-y-4 text-center w-[295px] m-auto lg:mx-0 lg:text-left">
            <p className="mob-text-base text-white">
              Email: info@positivus.com
            </p>
            <p className="mob-text-base text-white">Phone: 555-567-8901</p>
            <p className="mob-text-base text-white">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className="bg-darkGray lg:w-full mx-5 p-8 rounded-2xl my-9 lg:mb-0 flex flex-col gap-6 items-center lg:flex-row">
          <input
            type="email"
            className="border bg-darkGray border-white bg rounded-2xl px-6 p-5 w-full mt-2"
            placeholder="Email"
          />
          <div className="w-full lg:w-[30rem]">
            <Button text="Subscribe to news" type="tertiary" />
          </div>
        </div>
      </div>
      <img
        src="/src/assets/icons/social-footer.png"
        alt="social-footer"
        className="m-auto lg:hidden"
      />
      <div className="border border-white my-9 mx-6 lg:mx-0" />
      <div className="text-center text-white mob-text-base flex flex-col gap-4 lg:gap-6 lg:flex-row">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
