import React from "react";
import TitleHeader from "./smallcomponents/TitleHeader";
import ViewAllButton from "./smallcomponents/ViewAllButton";
import { exclusiveOffers } from "../assets/assets";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item)=>(
            <div key={item._id} className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18
            px-4 rounded-xl text-[#ECEEDF] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}>
                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">{item.priceOff}% OFF</p>
                <div>
                    <p className="text-2xl font-medium font-playfair">{item.title}</p>
                    <p>{item.description}</p>
                    <p className="text-xs text-white/70 mt-3">Expires AT: {item.expiryDate}</p>
                </div>
                <button className="flex items-center gap-2 font-medium bg-[#1C6EA4] rounded-full px-2 py-1 cursor-pointer mt-4 mb-5">
                    View Offers
                    <img src="/icon/arrowIcon.svg" alt="arrowIcon" className="invert text-gray-500 group-hover:translate-x-1 transition-all"/>
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
