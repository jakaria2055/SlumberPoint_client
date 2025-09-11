import React, { useEffect, useState } from "react";
import Card from "./smallcomponents/Card";
import TitleHeader from "./smallcomponents/TitleHeader";
import { useAppContext } from "../context/AppContext";

function RecommandedHotel() {
  const {rooms, searchedCities} = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const filterHotels = () =>{
    const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
    setRecommended(filteredHotels);
  }

  useEffect(()=>{
    filterHotels();
  },[rooms, searchedCities])

  // console.log(roomsDummyData);
  return recommended.length> 0 && (
    <div className="flex flex-col items-center  px-6 md:px-16 lg:px-24 bg-slate-50">

      {/* HEADER */}
      <TitleHeader
        title={"Hotel You May Search"}
        subTitle={
          "Step into a world of refined elegance where every detail is carefully curated for your ultimate comfort and relaxation."
        }
      />

      {/* CARD */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {recommended.slice(0, 4).map((room, index) => (
          <Card key={room._id} room={room} index={index} />
        ))}
      </div>

    </div>
  );
}

export default RecommandedHotel;
