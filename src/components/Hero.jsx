import React, { useEffect, useState } from "react";

function Hero() {
  const [offsetX, setOffsetX] = useState(0);

  // Handle scroll movement
  useEffect(() => {
    const handleScroll = () => {
      setOffsetX(window.scrollY * 0.3); // adjust speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden ">
     

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row px-6 md:px-20 h-full">
        
        {/* Text Section */}
        <div className="md:w-1/2 flex items-center items-start mt-24">
          <h3
            style={{
              fontSize: "50px",      // ⬅ BIGGER TEXT
              lineHeight: "1.3",
              fontWeight: "800",
              marginTop:"80px",
              transform: `translateY(${-offsetX}px)`,
          transition: "transform 0.1s ease-out",
            }}
            className="text-white"
          >
            We provide 24/7 travel support and concierge services for a hassle free journey!
          </h3>
        </div>

      </div>
       {/* Background Image with fixed size */}
      <div
        className="md:w-1/2 absolute top-0 left-0"
        style={{
          marginLeft:"900px",
          width: "700px",       // set specific width
          height: "450px",      // set specific height
          backgroundImage: "url('./pic.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetX}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
    </div>
  );
}

export default Hero;
