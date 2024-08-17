interface TeamCardProps {
  name: string
  title: string
  imageUrl: string
  description: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="px-9 py-10 rounded-[45px] bg-gray space-y-5 border border-dark shadow-[0_4px_0px_#191A23]">
      <div className="flex flex-row gap-5 items-end relative">
        <img src={imageUrl} alt={name} width={102} height={102} />
        <div>
          <h4 className="mob-heading-h4">{name}</h4>
          <p className="mob-text-base">{title}</p>
        </div>
        <img
          src="/src/assets/icons/social.png"
          alt="social-icon"
          width={34}
          height={34}
          className="absolute right-0 top-0"
        />
      </div>
      <div className="border border-black" />
      <p className="mob-text-base">{description}</p>
    </div>
  )
}

export default TeamCard
