export type CarListing = {
  id: number;
  model: string;
  year: number;
  type: string;
  rating: number;
  reviews: number;
  distance: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  imageUrl: string;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  features: string[];
  category: string;
};


export interface DateRange {
  start: string;
  end: string;
}

export interface FilterOptions {
  totalPrice: string;
  vehicleType: string;
  pickupMethod: string;
  moreFilters: boolean;
}


export type PasswordRequirements = {
  length: boolean;
  uppercase: boolean;
  number: boolean;
  special: boolean;
}

export type PasswordRequirementProps = {
  meets: boolean;
  label: string;
}
