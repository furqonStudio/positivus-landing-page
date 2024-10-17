import { useEffect, useState } from 'react'
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
    {
      id: 5,
      name: 'Brian Williams',
      jobTitle: 'Social Media Specialist',
      description:
        '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      imgUrl: '/src/assets/team/team-5.png',
    },
    {
      id: 6,
      name: 'Sarah Kim',
      jobTitle: 'Content Creator',
      description:
        '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      imgUrl: '/src/assets/team/team-4.png',
    },
  ]

  // State to manage the number of displayed team members
  const [displayCount, setDisplayCount] = useState(3)

  // Effect to handle resizing and set display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(TeamData.length) // Show all on large screens
      } else {
        setDisplayCount(3) // Show 3 on smaller screens
      }
    }

    handleResize() // Set initial count
    window.addEventListener('resize', handleResize) // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup event listener
    }
  }, [])

  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-10">
        <Heading text="Team" />
        <p className="mob-text-base mt-8 mb-10 text-center lg:text-left lg:w-[400px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {TeamData.slice(0, displayCount).map((person) => (
          <TeamCard
            key={person.id} // Add key prop for each mapped item
            name={person.name}
            title={person.jobTitle}
            imageUrl={person.imgUrl}
            description={person.description}
          />
        ))}
      </div>
      <div className="mt-8 lg:flex lg:justify-end">
        <Button text="See all team" />
      </div>
    </div>
  )
}

export default Team
