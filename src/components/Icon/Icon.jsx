// src/components/Icon/Icon.jsx
// Ikona z biblioteki lucide wybierana po nazwie (np. "Users"), żeby w plikach z danymi
// (src/data/*.js) można było wpisać nazwę ikony jako zwykły tekst.
// Importujemy tylko ikony z listy poniżej - do strony trafia wyłącznie ich kod.
import React from 'react';
import {
  Activity,
  ArrowRight,
  ClipboardList,
  FileText,
  Hammer,
  HeartHandshake,
  House,
  Mail,
  MapPin,
  MessageCircleHeart,
  MessagesSquare,
  Phone,
  School,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const icons = {
  Activity,
  ArrowRight,
  ClipboardList,
  FileText,
  Hammer,
  HeartHandshake,
  House,
  Mail,
  MapPin,
  MessageCircleHeart,
  MessagesSquare,
  Phone,
  School,
  Sparkles,
  Target,
  Users,
};

export default function Icon({ name, size = 24, ...props }) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component size={size} strokeWidth={1.75} aria-hidden="true" {...props} />;
}
