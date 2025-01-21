export const mockCarListings = [
  {
    id: 1,
    model: "Tesla Model 3",
    year: 2022,
    type: "INSTANT_BOOK",
    rating: 4.89,
    reviews: 156,
    distance: "1.2 mi",
    originalPrice: 189,
    discountedPrice: 159,
    duration: "1 day minimum",
    imageUrl: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
    location: "Manhattan, NY",
    coordinates: {
      latitude: 40.7589,
      longitude: -73.9851
    },
    features: ["Electric", "Autopilot", "Premium Sound", "Supercharger access"],
    category: "Electric"
  },
  {
    id: 2,
    model: "BMW X5",
    year: 2021,
    type: "MEET_OWNER",
    rating: 4.75,
    reviews: 89,
    distance: "2.8 mi",
    originalPrice: 245,
    discountedPrice: 210,
    duration: "3 days minimum",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    location: "Brooklyn, NY",
    coordinates: {
      latitude: 40.6782,
      longitude: -73.9442
    },
    features: ["Leather seats", "Panoramic roof", "360 camera", "Heated seats"],
    category: "Luxury"
  },
  {
    id: 3,
    model: "Honda CR-V",
    year: 2020,
    type: "GETAROUND_CONNECT",
    rating: 4.92,
    reviews: 203,
    distance: "0.8 mi",
    originalPrice: 135,
    discountedPrice: 115,
    duration: "1 day minimum",
    imageUrl: "https://imgd.aeplcdn.com/600x337/cw/ec/42358/Honda-CRV-Exterior-170860.jpg?wm=1&q=75",
    location: "Queens, NY",
    coordinates: {
      latitude: 40.7282,
      longitude: -73.7949
    },
    features: ["All-wheel drive", "Backup camera", "Apple CarPlay", "Bluetooth"],
    category: "SUV"
  },
  {
    id: 4,
    model: "Toyota Sienna",
    year: 2021,
    type: "INSTANT_BOOK",
    rating: 4.85,
    reviews: 167,
    distance: "3.1 mi",
    originalPrice: 165,
    discountedPrice: 140,
    duration: "2 days minimum",
    imageUrl: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    location: "Bronx, NY",
    coordinates: {
      latitude: 40.8448,
      longitude: -73.8648
    },
    features: ["8 seats", "Sliding doors", "DVD player", "Cargo space"],
    category: "Van"
  },
  {
    id: 5,
    model: "Ford F-150",
    year: 2022,
    type: "MEET_OWNER",
    rating: 4.78,
    reviews: 92,
    distance: "4.2 mi",
    originalPrice: 195,
    discountedPrice: 175,
    duration: "2 days minimum",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    location: "Staten Island, NY",
    coordinates: {
      latitude: 40.5795,
      longitude: -74.1502
    },
    features: ["Crew cab", "Bed liner", "Tow package", "4x4"],
    category: "Truck"
  },
  {
    id: 6,
    model: "Mercedes-Benz E-Class",
    year: 2021,
    type: "GETAROUND_CONNECT",
    rating: 4.95,
    reviews: 145,
    distance: "1.5 mi",
    originalPrice: 275,
    discountedPrice: 235,
    duration: "2 days minimum",
    imageUrl: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb",
    location: "Manhattan, NY",
    coordinates: {
      latitude: 40.7831,
      longitude: -73.9712
    },
    features: ["Premium audio", "Driver assistance", "Leather interior", "Ambient lighting"],
    category: "Luxury"
  },
  {
    id: 7,
    model: "Chevrolet Bolt",
    year: 2022,
    type: "INSTANT_BOOK",
    rating: 4.87,
    reviews: 178,
    distance: "2.3 mi",
    originalPrice: 145,
    discountedPrice: 125,
    duration: "1 day minimum",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1m_aj2aZEwIu7wur3zOGgvPtCqRav3X9ew&s",
    location: "Brooklyn, NY",
    coordinates: {
      latitude: 40.6892,
      longitude: -73.9821
    },
    features: ["Electric", "Fast charging", "One-pedal driving", "Android Auto"],
    category: "Electric"
  },
  {
    id: 8,
    model: "Toyota Camry",
    year: 2021,
    type: "GETAROUND_CONNECT",
    rating: 4.83,
    reviews: 234,
    distance: "1.7 mi",
    originalPrice: 125,
    discountedPrice: 105,
    duration: "1 day minimum",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
    location: "Queens, NY",
    coordinates: {
      latitude: 40.7505,
      longitude: -73.8854
    },
    features: ["Fuel efficient", "Safety sense", "Lane assist", "Bluetooth"],
    category: "Sedan"
  }
];

export const filterOptions = {
  priceRanges: [
    "Under $100",
    "$100 - $150",
    "$150 - $200",
    "$200 - $250",
    "Over $250"
  ],
  vehicleTypes: [
    "All vehicles",
    "Electric",
    "Luxury",
    "SUV",
    "Sedan",
    "Truck",
    "Van"
  ],
  pickupMethods: [
    "All methods",
    "INSTANT_BOOK",
    "GETAROUND_CONNECT",
    "MEET_OWNER"
  ],
  features: [
    "All-wheel drive",
    "Bluetooth",
    "Backup camera",
    "Leather seats",
    "Navigation",
    "Electric",
    "Premium audio",
    "Heated seats"
  ],
  sortBy: [
    "Price: Low to High",
    "Price: High to Low",
    "Distance",
    "Rating",
    "Most reviewed"
  ]
};

export const mapBounds = {
  northEast: { lat: 40.9176, lng: -73.7004 },
  southWest: { lat: 40.4774, lng: -74.2591 }
};