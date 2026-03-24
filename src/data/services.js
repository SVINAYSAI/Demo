export const services = [
  {
    id: 1,
    title: 'Haircut & Styling',
    description: 'Precision cuts and creative styling by our master stylists. From classic looks to modern trends.',
    price: 45,
    duration: '45 min',
    image: '/images/salon_styling.png',
    category: 'Hair',
    featured: true,
    popular: true
  },
  {
    id: 2,
    title: 'Hair Coloring',
    description: 'Full spectrum of coloring services including balayage, highlights, ombre, and vivid colors.',
    price: 120,
    duration: '2-3 hrs',
    image: '/images/salon_coloring.png',
    category: 'Hair',
    featured: true,
    popular: true
  },
  {
    id: 3,
    title: 'Beard Grooming',
    description: 'Professional beard trimming, shaping, and hot towel treatment for the modern gentleman.',
    price: 35,
    duration: '30 min',
    image: '/images/salon_beard.png',
    category: 'Grooming',
    featured: true,
    popular: false
  },
  {
    id: 4,
    title: 'Luxury Facial',
    description: 'Deep cleansing facial with premium products, massage, and rejuvenating mask treatment.',
    price: 85,
    duration: '60 min',
    image: '/images/salon_facial.png',
    category: 'Skincare',
    featured: true,
    popular: true
  },
  {
    id: 5,
    title: 'Nail Art & Manicure',
    description: 'Express your style with our nail art services. Gel, acrylic, and classic manicure options.',
    price: 55,
    duration: '45 min',
    image: '/images/salon_nails.png',
    category: 'Nails',
    featured: true,
    popular: false
  },
  {
    id: 6,
    title: 'Bridal Package',
    description: 'Complete bridal makeover including hair, makeup, nails, and skin prep for your special day.',
    price: 350,
    duration: '4-5 hrs',
    image: '/images/salon_styling.png',
    category: 'Packages',
    featured: false,
    popular: true
  },
  {
    id: 7,
    title: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair for months with our premium keratin smoothing treatment.',
    price: 200,
    duration: '2-3 hrs',
    image: '/images/salon_coloring.png',
    category: 'Hair',
    featured: false,
    popular: false
  },
  {
    id: 8,
    title: 'Spa Pedicure',
    description: 'Relaxing foot soak, exfoliation, massage, and perfect polish in our luxury spa chairs.',
    price: 65,
    duration: '50 min',
    image: '/images/salon_nails.png',
    category: 'Nails',
    featured: false,
    popular: false
  }
];

export const teamMembers = [
  {
    name: 'Stylist A.',
    role: 'Master Stylist',
    specialty: 'Creative Cuts & Color',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80'
  },
  {
    name: 'Barber B.',
    role: 'Senior Barber',
    specialty: 'Classic & Modern Fades',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Colorist C.',
    role: 'Color Specialist',
    specialty: 'Balayage & Vivid Colors',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  },
  {
    name: 'Expert D.',
    role: 'Skincare Expert',
    specialty: 'Facials & Treatments',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  }
];

export const testimonials = [
  {
    name: 'Client A.',
    role: 'Regular Client',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote: 'The best salon experience I\'ve ever had! My hair was transformed completely. The atmosphere is so relaxing and luxurious.',
    rating: 5
  },
  {
    name: 'Client B.',
    role: 'Loyal Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: 'The cleanest fades in town. The attention to detail and the premium grooming products they use are top-notch.',
    rating: 5
  },
  {
    name: 'Client C.',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote: 'My bridal package was absolutely perfect. Every detail was taken care of. I felt like a queen on my special day!',
    rating: 5
  }
];

export const formatPrice = (price) => `₹${price.toLocaleString()}`;
