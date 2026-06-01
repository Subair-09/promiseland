import { AcademicLevel, Benefit, Stat, Facility, GalleryItem, Testimonial } from './types';

export const SCHOOL_INFO = {
  name: 'Promiseland Schools',
  motto: 'Building Tomorrow\'s Leaders Today',
  address: '3, Adeola Makinde Way, Off Ademoye, Ile-Epo Bus Stop, Arida Ikotun, Lagos, Nigeria',
  phones: ['08058283202', '08023154768'],
  email: 'admissions@promiselandschools.edu.ng',
  whatsappNumber: '2348058283202', // International format for WhatsApp links
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8821935703883!2d3.2683!3d6.5369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85eceaaaaaaa%3A0xdeadbeef!2sAdeola%20Makinde%20Way%2C%20Arida%20Ikotun%2C%20Lagos!5e0!3m2!1sen!2sng!4v1654032400000!5m2!1sen!2sng',
};

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: 'creche',
    name: 'Creche',
    ageRange: '3 Months – 18 Months',
    description: 'A loving, safe, and sensory-rich haven for your precious little ones. Our dedicated caregivers treat every infant with the utmost tenderness, mirroring the warmth and security of home.',
    curriculum: [
      'Sensory & Motor Development',
      'Infant Cognitive Stimulation',
      'Gentle Music & Storytelling',
      'Nurturing Safe Sleep Spaces',
      'Individual Health & Feeding Logs'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nursery',
    name: 'Nursery School',
    ageRange: '1.5 Years – 5 Years',
    description: 'Forging a beautiful start to early literacy, critical thinking, and social growth. We blend the world-class Montessori pathway with standard play-based cognitive development.',
    curriculum: [
      'Jolly Phonics & Letter Sounds',
      'Numeracy & Quantitative Skills',
      'Pre-Science & Sensory Labs',
      'Montessori Practical Life Activities',
      'Interactive Arts & Socialization'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'primary',
    name: 'Primary School',
    ageRange: '5 Years – 11 Years',
    description: 'Nurturing sound analytical intellect while fostering confidence and leadership. Our primary core equips scholars for top-tier achievements in cognitive exams and cultural depth.',
    curriculum: [
      'English Language & Creative Writing',
      'Mathematics & Quantitative Aptitude',
      'Basic Science & Technology Labs',
      'Civic Education & Leadership Foundations',
      'French, Diction & Musical Mastery'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'college',
    name: 'Secondary School (College)',
    ageRange: '11 Years – 17 Years',
    description: 'Preparing disciplined, ambitious scholars for WAEC, JAMB, top global universities, and outstanding corporate or engineering career callings in the outside world.',
    curriculum: [
      'Advanced STEM (Physics, Chemistry, Biology)',
      'Information & Coding Tech (Python & Web Development)',
      'Humanities, Accounting & Financial Literacy',
      'Intensive WAEC, NECO & JAMB Preparations',
      'Debating Society & Public Speaking Masterclass'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'gov-approved',
    title: 'Government Approved',
    description: 'Fully certified and vetted by the Lagos State Ministry of Education for legal, top-caliber curriculum implementation.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'waec-approved',
    title: 'WAEC Approved',
    description: 'Authorized national center for West African Examinations Council (WAEC & NECO) with impeccable integrity and performance track records.',
    iconName: 'Award'
  },
  {
    id: 'teachers',
    title: 'Experienced Educators',
    description: 'Our passionate, licensed faculties possess decades of combined experience, providing personalized mentorship.',
    iconName: 'Users'
  },
  {
    id: 'safe-env',
    title: 'Safe Learning Habitat',
    description: 'Monitored layouts, strict entry-exit screening protocols, and continuous medical-grade sanitation.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'facilities',
    title: 'Modern Classrooms',
    description: 'Fully optimized digital lecture spaces, robust laboratories, and smart teaching boards.',
    iconName: 'School'
  },
  {
    id: 'achievement',
    title: 'Academic Excellence',
    description: 'Consistently high passing grades in regional exams, and standard scholarships for university pathways.',
    iconName: 'GraduationCap'
  },
  {
    id: 'leadership',
    title: 'Leadership Focus',
    description: 'Active prefect regimes, debate commands, and civic leadership drills ensuring dependable character.',
    iconName: 'Compass'
  },
  {
    id: 'extracurricular',
    title: 'Rich Extracurriculars',
    description: 'Football leagues, chess clubs, drama societies, robotics groups, and traditional cultural festivals.',
    iconName: 'Dribbble'
  }
];

export const STATS: Stat[] = [
  { id: 'students', value: 1000, suffix: '+', label: 'Scholars enrolled' },
  { id: 'teachers', value: 50, suffix: '+', label: 'Experienced educators' },
  { id: 'years', value: 15, suffix: '+', label: 'Years of noble excellence' },
  { id: 'satisfaction', value: 95, suffix: '%', label: 'Parent trust index' }
];

export const FACILITIES: Facility[] = [
  {
    id: 'science-lab',
    name: 'Science Laboratory',
    description: 'Equipped with contemporary glassware, microscopes, and chemical kits enabling secure hands-on physics, chemistry, and biology research.',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    iconName: 'Beaker'
  },
  {
    id: 'ict-lab',
    name: 'ICT Computer Laboratory',
    description: 'Equipped with high-performance desktop computers and high-speed broadband, training students in programming, digital literacy, and logic.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    iconName: 'Laptop'
  },
  {
    id: 'library',
    name: 'Nurturing Library',
    description: 'An expansive archive spanning foundational encyclopedias, West African poetry, global historical records, and digitized portals.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    iconName: 'BookOpen'
  },
  {
    id: 'sports',
    name: 'Athletic Yards',
    description: 'Lush athletic tracks, safe basketball playgrounds, and standard grass soccer facilities ensuring strong physical balance and camaraderie.',
    imageUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=800',
    iconName: 'Trophy'
  },
  {
    id: 'smart-rooms',
    name: 'Smart Classrooms',
    description: 'Equipped with smart projection arrays, crisp audio setups, and climate cooling to maintain superb mental focus.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    iconName: 'Tv'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Focused Scholars in Science Lab',
    category: 'Science Projects',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Pre-School Practical Learning Session',
    category: 'Classroom Activities',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Outstanding Graduation Day Celebrations',
    category: 'Graduation',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Inter-House Sports Champions',
    category: 'Sports Day',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Annual Cultural Heritage Presentation',
    category: 'Cultural Day',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Robotics Exhibition & Presentation',
    category: 'School Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    title: 'Collaborative Study in High School Library',
    category: 'Classroom Activities',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    title: 'Nursery Creative Sandbox Arts',
    category: 'Classroom Activities',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Enrolling our children in Promiseland Schools was the finest educational investment we have made. The discipline, the moral counseling, and the stellar results in their WAEC preparation surpassed our expectations.',
    author: 'Mrs. Chioma Adeleke',
    role: 'Parent (College & Primary scholars)',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    quote: 'At Promiseland, teachers do not merely teach for examinations; they mold standard leaders. I moved from struggling in chemistry to winning the regional inter-school quiz tournament, thanks to the continuous laboratory drills.',
    author: 'Tobi Babalola',
    role: 'Alumni, Class of 2024 (Now studying Medicine)',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    quote: 'Promiseland nursery and creche caregivers are incredibly warm and vigilant. I receive continuous updates on my baby\'s health and milestones, giving me extreme peace of mind while at work. The Jolly Phonics program is fantastic!',
    author: 'Dr. Funmi Alao',
    role: 'Parent (Creche & Nursery scholars)',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  }
];
