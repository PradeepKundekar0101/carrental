import { CalendarIcon, MapPinIcon, X, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Filter = () => {
  const [location, setLocation] = useState("308 General Avenue, New York, USA");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:00");
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  const handleDateSelect = (date: Date, isStart: boolean) => {
    if (isStart) {
      setStartDate(date);
      setStartOpen(false);
    } else {
      setEndDate(date);
      setEndOpen(false);
    }
  };
  return (
    <Card className="w-full max-w-lg mx-auto lg:mx-0 border-0 shadow-none">
      <CardContent className="py-4 md:py-6 space-y-4 md:space-y-5 p-0">
        <div className="relative group">
          <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors z-10 " />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 pr-10 py-5 md:py-8 w-full border-2 rounded-full hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            placeholder="Where do you want to pick up your car?"
          />
          {location && (
            <button
              onClick={() => setLocation("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-2">
          <div className="flex flex-1">
            <Popover open={startOpen} onOpenChange={setStartOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 justify-start text-left font-normal border-2 border-r-0 rounded-l-full rounded-r-none py-5 md:py-8 hover:border-gray-300 hover:bg-white focus:ring-2 focus:ring-primary/20"
                >
                  <CalendarIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 text-sm ml-2">
                    {startDate.toLocaleDateString()}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-2">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => date && handleDateSelect(date, true)}
                  className="rounded-lg border-0"
                  classNames={{
                    day_selected:
                      "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>

            <Select value={startTime} onValueChange={setStartTime}>
              <SelectTrigger className="w-1/2 border-2 border-l-[0.5px] rounded-l-none rounded-r-full py-5 md:py-8 hover:border-gray-300 hover:bg-white focus:ring-2 focus:ring-primary/20">
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-sm">{startTime}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="border-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <SelectItem
                    key={i}
                    value={`${String(i).padStart(2, "0")}:00`}
                    className="hover:text-primary focus:text-primary"
                  >
                    {`${String(i).padStart(2, "0")}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-1">
            <Popover open={endOpen} onOpenChange={setEndOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 justify-start text-left font-normal border-2 border-r-0 rounded-l-full rounded-r-none py-5 md:py-8 hover:border-gray-300 hover:bg-white focus:ring-2 focus:ring-primary/20"
                >
                  <CalendarIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 text-sm ml-2">
                    {endDate.toLocaleDateString()}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-2">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => date && handleDateSelect(date, false)}
                  classNames={{
                    day_selected:
                      "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>

            <Select value={endTime} onValueChange={setEndTime}>
              <SelectTrigger className="w-1/2 border-2 border-l-[0.5px] rounded-l-none rounded-r-full py-5 md:py-8 hover:border-gray-300 hover:bg-white focus:ring-2 focus:ring-primary/20">
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-sm">{endTime}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="border-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <SelectItem
                    key={i}
                    value={`${String(i).padStart(2, "0")}:00`}
                    className="hover:text-primary focus:text-primary"
                  >
                    {`${String(i).padStart(2, "0")}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Link to="/searchCar" className="block mt-4 md:mt-0">
          <Button className="w-full py-5 md:py-8 text-lg md:text-xl bg-primary hover:bg-primaryDark text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]">
            Search
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Filter;
