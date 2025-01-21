import { CarListing } from "@/types/types";
import { CarCard } from "./CarCard";

export default function CarsSection({ mockCarListings }: { mockCarListings: CarListing[] }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">
        40 results out of 74
      </h2>
      <div className="space-y-4 pb-8">
        {mockCarListings.map((car: CarListing) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
