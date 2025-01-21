import { Card, CardSection } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function VerifyProfile() {
  return (
    <div className="w-full mx-auto ">
      <Card className="mb-4">
        <CardSection>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 p-8 bg-cover bg-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Verify your profile</h2>
                <p className="text-lg mb-6">
                  Open the Getaround app to start the verification and to check
                  the verification status.
                </p>

                <div className="flex items-center space-x-4 shadow-md border-2 p-2 rounded-xl  border-l-red-400 rounded-l-none">
                  <div className="flex-shrink-0">
                    <img
                      alt="Profile"
                      src="https://getaround-assets.gumlet.io/images/cobalt/placeholders/placeholder_user.png?bg=%23f1f1f4&compress=true&h=128&mask=ellipse&mode=crop&w=128"
                      className="h-16 w-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Collaborators Lab</h3>
                    <p className="text-sm">Your profile is not verified yet.</p>
                  </div>
                </div>
                <img src="" alt="" />

                <h4 className="text-lg font-medium mb-4">
                  Don't have the app yet?
                </h4>
                <Button className="w-full md:w-auto text-white text-lg p-6">
                  Download the app
                </Button>
              </div>
              <div className="flex justify-center h-[400px]">
                <img
                  src="https://getaround.com/packs/images/app/assets/images/shared/profile_verification_phone/en@2x.b8c3d3fc86a54b31.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </CardSection>

        {/* Why verify section */}
        <CardSection className="border-t">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex justify-center">
              <img
                src="https://getaround.com/packs/images/vendor/cobalt/images/illustrations/light/hand_checking_phone.71b1b449b557ffdb.svg"
                alt="Verification illustration"
                className="w-[280px] h-[280px]"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">
                Why verify your profile?
              </h3>
              <ul className="space-y-6">
                {[
                  "Required to access self-service cars",
                  "Do it once, save time for your next booking",
                  "Verifications help us keep the platform secure both for renters and owners",
                ].map((text, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 mt-1">
                      <Check className="h-6 w-6 text-green-500" />
                    </span>
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardSection>
      </Card>
    </div>
  );
}
