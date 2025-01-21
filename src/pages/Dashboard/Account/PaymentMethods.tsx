import { Card, CardContent } from "@/components/ui/card";

export default function PaymentMethods() {
  return (
    <div className="w-full mx-auto ">
      <Card>
        <CardContent className="py-6">
          <h2 className="text-2xl font-semibold mb-8">Payment methods</h2>

          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="mb-6">
              <img
                src="https://getaround.com/packs/images/vendor/cobalt/images/illustrations/light/hand_with_credit_card.bcc4fdb6234d307b.svg"
                className="w-48"
                alt=""
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              You haven't saved any payment method yet.
            </h3>

            <p className="text-gray-500 text-lg">
              You can only add a new payment method when you make a booking.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
