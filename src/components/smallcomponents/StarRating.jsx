import React from "react";
import { assets } from "../../assets/assets";

function StarRating({rating=4}) {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img src={rating > index ? assets.starIconFilled : assets.starIconFilled} alt="staricon" className="w-4.5 h-4.5"/>
        ))}
    </>
  );
}

export default StarRating;
