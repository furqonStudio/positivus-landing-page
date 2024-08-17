import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import TeamCard from '../molecules/TeamCard'

const Team = () => {
  const TeamData = [
    {
      id: 1,
      name: 'John Smith',
      jobTitle: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      imgUrl: '/src/assets/team/team-1.png',
    },
    {
      id: 2,
      name: 'Jane Doe',
      jobTitle: 'Director of Operations',
      description:
        '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      imgUrl: '/src/assets/team/team-2.png',
    },
    {
      id: 3,
      name: 'Michael Brown',
      jobTitle: 'Senior SEO Specialist',
      description:
        '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      imgUrl: '/src/assets/team/team-3.png',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      jobTitle: 'PPC Manager',
      description:
        '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      imgUrl: '/src/assets/team/team-4.png',
    },
  ]
  return (
    <div>
      <Heading text="Team" isCenter />
      <p className="mob-text-base mt-8 mb-10 text-center">
        Meet the skilled and experienced team behind our successful digital
        marketing strategies
      </p>
      <div className="space-y-8 mb-8">
        {TeamData.map((person) => (
          <TeamCard
            name={person.name}
            title={person.jobTitle}
            imageUrl={person.imgUrl}
            description={person.description}
          />
        ))}
      </div>
      <Button text="See all team" isFull />
    </div>
  )
}

export default Team
