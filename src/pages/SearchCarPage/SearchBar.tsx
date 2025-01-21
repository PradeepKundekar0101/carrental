import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, X, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("07:00");
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
    <div className="bg-white pt-2">
      <div className="flex items-center gap-4 px-4">
        {/* Location Input */}
        <div className="w-[400px]">
          <div className="flex items-center border-2 rounded-md h-10 focus-within:border-primary">
            <MapPin className="text-primary w-4 h-4 ml-3" />
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none h-10 px-2 !text-[15px]"
              placeholder="Subway, West 50th Street, New York, NY, USA"
            />

            {location && (
              <X
                className="w-4 h-4 text-primary  cursor-pointer mr-3"
                onClick={() => setLocation("")}
              />
            )}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="flex gap-4">
          {/* Start Date and Time */}
          <div className="flex">
            <Popover open={startOpen} onOpenChange={setStartOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal border-2 border-r-0 rounded-l-md rounded-r-none h-10  hover:bg-white focus:ring-2 focus:ring-primary/20"
                >
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span className="text-gray-600 text-sm ml-2">{startDate.toLocaleDateString()}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-2">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => date && handleDateSelect(date, true)}
                  classNames={{
                    day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                  }}
                />
              </PopoverContent>
            </Popover>

            <Select value={startTime} onValueChange={setStartTime}>
              <SelectTrigger
                className="w-[120px] border-2 border-l-[0.5px] rounded-l-none rounded-r-md h-10  hover:bg-white focus:ring-2 focus:ring-primary/20"
              >
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{startTime}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="border-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <SelectItem
                    key={i}
                    value={`${String(i).padStart(2, '0')}:00`}
                    className="hover:text-primary focus:text-primary"
                  >
                    {`${String(i).padStart(2, '0')}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* End Date and Time */}
          <div className="flex">
            <Popover open={endOpen} onOpenChange={setEndOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal border-2 border-r-0 rounded-l-md rounded-r-none h-10  hover:bg-white focus:ring-2 focus:ring-primary/20"
                >
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span className="text-gray-600 text-sm ml-2">{endDate.toLocaleDateString()}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-2">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => date && handleDateSelect(date, false)}
                  classNames={{
                    day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                  }}
                />
              </PopoverContent>
            </Popover>

            <Select value={endTime} onValueChange={setEndTime}>
              <SelectTrigger
                className="w-[120px] border-2 border-l-[0.5px] rounded-l-none rounded-r-md h-10  hover:bg-white focus:ring-2 focus:ring-primary/20"
              >
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">{endTime}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="border-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <SelectItem
                    key={i}
                    value={`${String(i).padStart(2, '0')}:00`}
                    className="hover:text-primary focus:text-primary"
                  >
                    {`${String(i).padStart(2, '0')}:00`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
