import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Share, Gift, Check } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function GetCredits() {
  const [showInviteModal, setShowInviteModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [emails, setEmails] = React.useState("");
  const referralLink = "https://samplelink.com";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setEmails("");
  };

  return (
    <Card className="w-full mx-auto p-8">
      <CardContent className="p-0">
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-1 pr-8">
              <h2 className="text-3xl font-bold mb-8">
                Refer a friend and earn $20 credit
              </h2>

              <ul className="space-y-6 mb-8">
                <li className="flex items-center space-x-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <svg
                      className="w-6 h-6 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Your friend gets <strong>$20</strong> towards their first
                    Getaround trip
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <svg
                      className="w-6 h-6 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    You get <strong>$20</strong> once they've completed their
                    trip
                  </span>
                </li>
              </ul>

              <p className="text-gray-600 mb-8 text-lg">
                You can earn credits for referring up to 2 friends per month.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={() => setShowInviteModal(true)}
                  className="w-48 h-12 bg-primary hover:bg-primaryDark text-white rounded-full text-lg font-medium"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Invite friends
                </Button>

                <div>
                  <Button
                    variant="link"
                    className="text-primary hover:text-primaryDark p-0 text-lg font-medium underline"
                  >
                    Learn more about how referral credits work
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-96">
              <img
                src="https://getaround.com/packs/images/vendor/cobalt/images/illustrations/light/two_characters_with_a_dog.27e0a1dd8e639c0f.svg"
                alt="Two people walking with a dog"
                className="w-full h-auto"
              />
            </div>
          </div>

          <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
            <DialogContent className="sm:max-w-[600px] transition-all duration-300 animate-in fade-in-0 zoom-in-95">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Share your personal link
                  </h3>
                  <div className="flex gap-2 mb-6">
                    <Input
                      readOnly
                      value={referralLink}
                      className="bg-gray-50"
                    />
                    <Button
                      variant="outline"
                      onClick={handleCopyLink}
                      className={`border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ${
                        copied ? "bg-green-600 border-green-600 text-white" : ""
                      }`}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 mr-2" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      {copied ? "Copied!" : "Copy link"}
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Share using</span>
                    <Button
                      variant="outline"
                      className="bg-[#1877f2] text-white hover:bg-[#1877f2]/90"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
                    >
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Or invite friends by email
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Enter their email addresses, separated by commas
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex gap-2">
                    <Input
                      required
                      placeholder="batman@gothamcity.com, m.mcfly@thefuture.com"
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primaryDark text-white"
                    >
                      Invite
                    </Button>
                  </form>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
