import React from "react";

const seoKeywords = [
  "Pre-Wedding Shoot Location in Delhi-NCR",
  "Songs Shoot Location in Delhi-NCR",
  "Fashion Shoot Location in Delhi-NCR",
  "Commercial Shoot Location in Delhi-NCR",
  "Brand Shoot Location in Delhi-NCR",
  "Family Shoot Location in Delhi-NCR",
  "Instagram Reel Shoot Location in Delhi-NCR",
  "YouTube Vlog Shoot Location in Delhi-NCR",
  "Anniversary Shoot Location in Delhi-NCR",
  "Maternity Shoot Location in Delhi-NCR",
  "Baby Shoot Location in Delhi-NCR",
  "Horse Photoshoot Delhi",
  "Swimming Pool Photoshoot Delhi",
  "Air Conditioned Makeup Room and Changing Room Delhi",
  "50+ Sets with Many Props in Delhi (Snow Machine, Bubble Machine, Fog Machine)",
  "Swiggy and Zomato Deliver Here"
];

export default function Seo() {
  return (
    <div className="bg-black py-3 border-y overflow-hidden relative w-full">
      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap w-fit">
          {[...seoKeywords, ...seoKeywords].map((keyword, index) => (
            <span
              key={index}
              className="text-white font-medium text-sm px-4 whitespace-nowrap"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

