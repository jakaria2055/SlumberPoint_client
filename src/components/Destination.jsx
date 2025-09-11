import React from "react";
import Card from "./smallcomponents/Card";
import TitleHeader from "./smallcomponents/TitleHeader";
import ViewAllButton from "./smallcomponents/ViewAllButton";
import { useAppContext } from "../context/AppContext";

function Destination() {
  const {rooms, navigate} = useAppContext();

  // console.log(roomsDummyData);
  return rooms.length> 0 && (
    <div className="flex flex-col items-center  px-6 md:px-16 lg:px-24 bg-slate-50">

      {/* HEADER */}
      <TitleHeader
        title={"Unwind in Elegance"}
        subTitle={
          "Step into a world of refined elegance where every detail is carefully curated for your ultimate comfort and relaxation."
        }
      />

      {/* CARD */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {rooms.slice(0, 4).map((room, index) => (
          <Card key={room._id} room={room} index={index} />
        ))}
      </div>

      7{/* VIEW BUTTON */}
      <ViewAllButton
        text={"Explore All"}
        onclick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
      />
    </div>
  );
}

export default Destination;
