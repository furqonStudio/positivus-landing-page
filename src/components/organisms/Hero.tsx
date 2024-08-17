import Button from '../atoms/Button'

const Hero = () => {
  return (
    <div>
      <h1 className="mob-heading-h1 mb-3">
        Navigating the digital landscape for success
      </h1>
      <img
        src="/src/assets/hero-image.png"
        alt="hero-image"
        className="m-auto mb-5"
      />
      <p className="mob-text-base mb-10">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <Button text="Book a consultation" type="primary" isFull />
    </div>
  )
}

export default Hero
