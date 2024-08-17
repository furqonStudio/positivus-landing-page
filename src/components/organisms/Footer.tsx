import Button from '../atoms/Button'

const Footer = () => {
  return (
    <div className="py-12">
      <img
        src="/src/assets/logo-white.png"
        alt="'ogo-white"
        className="m-auto mb-9"
      />
      <div className="space-y-4 text-center">
        <p className="mob-text-base text-white">About Us</p>
        <p className="mob-text-base text-white">Services</p>
        <p className="mob-text-base text-white">Use Cases</p>
        <p className="mob-text-base text-white">Pricing</p>
      </div>
      <div className="px-2 w-fit rounded-lg bg-green m-auto my-9">
        <p className="mob-text-base font-medium">Contact Us:</p>
      </div>
      <div className="space-y-4 text-center w-[295px] m-auto">
        <p className="mob-text-base text-white">Email: info@positivus.com</p>
        <p className="mob-text-base text-white">Phone: 555-567-8901</p>
        <p className="mob-text-base text-white">
          Address: 1234 Main St Moonstone City, Stardust State 12345
        </p>
      </div>
      <div className="bg-darkGray mx-5 p-8 rounded-2xl space-y-6 my-9">
        <input
          type="email"
          className="border bg-darkGray border-white bg rounded-2xl px-6 p-5 w-full mt-2"
          placeholder="Email"
        />
        <Button text="Subscribe to news" type="tertiary" isFull />
      </div>
      <img
        src="/src/assets/icons/social-footer.png"
        alt="social-footer"
        className="m-auto"
      />
      <div className="border border-white my-9 mx-6" />
      <div className="text-center text-white mob-text-base space-y-4">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
