import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Infinte() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000 })]
  );

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    
    
  ];

  return (
    <div className=" p-5">
      <h1 className="text-center text-6xl font-extrabol text-red">
        Our Clients
      </h1>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container px-20 gap-x-20">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="embla__slide flex items-center justify-center  rounded-xl shadow-md"
              style={{ width: "200px", height: "200px" }}
            >
              <img
                src={logo}
                className="w-40 h-40 object-contain"
                alt={`Client Logo ${index + 1}`}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
export default Infinte;