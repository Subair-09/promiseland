import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  School,
  GraduationCap,
  Compass,
  Dribbble,
  Beaker,
  Laptop,
  BookOpen,
  Trophy,
  Tv,
  Phone,
  MapPin,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Plus,
  Check,
  ExternalLink,
  Star,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Send,
  Building
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  School,
  GraduationCap,
  Compass,
  Dribbble,
  Beaker,
  Laptop,
  BookOpen,
  Trophy,
  Tv,
  Phone,
  MapPin,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Plus,
  Check,
  ExternalLink,
  Star,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Send,
  Building
};

export const LucideIcon: React.FC<IconProps> = ({ name, size = 24, className, ...props }) => {
  const IconComponent = iconMap[name] || GraduationCap;
  return <IconComponent size={size} className={className} {...props} />;
};
