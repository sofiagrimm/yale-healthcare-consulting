export interface TeamMember {
  name: string
  role: string
  category: 'eboard' | 'board'
}

export const leadership: TeamMember[] = [
  { name: 'Gianna Thomas', role: 'President', category: 'eboard' },
  { name: 'Vivek Malik', role: 'Vice President', category: 'eboard' },
  { name: 'Neelesh Pandey', role: 'Vice President', category: 'eboard' },
  { name: 'Colin George', role: 'Client Relations Director', category: 'eboard' },
  { name: 'Kyler Parker', role: 'Executive Operations Director', category: 'eboard' },
  { name: 'Fariba Hossain', role: 'Chief of Staff', category: 'eboard' },
  { name: 'Usman Khalid', role: 'Director of Finances', category: 'eboard' },
  { name: 'Holly Tran', role: 'Research Project Manager', category: 'eboard' },
  { name: 'Leonardo Chung', role: 'Secretary', category: 'eboard' },
  { name: 'Emma Lee', role: 'Secretary', category: 'eboard' },
  { name: 'Grace Udoh', role: 'Outreach Director', category: 'eboard' },
  { name: 'Sofia Grimm', role: 'Client Lead', category: 'board' },
  { name: 'Donovan Brown', role: 'Client Lead', category: 'board' },
  { name: 'Hildana Kassa', role: 'Client Lead', category: 'board' },
  { name: 'Mira Lehman', role: 'Client Lead', category: 'board' },
]
