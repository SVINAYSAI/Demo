// Property listings data
export const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    city: "Miami",
    state: "FL",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Stunning modern apartment in the heart of downtown with city views.",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Beach House",
    price: 1250000,
    city: "Miami",
    state: "FL",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "House",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "Spectacular beachfront property with private access to the ocean.",
    featured: true
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    price: 385000,
    city: "Austin",
    state: "TX",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "House",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    description: "Charming family home in a quiet suburban neighborhood.",
    featured: true
  },
  {
    id: 4,
    title: "Penthouse Suite",
    price: 2100000,
    city: "New York",
    state: "NY",
    beds: 3,
    baths: 3,
    sqft: 2200,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Exclusive penthouse with panoramic skyline views.",
    featured: true
  },
  {
    id: 5,
    title: "Modern Loft",
    price: 675000,
    city: "Los Angeles",
    state: "CA",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description: "Industrial-style loft in the arts district.",
    featured: false
  },
  {
    id: 6,
    title: "Mediterranean Villa",
    price: 1850000,
    city: "Los Angeles",
    state: "CA",
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Elegant Mediterranean-style villa with pool and garden.",
    featured: true
  },
  {
    id: 7,
    title: "Urban Townhouse",
    price: 550000,
    city: "Chicago",
    state: "IL",
    beds: 3,
    baths: 2,
    sqft: 1900,
    type: "Townhouse",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    description: "Contemporary townhouse near downtown amenities.",
    featured: false
  },
  {
    id: 8,
    title: "Seaside Condo",
    price: 720000,
    city: "San Diego",
    state: "CA",
    beds: 2,
    baths: 2,
    sqft: 1100,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Beautiful condo with ocean views and beach access.",
    featured: true
  },
  {
    id: 9,
    title: "Mountain Retreat",
    price: 890000,
    city: "Denver",
    state: "CO",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    description: "Scenic mountain home with breathtaking views.",
    featured: false
  },
  {
    id: 10,
    title: "Historic Brownstone",
    price: 1350000,
    city: "Boston",
    state: "MA",
    beds: 4,
    baths: 3,
    sqft: 2600,
    type: "Townhouse",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    description: "Beautifully restored historic brownstone in prime location.",
    featured: true
  },
  {
    id: 11,
    title: "Downtown Studio",
    price: 320000,
    city: "Seattle",
    state: "WA",
    beds: 1,
    baths: 1,
    sqft: 650,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    description: "Modern studio apartment in vibrant downtown area.",
    featured: false
  },
  {
    id: 12,
    title: "Lakefront Estate",
    price: 1650000,
    city: "Austin",
    state: "TX",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Magnificent lakefront estate with private dock.",
    featured: true
  }
];

// Budget ranges for filtering
export const budgetRanges = {
  buy: [
    { label: "$200k - $500k", min: 200000, max: 500000 },
    { label: "$500k - $1M", min: 500000, max: 1000000 },
    { label: "$1M+", min: 1000000, max: Infinity }
  ],
  rent: [
    { label: "$1,000 - $2,000", min: 1000, max: 2000 },
    { label: "$2,000 - $4,000", min: 2000, max: 4000 },
    { label: "$4,000+", min: 4000, max: Infinity }
  ]
};

// Property types
export const propertyTypes = ["Apartment", "House", "Villa", "Townhouse"];

// Bedroom options
export const bedroomOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4+", value: 4 }
];

// Cities available
export const availableCities = ["Miami", "New York", "Los Angeles", "Chicago", "Austin", "San Diego", "Denver", "Boston", "Seattle"];

// Filter properties based on criteria
export function filterProperties(criteria) {
  return properties.filter(property => {
    // Filter by city (case insensitive)
    if (criteria.city && !property.city.toLowerCase().includes(criteria.city.toLowerCase())) {
      return false;
    }

    // Filter by budget
    if (criteria.budget) {
      const { min, max } = criteria.budget;
      if (property.price < min || property.price > max) {
        return false;
      }
    }

    // Filter by property type
    if (criteria.type && property.type !== criteria.type) {
      return false;
    }

    // Filter by bedrooms
    if (criteria.beds) {
      if (criteria.beds === 4) {
        // 4+ means 4 or more bedrooms
        if (property.beds < 4) return false;
      } else if (property.beds !== criteria.beds) {
        return false;
      }
    }

    return true;
  });
}

// Format price for display
export function formatPrice(price) {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(2)}M`;
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}k`;
  }
  return `$${price}`;
}
