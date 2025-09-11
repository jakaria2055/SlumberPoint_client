import React, { useMemo, useState } from "react";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import StarRating from "../components/smallcomponents/StarRating";
import { useAppContext } from "../context/AppContext";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {rooms, navigate, currency} = useAppContext(); 

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roomType: [],
    priceRange: [],
  });
  const [selectedSort, setSelectedSort] = useState('')

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Flex"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOption = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  //HANDLE FILTER AND SORTING
  const handleFilterChange = (checked, value, type) =>{
     setSelectedFilters((prevFilters) =>{
      const updatedFilters = {...prevFilters};
      if(checked){
        updatedFilters[type].push(value);
      }else{
        updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
      }
      return updatedFilters;
     })
  }

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  }

  //CHECK ROOM MATCHES THE SELECTED ROOM TYPE
  const matchesRoomType = (room) => {
    return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType);
  }

  //CHECK ROOM MATCHES THE SELECTED PRICE
  const matchesPriceRange = (room) => {
    return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range => {
      const [min, max] = range.split('to').map(Number);
      return room.pricePerNight >= min && room.pricePerNight <= max;
    })
  }

  //CHECK ROOM MATCHES THE SELECTED SORT OPTION
  const sortRooms = (a, b) => {
    if(selectedSort === 'Price Low to High'){
      return a.pricePerNight - b.pricePerNight;
    }
    if(selectedSort === 'Price High to Low'){
      return b.pricePerNight - a.pricePerNight;
    }
    if(selectedSort === 'Newest First'){
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
    return 0;
  }

  //FILTER DESTINATION
  const filterDestination = (room) => {
    const destination = searchParams.get('destination');
    if(!destination) return true;
    return room.hotel.city.toLowerCase().includes(destination.toLowerCase())
  }

  //FILTER AND SORT ROOM ON SELECTED FOLDER
  const filteredRooms = useMemo(()=>{
    return rooms.filter(room => matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room)).sort(sortRooms);
  },[rooms, selectedFilters, selectedSort, searchParams])


  //CLEAR FILTER
  const clearFilters = () =>{
    setSelectedFilters({
      roomType:[],
      priceRange:[],
    });
    setSelectedSort('');
    setSearchParams({});
  }


  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        {/* LEFT PART  */}
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">
            Hotels Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, dolores iusto eveniet impedit rem ab. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Asperiores, unde ipsam! Quia
            nemo obcaecati ad!
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="room img"
              title="View Room Details"
              className="max-h-56 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ Reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src="/icon/locationIcon.svg" alt="location" />
                <span>{room.hotel.city}</span>
              </div>
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#BBDCE5]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt="item"
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-700">
                  ${room.pricePerNight} /Night
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#ECEEDF] w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        {/* RIGHT PART */}
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">Filters</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} selected={selectedFilters.roomType.includes(room)} onChange={(checked)=>handleFilterChange(checked, room, 'roomType')}/>
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$${currency} ${range}`} selected={selectedFilters.priceRange.includes(range)} onChange={(checked)=>handleFilterChange(checked, range, 'priceRange')}/>
            ))}
          </div>
          <div className="px-5 pt-5 pb-5">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOption.map((option, index) => (
              <RadioButton key={index} label={option} selected={selectedSort === option} onChange={() => handleSortChange(option)}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
