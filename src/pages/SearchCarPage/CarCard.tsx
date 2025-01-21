import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { CarListing } from "../../types/types";

interface CarCardProps {
  car: CarListing;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <img
              src={car.imageUrl}
              alt={car.model}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="p-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  {car.model} ({car.year})
                </h3>
                <div className="text-sm text-primary font-medium mt-1">
                  {car.type}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 line-through">
                  ${car.originalPrice}
                </div>
                <div className="text-2xl font-bold">${car.discountedPrice}</div>
                <div className="text-sm text-gray-500">{car.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1">{car.rating}</span>
              </div>
              <span className="text-gray-500">({car.reviews})</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{car.distance}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
