'use client';

export default function TopOffers() {
  const offers = [
    "Get 15% off + Free Gift on orders above ₹1199",
    "Get 15% off + A Special Gift on orders above ₹2999",
    "Free Delivery across all India",
    "PAN India Deliveries Available",
    "COD Available",
    "Get 10% off on orders above ₹899",
  ];

  return (
    <div className="top-offers w-full overflow-hidden bg-green-600 text-white py-3">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...offers, ...offers].map((text, index) => (
          <span key={index} className="mx-8 text-sm font-semibold">
            • {text}
          </span>
        ))}
      </div>
    </div>
  );
}


