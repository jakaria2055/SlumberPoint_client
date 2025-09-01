import React from "react";
import TitleHeader from "./smallcomponents/TitleHeader";
import ViewAllButton from "./smallcomponents/ViewAllButton";

function Offer() {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-10 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <TitleHeader
          align={"left"}
          title={"Limited-Time Getaways"}
          subTitle={
            "Discover extraordinary value with our curated collection of limited-time packages designed for unforgettable experiences"
          }
        />

        <button
          type="button"
          class="flex items-center gap-2.5 rounded-full border border-gray-200/30 px-4 py-2 text-sm text-gray-800 rounde hover:text-cyan-900 hover:bg-cyan-100/50 hover:border-cyan-500/30 active:scale-95 transition cursor-pointer max-md:mt-5"
        >
          <img src="/public/icon/arrowIcon.svg" alt="arrowIcon" />
          Explore All Offers
        </button>
      </div>

      <div>
        {}
      </div>
    </div>
  );
}

export default Offer;
