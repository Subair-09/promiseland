export interface AcademicLevel {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  curriculum: string[];
  imageUrl: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatarUrl: string;
}

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  academicLevel: string;
  message?: string;
  status: 'Pending' | 'Contacted' | 'Approved';
  createdAt: string;
}

export interface TourBooking {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  studentCount: number;
  createdAt: string;
}
