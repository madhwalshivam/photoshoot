import React from "react";

const seoKeywords = [
  "Best Pre Wedding Shoot in Delhi",
  "Pre Wedding Photoshoot Location in Delhi NCR",
  "Pre Wedding Shoot with Props in Delhi",
  "50+ Backdrop Pre Wedding Studio Delhi",
  "Cinematic Pre Wedding Shoot in Holambi Kalan",
  "Best Maternity Photographer in Delhi",
  "Affordable Maternity Shoot in Delhi NCR",
  "Creative Maternity Shoot in Holambi Kalan Delhi",
  "Affordable Baby Shoot Delhi",
  "Indoor Baby Photoshoot Delhi",
  "Cute Baby Photoshoot with Props in Delhi",
  "Fashion Photographer Delhi",
  "Studio Fashion Photography in Delhi",
  "Model Portfolio Shoot in Holambi Kalan",
  "Outdoor Couple Shoot",
  "Candid Pre Wedding Photography",
  "Romantic Couple Photography in Delhi",
  "Delhi Prewedding Locations",
  "Top Pre Wedding Location in Delhi NCR",
  "Props-Based Photoshoot in Delhi",
  "Photography Studio with 50+ Backdrops Delhi",
  "Best Cinematography Studio in Delhi",
  "The PICTURE Town Delhi Photoshoot",
  "Holambi Kalan Photography Studio",
  "Photoshoot Location with 200+ Props Delhi",
];

export default function Seo() {
  const repeatedKeywords = [...seoKeywords, ...seoKeywords];

  return (
    <div className="bg-black py-3 border-y overflow-hidden relative">
      <div className="marquee whitespace-nowrap flex gap-12">
        {repeatedKeywords.map((keyword, index) => (
          <span
            key={index}
            className="text-white font-medium text-sm shrink-0"
          >
            {keyword}
          </span>
        ))}
      </div>

      <style>{`
        .marquee {
          animation: slide-left 10s linear infinite;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
