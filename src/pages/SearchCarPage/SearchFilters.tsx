import React, { useState } from "react";
import { FilterOptions } from "../../types/types";
import {
  BabyIcon,
  Bike,
  ChevronDown,
  Minus,
  MoreHorizontal,
  Navigation,
  Plus,
  Snowflake,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const SearchFilters = () => {
  const [activeModal, setActiveModal] = useState<keyof FilterOptions | null>(
    null
  );
  const [priceValue, setPriceValue] = useState(1410);
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);
  const [seats, setSeats] = useState(1);
  const [buttonRefs] = useState<{
    [key: string]: React.RefObject<HTMLButtonElement>;
  }>({
    totalPrice: React.createRef(),
    vehicleType: React.createRef(),
    pickupMethod: React.createRef(),
    moreFilters: React.createRef(),
  });

  const handleModalToggle = (modalName: keyof FilterOptions) => {
    if (modalName === "moreFilters") {
      setMoreFiltersOpen(true);
      setActiveModal(null);
    } else {
      setActiveModal(activeModal === modalName ? null : modalName);
      setMoreFiltersOpen(false);
    }
  };

  const getModalPosition = (buttonName: string): React.CSSProperties => {
    const buttonEl = buttonRefs[buttonName]?.current;
    if (!buttonEl) return {};

    const rect = buttonEl.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.bottom + window.scrollY - 100,
    };
  };

  const handleReset = () => {
    setPriceValue(1410);
    setActiveModal(null);
    setMoreFiltersOpen(false);
  };

  const handleApply = () => {
    setActiveModal(null);
    setMoreFiltersOpen(false);
  };

  return (
    <div className="px-4 py-4 pt-4 bg-white border-b relative">
      <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
        <Button
          ref={buttonRefs.totalPrice}
          variant="outline"
          onClick={() => handleModalToggle("totalPrice")}
          className={`flex text-lg border-2 items-center gap-2 whitespace-nowrap text-primary ${
            activeModal === "totalPrice" ? "border-primaryDark" : ""
          }`}
        >
          Total price
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeModal === "totalPrice" ? "rotate-180" : ""
            }`}
          />
        </Button>

        <Button
          ref={buttonRefs.vehicleType}
          variant="outline"
          onClick={() => handleModalToggle("vehicleType")}
          className={`flex text-lg border-2 items-center gap-2 whitespace-nowrap text-primary ${
            activeModal === "vehicleType" ? "border-primaryDark" : ""
          }`}
        >
          Vehicle type
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeModal === "vehicleType" ? "rotate-180" : ""
            }`}
          />
        </Button>

        <Button
          ref={buttonRefs.pickupMethod}
          variant="outline"
          onClick={() => handleModalToggle("pickupMethod")}
          className={`flex text-lg border-2 items-center gap-2 whitespace-nowrap text-primary ${
            activeModal === "pickupMethod" ? "border-primaryDark" : ""
          }`}
        >
          Pickup method
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeModal === "pickupMethod" ? "rotate-180" : ""
            }`}
          />
        </Button>

        <Button
          ref={buttonRefs.moreFilters}
          variant="outline"
          onClick={() => handleModalToggle("moreFilters")}
          className={`flex text-lg border-2 items-center gap-2 whitespace-nowrap text-primary`}
        >
          More filters
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              moreFiltersOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {activeModal === "totalPrice" && (
        <div
          className="absolute mt-2 bg-white rounded-lg shadow-lg p-4 w-72 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200"
          style={getModalPosition("totalPrice")}
        >
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">TOTAL PRICE</h3>
            <p className="text-base text-gray-600">
              less than ${priceValue.toLocaleString()}
            </p>
            <Slider
              value={[priceValue]}
              onValueChange={(values) => setPriceValue(values[0])}
              max={2000}
              step={10}
              className="mt-4"
            />
          </div>
          <div className="flex justify-between gap-2">
            <Button variant="outline" onClick={handleReset} className="flex-1">
              Reset
            </Button>
            <Button
              onClick={handleApply}
              className="flex-1 bg-primary hover:bg-primaryDark text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      {activeModal === "vehicleType" && (
        <div
          className="absolute mt-1 bg-white rounded-lg shadow-lg p-4 z-50 w-[500px] animate-in fade-in-0 slide-in-from-top-2 duration-200"
          style={getModalPosition("vehicleType")}
        >
          <h3 className="text-xl font-medium mb-4">VEHICLE TYPE</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "🚚", label: "Commercial" },
              { icon: "🚗", label: "City" },
              { icon: "🚘", label: "Sedan" },
              { icon: "🚙", label: "Family" },
              { icon: "🚐", label: "Minibus" },
              { icon: "🚙", label: "4x4" },
              { icon: "🚗", label: "Convertible" },
              { icon: "🚗", label: "Coupe" },
              { icon: "🚗", label: "Antique" },
              { icon: "🚐", label: "Campervan" },
              { icon: "🛻", label: "Pickup" },
              { icon: "🚙", label: "SUV" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex text-base items-center gap-2 px-3 py-2 rounded-full border hover:border-primary hover:text-primaryDark focus:border-primary transition-colors"
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              className="w-24"
              onClick={() => setActiveModal(null)}
            >
              Reset
            </Button>
            <Button
              className="w-24 bg-primary hover:bg-primaryDark text-white"
              onClick={() => setActiveModal(null)}
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      {activeModal === "pickupMethod" && (
        <div
          className="absolute mt-1 bg-white rounded-lg shadow-lg p-4 z-50 w-[400px] animate-in fade-in-0 slide-in-from-top-2 duration-200"
          style={getModalPosition("pickupMethod")}
        >
          <h3 className="text-xl font-medium mb-4">PICKUP METHOD</h3>
          <div className="flex flex-col gap-3">
            <button className="flex items-start gap-4 p-4 rounded-lg border hover:border-primaryDark focus:border-primaryDark transition-colors">
              <div className="bg-primaryLight p-2 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg text-left">
                  Getaround Connect
                </h4>
                <p className="text-base text-gray-500 text-left">
                  Self-service car. Unlock with your phone. Book instantly, even
                  last minute.
                </p>
              </div>
            </button>

            <button className="flex items-start gap-4 p-4 rounded-lg border hover:border-primaryDark focus:border-primaryDark transition-colors">
              <div className="bg-primary p-2 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg text-left">Meet owner</h4>
                <p className="text-base text-gray-500 text-left">
                  Collect the keys from the owner on the day of the rental.
                </p>
              </div>
            </button>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              className="w-24"
              onClick={() => setActiveModal(null)}
            >
              Reset
            </Button>
            <Button
              className="w-24 bg-primary hover:bg-primaryDark text-white"
              onClick={() => setActiveModal(null)}
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      <Dialog open={moreFiltersOpen} onOpenChange={setMoreFiltersOpen}>
        <DialogContent className="sm:max-w-[600px] animate-in fade-in-0 zoom-in-95 duration-200">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              More Filters
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto pr-6">
            {/* Instant Booking */}
            <div className="flex items-center justify-between py-4 border-b">
              <div>
                <h3 className="text-lg font-medium">Instant booking</h3>
                <p className="text-base text-gray-500">
                  Vehicles you can book without waiting for owner approval
                </p>
              </div>
              <Switch />
            </div>

            {/* Fuel Type */}
            <div className="py-4 border-b">
              <h3 className="font-medium mb-3">FUEL TYPE</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="electric" className="text-white" />
                  <label htmlFor="electric" className="text-sm">
                    Electric
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hybrid" className="text-white" />
                  <label htmlFor="hybrid" className="text-sm">
                    Hybrid
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="combustion" className="text-white" />
                  <label htmlFor="combustion" className="text-sm">
                    Combustion
                  </label>
                </div>
              </div>
            </div>

            {/* Number of Seats */}
            <div className="py-4 border-b flex justify-between">
              <h3 className="font-medium mb-3">NUMBER OF SEATS</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => seats > 1 && setSeats(seats - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg">{seats}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setSeats(seats + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* New Cars Only */}
            <div className="flex items-center justify-between py-4 border-b">
              <div>
                <h3 className="font-medium">New cars only</h3>
                <p className="text-sm text-gray-500">
                  Manufactured in the last 5 years
                </p>
              </div>
              <Switch />
            </div>

            {/* Features */}
            <div className="py-4 border-b">
              <h3 className="font-medium mb-3">FEATURES</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <BabyIcon className="h-4 w-4 mr-2" />
                  Child seat
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  GPS
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <Snowflake className="h-4 w-4 mr-2" />
                  Air conditioning
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <Bike className="h-4 w-4 mr-2" />
                  Bike rack
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <MoreHorizontal className="h-4 w-4" />
                  Show more
                </Button>
              </div>
            </div>

            {/* Car Make */}
            <div className="py-4 border-b">
              <h3 className="font-medium mb-3">CAR MAKE</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  Toyota
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  Chevrolet
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  Nissan
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  Jeep
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full focus:border-primary"
                >
                  <MoreHorizontal className="h-4 w-4" />
                  Show more
                </Button>
              </div>
            </div>

            {/* Transmission */}
            <div className="py-4 border-b">
              <h3 className="font-medium mb-3">TRANSMISSION</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <label htmlFor="all">All</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="manual" id="manual" />
                      <label htmlFor="manual">Manual only</label>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem value="automatic" id="automatic" />
                      <label htmlFor="automatic">Automatic only</label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Accept Rate */}
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="font-medium">Accept rate</h3>
                <p className="text-sm text-gray-500">Above 30%</p>
              </div>
              <Switch />
            </div>
          </div>

          <DialogFooter className="sm:justify-end mt-4 gap-2 border-t pt-4">
            <Button
              className="w-full bg-primary hover:bg-primaryDark text-white"
              onClick={() => setMoreFiltersOpen(false)}
            >
              Search
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchFilters;
