import Button from '../atoms/Button'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="mob-heading-h1 lg:heading-h1 lg:leading-tight mb-3">
          Navigating the digital landscape for success
        </h1>
        <img
          src="/src/assets/hero-image.png"
          alt="hero-image"
          className="m-auto mb-5 lg:hidden"
        />
        <p className="mob-text-base mb-10 lg:w-[498px] lg:text-[20px] lg:my-9">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button text="Book a consultation" type="primary" />
      </div>
      <div className="lg:w-1/2">
        <img
          src="/src/assets/hero-image.png"
          alt="hero-image"
          className="hidden lg:block "
          width={600}
          height={515}
        />
      </div>
    </div>
  )
}

export default Hero
