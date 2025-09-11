import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function HeroForm() {
  const { navigate, getToken, axios, setSearchedCities } = useAppContext();
  const [destination, setDestination] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);

    try {
      await axios.post(
        "/api/user/store-recent-search",
        { recentSearchCity: destination },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      setSearchedCities((prevSearchedCities) => {
        const updatedSearchedCities = [...prevSearchedCities, destination];
        if (updatedSearchedCities.length > 3) {
          updatedSearchedCities.shift();
        }
        return updatedSearchedCities;
      });
    } catch (error) {
      console.error("Failed to save recent search:", error);
    }
  };

  const cities = ["Cox's Bazar", "Kuyakata", "Sylhet", "Sajek", "Bandharban"];

  return (
    <>
      <form
        onSubmit={onSearch}
        className="bg-[#BBDCE5] text-gray-500 rounded-lg mt-5 px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
      >
        <div>
          <div className="flex items-center gap-2">
            <img src={"/icon/calenderIcon.svg"} alt="" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-600 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => {
              return <option value={city} key={index} />;
            })}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={"/icon/calenderIcon.svg"} alt="" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-600 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={"/icon/calenderIcon.svg"} alt="" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-600 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-600 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={"/icon/searchIcon.svg"} alt="" className="h-7" />
          <span>Search</span>
        </button>
      </form>
    </>
  );
}

export default HeroForm;
