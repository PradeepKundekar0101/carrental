import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Camera, Info } from "lucide-react";
import { profileSchema } from "@/schemas/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  years,
  months,
  days,
  countries,
  languages,
  states,
} from "../../../mock/editProfileData";

type ProfileFormData = z.infer<typeof profileSchema>;

export default function EditProfile() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      lastName: "Lab",
      firstName: "Collaborators",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      setIsSubmitting(true);
      const formattedData = {
        ...data,
        birthDate: `${data.birthDate.year}-${data.birthDate.month}-${data.birthDate.day}`,
        licenseDate: `${data.licenseDate.year}-${data.licenseDate.month}-${data.licenseDate.day}`,
      };

      console.log("Formatted data for submission:", formattedData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 border-2 border-gray-100 rounded-xl px-5 py-5"
      >
        <Alert className="mb-6 flex border-l-4 border-primary">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Some of this information appear on your profile. Owners will access
            your profile when you send them a booking request. If you publish a
            car listing, your profile becomes public so that drivers can access
            a recap of your reviews.
          </AlertDescription>
        </Alert>

        {/* Photo Upload Section */}
        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Your photo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <label htmlFor="photo-upload" className="cursor-pointer group">
                <div className="h-24 w-24  rounded-sm bg-gray-100 flex flex-col items-center justify-center hover:bg-gray-200 transition-colors">
                  <Camera />
                  <span className="text-xs text-gray-500 ">Choose a photo</span>
                </div>
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photo-upload"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base">
                Last name
              </Label>
              <Input
                id="lastName"
                {...register("lastName")}
                className="text-base"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base">
                First name
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                className="text-base"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base">Birth date</Label>
              <div className="flex space-x-2">
                <Select
                  onValueChange={(value) => setValue("birthDate.year", value)}
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year.toString()}
                        className="text-base"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(value) => setValue("birthDate.month", value)}
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem
                        key={month}
                        value={(index + 1).toString().padStart(2, "0")}
                        className="text-base"
                      >
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(value) => setValue("birthDate.day", value)}
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem
                        key={day}
                        value={day.toString().padStart(2, "0")}
                        className="text-base"
                      >
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {(errors.birthDate?.year ||
                errors.birthDate?.month ||
                errors.birthDate?.day) && (
                <p className="text-red-500 text-sm">
                  Please select a complete birth date
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthPlace" className="text-base">
                Place of birth
              </Label>
              <Input
                id="birthPlace"
                {...register("birthPlace")}
                className="text-base"
              />
              {errors.birthPlace && (
                <p className="text-red-500 text-sm">
                  {errors.birthPlace.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Driving License */}
        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Driving License
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="licenseNumber" className="text-base">
                License number
              </Label>
              <Input
                id="licenseNumber"
                {...register("licenseNumber")}
                placeholder="e.g.: 121075012XXX"
                className="text-base"
              />
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm">
                  {errors.licenseNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base">First issue date</Label>
              <div className="flex space-x-2">
                <Select
                  onValueChange={(value) => setValue("licenseDate.year", value)}
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year.toString()}
                        className="text-base"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(value) =>
                    setValue("licenseDate.month", value)
                  }
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem
                        key={month}
                        value={(index + 1).toString().padStart(2, "0")}
                        className="text-base"
                      >
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(value) => setValue("licenseDate.day", value)}
                >
                  <SelectTrigger className="w-[140px] text-base">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem
                        key={day}
                        value={day.toString().padStart(2, "0")}
                        className="text-base"
                      >
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {(errors.licenseDate?.year ||
                errors.licenseDate?.month ||
                errors.licenseDate?.day) && (
                <p className="text-red-500 text-sm">
                  Please select a complete license issue date
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base">Country of issue</Label>
              <Select
                onValueChange={(value) => setValue("phoneCountry", value)}
              >
                <SelectTrigger className="w-[200px] text-base">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem
                      key={country.code}
                      value={country.dialCode}
                      className="text-base"
                    >
                      {country.name} ({country.dialCode})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Email
              </Label>
              <Input
                id="email"
                value="collaboratorslab@gmail.com"
                disabled
                className="text-base bg-gray-50"
              />
              <p className="text-sm text-gray-500">
                <a
                  href="/dashboard/account_settings"
                  className="text-primary hover:text-primary-dark hover:underline"
                >
                  Change your email
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-base">
                SMS notifications will be sent to:
              </Label>
              <div className="flex space-x-2">
                <Select
                  onValueChange={(value) => setValue("phoneCountry", value)}
                >
                  <SelectTrigger className="w-[200px] text-base">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem
                        key={country.code}
                        value={country.dialCode}
                        className="text-base"
                      >
                        {country.name} ({country.dialCode})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  className="flex-1 text-base"
                  {...register("phoneNumber")}
                  placeholder="Enter phone number"
                />
              </div>
              {(errors.phoneCountry || errors.phoneNumber) && (
                <p className="text-red-500 text-sm">
                  {errors.phoneCountry?.message || errors.phoneNumber?.message}
                </p>
              )}
            </div>

            <Alert className="mb-6 border-none shadow-none">
              <Info className="h-5 w-5 text-primary" />
              <AlertDescription className="ml-2 text-sm text-gray-600">
                Your phone number will only be seen by the owners you contact.
                By proceeding you are agreeing to receive marketing and
                promotional messages from the Getaround. Message frequency may
                vary. Message and data rates may apply. Reply STOP to opt-out at
                any time.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label className="text-base">Language</Label>
              <Select
                onValueChange={(value) => setValue("phoneCountry", value)}
              >
                <SelectTrigger className="w-[200px] text-base">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang} className="text-base">
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Alert className="mb-6 border-none shadow-none">
                <Info className="h-5 w-5 text-primary" />
                <AlertDescription className="ml-2 mt-2 text-sm text-gray-600">
                  For notifications, text messages, and emails.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address1" className="text-base">
                Address
              </Label>
              <Input
                id="address1"
                {...register("address1")}
                className="text-base"
              />
              {errors.address1 && (
                <p className="text-red-500 text-sm">
                  {errors.address1.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address2" className="text-base">
                Address line 2
              </Label>
              <Input
                id="address2"
                {...register("address2")}
                className="text-base"
              />
              {errors.address2 && (
                <p className="text-red-500 text-sm">
                  {errors.address2.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode" className="text-base">
                  Postal code
                </Label>
                <Input
                  id="postalCode"
                  {...register("postalCode")}
                  className="text-base"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-base">
                  City
                </Label>
                <Input id="city" {...register("city")} className="text-base" />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-base">Country of issue</Label>
              <Select
                onValueChange={(value) => setValue("phoneCountry", value)}
              >
                <SelectTrigger className="w-[200px] text-base">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem
                      key={country.code}
                      value={country.dialCode}
                      className="text-base"
                    >
                      {country.name} ({country.dialCode})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-base">States</Label>
              <Select
                onValueChange={(value) => setValue("phoneCountry", value)}
              >
                <SelectTrigger className="w-[200px] text-base">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state} className="text-base">
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Additional Details */}
        <Card className="border-b-2 pb-4 rounded-none shadow-none border-l-0 border-r-0 border-t-0 ">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-dark">
              Additional details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="aboutMe" className="text-base">
                About me
              </Label>
              <Textarea
                id="aboutMe"
                {...register("aboutMe")}
                className="min-h-[100px] text-base"
                maxLength={2000}
              />
              {errors.aboutMe && (
                <p className="text-red-500 text-sm">{errors.aboutMe.message}</p>
              )}
              <Alert className="mb-6 border-none shadow-none">
                <Info className="h-5 w-5 text-primary" />
                <AlertDescription className="ml-2 mt-2 text-sm text-gray-600">
                  These details enable the owner to get to know you a bit
                  better. The more information you provide, the more likely you
                  are to rent.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
        <Button
          type="submit"
          className="w-56 text-base bg-primary hover:bg-primary-dark text-white py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating profile..." : "Update my profile"}
        </Button>
      </form>
    </div>
  );
}
