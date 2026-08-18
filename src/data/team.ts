// @ts-ignore
import vivekImg from '/vivek.png'
// @ts-ignore
import neeleshImg from '/neelesh.png'
// @ts-ignore
import sofiaImg from '/sofia.png'
// @ts-ignore
import kylerImg from '/kyler.png'
// @ts-ignore
import colinImg from '/colin.png'
// @ts-ignore
import rosenthalImg from '/rosenthal.png'
// @ts-ignore
import krystalImg from '/krystal.png'
// @ts-ignore
import paltielImg from '/paltiel.png'
// @ts-ignore
import gliedImg from '/glied.png'
// @ts-ignore
import seanImg from '/sean.jpg'
// @ts-ignore
import emmaImg from '/emma.jpeg'
// @ts-ignore
import srishtiImg from '/srishti.png'

export interface TeamMember {
  name: string
  role: string
  affiliation?: string
  image?: string
}

export const leadership: TeamMember[] = [
  { name: 'Vivek Malik', role: 'Co-President', image: vivekImg },
  { name: 'Neelesh Pandey', role: 'Co-President', image: neeleshImg },
  { name: 'Sofia Grimm', role: 'Vice President of Consulting', image: sofiaImg },
  { name: 'Kyler Parker', role: 'Vice President of Operations', image: kylerImg },
  { name: 'Colin George', role: 'Vice President of External Affairs', image: colinImg },
]

export const board: TeamMember[] = [
  { name: 'Nadia Bakhtari', role: 'Co-Director of Outreach' },
  { name: 'Leo Chung', role: 'Co-Director of Outreach' },
  { name: 'Usman Khalid', role: 'Director of Finance' },
  { name: 'Holly Tran', role: 'Co-Director of Membership' },
  { name: 'Emma Lee', role: 'Co-Director of Membership', image: emmaImg },
  { name: 'Srishti Swaminathan', role: 'Director of Communications', image: srishtiImg },
  { name: 'Sean Yu', role: 'Director of Research', image: seanImg },
]

export const advisors: TeamMember[] = [
  { name: 'David Rosenthal, MD', role: 'Associate Professor of Medicine', affiliation: 'Yale School of Medicine', image: rosenthalImg },
  { name: 'John Krystal, MD', role: 'Professor of Psychiatry', affiliation: 'Yale School of Medicine', image: krystalImg },
  { name: 'A. David Paltiel, PhD, MBA', role: 'Professor of Public Health', affiliation: 'Yale School of Public Health', image: paltielImg },
  { name: 'Sherry Glied, PhD', role: 'Professor of Public Service', affiliation: 'New York University', image: gliedImg },
]
