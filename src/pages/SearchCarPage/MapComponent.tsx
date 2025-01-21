import { mockCarListings } from "../../mock/carMockData";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type {
  LatLngExpression,
  MapOptions,
  TileLayerOptions,
} from "@/types/leaflet";
import { CarListing } from "@/types/types";

interface MapProps extends MapOptions {
  center: LatLngExpression;
  zoom: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface TileLayerProps extends TileLayerOptions {
  url: string;
}

export default function MapComponent() {
  const defaultCenter: LatLngExpression = [40.7128, -74.006];
  const createPriceIcon = (price: number) => {
    return L.divIcon({
      className: "bg-transparent",
      html: `
      <div class="bg-primary text-white text-center border-2 border-white px-3 py-1 rounded-full shadow-lg text-sm font-semibold tracking-[1px]">
        $${price}
      </div>
      `,
      iconSize: [70, 30],
      iconAnchor: [30, 15],
    });
  };

  return (
    <div className="hidden lg:block w-1/2 mt-10">
      <div className="fixed w-[calc(50%-2rem)] h-[calc(100vh-13rem)] shadow-lg rounded-lg overflow-hidden">
        <MapContainer
          {...({
            center: defaultCenter,
            zoom: 10,
            style: { height: "100%", width: "100%" },
          } as MapProps)}
        >
          <TileLayer
            {...({
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            } as TileLayerProps)}
          />
          {mockCarListings.map((car: CarListing) => (
            <Marker
              key={car.id}
              position={
                [
                  car.coordinates.latitude,
                  car.coordinates.longitude,
                ] as LatLngExpression
              }
              icon={createPriceIcon(car.discountedPrice)}
              {...({} as any)}
            >
              <Popup>
                <div className="custom-popup p-1 max-w-sm">
                  <div className="max-w-sm">
                    <img
                      src={car.imageUrl}
                      alt={car.model}
                      className="w-full h-full object-cover rounded-lg mb-3"
                    />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">
                        {car.model} {car.year}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span>{car.rating}</span>
                        <span className="text-gray-500">
                          ({car.reviews} reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{car.location}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          ${car.discountedPrice}
                        </span>
                        {car.originalPrice > car.discountedPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${car.originalPrice}
                          </span>
                        )}
                        <span className="text-sm text-gray-600">
                          /{car.duration}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {car.distance} away
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
