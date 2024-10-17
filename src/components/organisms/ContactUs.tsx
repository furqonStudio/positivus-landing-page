import Button from '../atoms/Button'
import Heading from '../atoms/Heading'

const ContactUs = () => {
  return (
    <div>
      <Heading text="Contact Us" isCenter />
      <p className="mob-text-base mt-8 mb-10 text-center">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </p>
      <div className="px-9 py-10 lg:px-24 lg:py-16 rounded-[45px] bg-gray relative mb-8">
        <div className="space-y-5 lg:max-w-lg">
          <div className="flex flex-row justify-between  px-6 mb-9 max-w-xs m-auto lg:mx-0">
            <div className="flex items-center">
              <input
                type="radio"
                name="contact"
                id="say-hi"
                value="Say Hi"
                className="hidden"
              />
              <label
                htmlFor="say-hi"
                className="flex items-center cursor-pointer"
              >
                <span className="radio-custom"></span>
                <span className="mob-text-base ml-4">Say Hi</span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="contact"
                id="get-quote"
                value="Get Quote"
                className="hidden"
              />
              <label
                htmlFor="get-quote"
                className="flex items-center cursor-pointer"
              >
                <span className="radio-custom"></span>
                <span className="mob-text-base ml-4">Get a Quote</span>
              </label>
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="mob-text-base ">
              Name
            </label>
            <input
              type="text"
              className="border border-dark rounded-2xl px-5 p-4 w-full mt-2"
              placeholder="Name"
            />
          </div>
          <div className="">
            <label htmlFor="" className="mob-text-base ">
              Email*
            </label>
            <input
              type="email"
              className="border border-dark rounded-2xl px-5 p-4 w-full mt-2"
              placeholder="Email"
            />
          </div>
          <div className="">
            <label htmlFor="" className="mob-text-base ">
              Message*
            </label>
            <textarea
              name="message"
              placeholder="Message"
              id="message"
              className="border border-dark rounded-2xl px-5 p-4 w-full mt-2"
              rows={4}
            />
          </div>
        </div>
        <div className="lg:block hidden mt-8">
          <Button text="Send Message" />
        </div>
        <img
          src="/src/assets/contact/illustration.png"
          alt="contact-illustration"
          className="absolute top-0 -right-80 hidden lg:block"
        />
      </div>
      <div className="lg:hidden">
        <Button text="Send Message" />
      </div>
    </div>
  )
}

export default ContactUs
