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

export interface TeamMember {
  name: string
  role: string
  image?: string
}

export const leadership: TeamMember[] = [
  { name: 'Vivek Malik', role: 'President', image: vivekImg },
  { name: 'Neelesh Pandey', role: 'President', image: neeleshImg },
  { name: 'Sofia Grimm', role: 'Vice President', image: sofiaImg },
  { name: 'Kyler Parker', role: 'Vice President', image: kylerImg },
  { name: 'Colin George', role: 'Vice President', image: colinImg },
]

export const board: TeamMember[] = [
  { name: 'Nadia Bakhtari', role: 'Co-Director of Outreach' },
  { name: 'Leo Chung', role: 'Co-Director of Outreach' },
  { name: 'Usman Khalid', role: 'Director of Finance' },
  { name: 'Holly Tran', role: 'Co-Director of Membership' },
  { name: 'Emma Lee', role: 'Co-Director of Membership' },
  { name: 'Srishti Swaminathan', role: 'Director of Communications' },
  { name: 'Sean Yu', role: 'Director of Research' },
]
