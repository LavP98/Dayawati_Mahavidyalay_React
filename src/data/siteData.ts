export interface CarouselImage {
  id: number
  imgName: string
  imgUrl: string
}

export interface CourseDetail {
  courseName: string
  displayName: string
  duration: string
  subjects: string[] | null
}

export interface QuickLink {
  name: string
  link: string
}

export interface NavItem {
  name: string
  navItem: string
}

export const carouselImages: CarouselImage[] = [
  { id: 3, imgName: 'founder-phone', imgUrl: '/assets/carousel_pics/founder_phone.JPG' },
  { id: 1, imgName: 'college-entrance', imgUrl: '/assets/carousel_pics/main_college.jpeg' },
  { id: 2, imgName: 'classroom', imgUrl: '/assets/carousel_pics/classroom.jpeg' },
  { id: 4, imgName: 'classroom2', imgUrl: '/assets/carousel_pics/classroom2.jpeg' },
  { id: 5, imgName: 'college-front', imgUrl: '/assets/carousel_pics/college-front.jpeg' },
  { id: 6, imgName: 'college2', imgUrl: '/assets/carousel_pics/college2.jpeg' },
  { id: 7, imgName: 'library', imgUrl: '/assets/carousel_pics/library.jpeg' },
  { id: 8, imgName: 'night-view', imgUrl: '/assets/carousel_pics/night-view.jpeg' },
  { id: 9, imgName: 'advertise', imgUrl: '/assets/carousel_pics/advertise.jpg' },
  { id: 10, imgName: 'night-view-2', imgUrl: '/assets/carousel_pics/night-view-2.jpeg' },
  { id: 11, imgName: 'phone-banner-1', imgUrl: '/assets/carousel_pics/phone-banner-1.jpeg' },
  { id: 12, imgName: 'phone-group-1', imgUrl: '/assets/carousel_pics/phone-group-1.jpeg' },
  { id: 13, imgName: 'phone-group-2', imgUrl: '/assets/carousel_pics/phone-group-2.jpeg' },
  { id: 14, imgName: 'phone-group-boys', imgUrl: '/assets/carousel_pics/phone-group-boys.jpeg' },
]

export const courseDetails: CourseDetail[] = [
  {
    courseName: 'BA',
    displayName: 'BA',
    duration: '3 Years, 6 Semesters',
    subjects: ['Hindi', 'English', 'Sanskrit', 'Geography', 'Home Science', 'Sociology', 'Education'],
  },
  {
    courseName: 'BSc',
    displayName: 'BSc',
    duration: '3 years, 6 semesters',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Zoology', 'Botany'],
  },
  {
    courseName: 'BSc Agriculture',
    displayName: 'BSc Agriculture (Honours)',
    duration: '4 years, 8 semesters',
    subjects: null,
  },
]

export const quickLinks: QuickLink[] = [
  {
    name: 'Online Registration For Generating Unique Identification Number (UIN)',
    link: 'http://www.rmlau.site/',
  },
  {
    name: 'Examination Form',
    link: 'https://rmlauexams.co.in/',
  },
  {
    name: 'Result/ Marksheet',
    link: 'http://results.rmlauexams.in/Marks_Sheet/main.aspx',
  },
  {
    name: 'Online Application for Degree, Provisional, Duplicate Marksheet & Migration',
    link: 'http://www.rmlau.info/Provisional/',
  },
]

export const navItems: NavItem[] = [
  { name: 'Courses', navItem: 'courses' },
  { name: 'Quick Links', navItem: 'quick-links' },
  { name: 'Contact Us', navItem: 'contact_us' },
]

export const visionMissionCards = [
  {
    title: 'Vision',
    content:
      'Dayawati Mahavidyalay will excel in providing quality education to become renowned institute in Ayodhya.',
  },
  {
    title: 'Mission',
    content:
      'To provide good infrastructure and right guidance for developing professional skills as well as an environment for growth of students which will make them industry ready.',
  },
  {
    title: 'Beliefs',
    content: [
      { quote: 'Arise, awake and stop not until the goal is reached.', author: 'Swami Vivekananda' },
      { quote: 'Work is worship.', author: 'Anonymous' },
    ],
  },
]

export const contactInfo = {
  address: 'Dayawati Mahavidyalay, Near mahawan chauraha, Mahawan Motinagar, Masodha, Ayodhya - 224201.',
  phones: ['+91 - 8090365644', '+91 - 8090076111'],
  email: 'dayawatimahavidyalay@gmail.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.9508999569042!2d82.11129934221752!3d26.718720655543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc68ef3acfa73e147!2zMjbCsDQzJzA2LjUiTiA4MsKwMDYnNDIuNSJF!5e0!3m2!1sen!2sin!4v1653139359078!5m2!1sen!2sin',
}

export const pamphletUrl = '/assets/pamphlet/college_pamphlet.jpeg'
export const logoUrl = '/assets/images/logo final.JPG'
