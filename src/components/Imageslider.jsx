import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
 
  {
    url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    caption: "Times Square, New York",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption: "Maldives Beach",
  },
  
  {
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    caption: "Tokyo, Japan",
  },
  {
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    caption: "Venice, Italy",
  },
  
  
];

function ImageSlider() {
  return (
    <div className="flex">
      <div className="p-4 ">
          <h1 className="m-4 p-4" >Our Destinations</h1>
          <p className="m-4 p-4">We craft tailor-made travel itineraries based on your preferences, 
            budget, and schedule. From adventure trips to luxury escapes, we ensure
             every detail is perfectly planned so you can focus on enjoying the journey.Explore the world with our curated tour packages. Whether it’s cultural trips, beach holidays, or mountain treks, we offer a wide variety 
            of options to match your travel style.</p>


      </div>
       <div className="slide-container m-4" style={{ width: "90%", maxWidth: "900px", margin: "auto"}}>
      <Zoom scale={0.4} autoplay={true} duration={3000} transitionDuration={800}>
        {images.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={item.url}
              alt={item.caption}
            />

            {/* Caption */}
            <p
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            >
              {item.caption}
            </p>
          </div>
        ))}
      </Zoom>
    </div>

    </div>
   
  );
}

export default ImageSlider;
