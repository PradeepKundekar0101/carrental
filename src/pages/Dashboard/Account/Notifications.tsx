import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


interface NotificationConfigProps {
  title: string;
  description: string;
  appEnabled?: boolean;
  emailEnabled?: boolean;
  smsEnabled?: boolean;
  smsDisabled?: boolean;
}

const NotificationConfig = ({
  title,
  description,
  appEnabled = true,
  emailEnabled = true,
  smsEnabled = false,
  smsDisabled = false
}: NotificationConfigProps) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="flex-1">
      <h3 className="font-medium text-base">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
    <div className="flex gap-6">
      <Checkbox className="text-white h-5 w-5 ml-2" defaultChecked={appEnabled} />
      <Checkbox className="text-white h-5 w-5 ml-2" defaultChecked={emailEnabled} />
      <Checkbox className="text-white h-5 w-5 ml-2" defaultChecked={smsEnabled} disabled={smsDisabled} />
    </div>
  </div>
);

export default function NotificationsSettings() {
  const countries = ["United States", "Canada", "Mexico"];


  return (
    <div className="w-full mx-auto">
      <Card>
        <CardContent className="pt-6">
          <form>
            {/* Driver Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">As a driver</h2>
              <div className="flex justify-end gap-6 mb-4">
                <span className="text-base text-gray-500">App</span>
                <span className="text-base text-gray-500">Email</span>
                <span className="text-base text-gray-500">SMS</span>
              </div>

              <NotificationConfig
                title="Responses to your requests"
                description="Get responses to your booking requests or modification requests, as well as a notification in case of a cancelation from the owner."
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={true}
              />

              <NotificationConfig
                title="Confirmations"
                description="Receive a confirmation for your bookings and your rental modifications."
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={true}
              />

              <NotificationConfig
                title="Messages"
                description="Read messages and reviews sent by the owner"
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={false}
                smsDisabled={true}
              />

              <NotificationConfig
                title="Rental started and ended"
                description="Receive a confirmation email when you start and end your rentals."
                appEnabled={false}
                emailEnabled={true}
                smsEnabled={false}
              />

              <NotificationConfig
                title="Adjustments"
                description="Additional mileage and fuel adjustments."
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={false}
              />

              <NotificationConfig
                title="Reviews reminders"
                description="Don't forget to review your rentals."
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={false}
              />

              <NotificationConfig
                title="Cancelations"
                description="Book another car right away in case there's a cancelation by the owner"
                appEnabled={true}
                emailEnabled={true}
                smsEnabled={true}
              />
            </div>

            {/* Informational Emails Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Informational emails</h2>

              <div className="mb-4 flex justify-between">
                <div className='flex gap-2'>
                  <p className="font-medium mb-2">Emails will be sent to:</p>
                  <span className="text-gray-600">collaboratorslab@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className='text-xl text-primary border-none shadow-none'>Edit</Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Getaround Newsletter</Label>
                    <p className="text-base text-gray-500">Stay informed monthly on Getaround news and marketing offers</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Account activity</Label>
                    <p className="text-base text-gray-500">Payment notice, security, ToS updates... These notifications are required to service your account, you cannot disable them.</p>
                  </div>
                  <Switch defaultChecked disabled />
                </div>
              </div>
            </div>

            {/* Cell Notifications Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cell notifications</h2>
              <div className="space-y-4">
                <p className="text-base mb-2">SMS notifications will be sent to:</p>
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <Label className="text-base">Country of issue</Label>
                    <div className='flex gap-4 w-full'>


                      <Select >
                        <SelectTrigger className="w-[200px] text-base">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map(country => (
                            <SelectItem key={country} value={country} className="text-base">
                              {country} ({country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input type="tel" placeholder="Phone number" className="flex-1" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Getaround offers</Label>
                    <p className="text-base text-gray-500">Stay informed on Getaround news and marketing offers.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-base">Push notification settings</p>
                <p className="text-base text-gray-500">
                  To get push notifications in the event of a request or booking, download the{' '}
                  <a href="#" className="text-blue-600 underline">Getaround app</a>.
                </p>
                <p className="text-base text-gray-500">
                  To activate or deactivate these notifications, go to the "settings" section on your cell phone.
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex">
              <Button type="submit" size="lg" className="text-white text-lg">Update</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}