import logo from "./logo.svg";
import searchIcon from "/public/icon/searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "/public/images/roomImg1.jpg";
import roomImg2 from "/public/images/roomImg2.jpg";
import roomImg3 from "/public/images/roomImg3.jpg";
import roomImg4 from "/public/images/roomImg4.jpg";
import regImage from "./regImage.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  logo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = [
  "Cox's Bazar",
  "Kuyakata",
  "Sylhet",
  "Sajek",
  "Bandharban",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Paradise Package",
    description:
      "Enjoy 3 nights with complimentary breakfast and airport transfers",
    priceOff: 30,
    expiryDate: "Jul 15",
    image: "/public/images/offer3.jpg",
  },
  {
    _id: 2,
    title: "Anniversary Special",
    description: "Romantic dinner, couple's spa, and champagne on arrival",
    priceOff: 25,
    expiryDate: "Dec 20",
    image: "/images/offer1.jpg",
  },
  {
    _id: 3,
    title: "Early Bird Discount",
    description:
      "Book 90 days in advance for special rates at our premium locations",
    priceOff: 35,
    expiryDate: "Oct 10",
    image: "/images/offer2.jpg",
  },
  {
    _id: 4,
    title: "Business Traveler Package",
    description:
      "Includes executive lounge access, late checkout, and meeting room credits",
    priceOff: 20,
    expiryDate: "Nov 30",
    image: "/images/offer4.jpg",
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Tasnim Ahmed",
    address: "Chittagong, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    rating: 4,
    review:
      "SlumberPoint আমার প্রত্যাশা ছাড়িয়ে গেছে। বুকিং প্রক্রিয়াটি নির্বিঘ্ন ছিল, এবং হোটেলগুলি একদম প্রথম শ্রেণীর ছিল। অত্যন্ত সুপারিশকৃত!",
  },
  {
    id: 2,
    name: "Jamil Hasan",
    address: "Sylhet, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    rating: 5,
    review:
      "অসাধারণ সেবা! আমি সবসময় SlumberPoint এর মাধ্যমে সেরা বিলাসবহুল থাকার ব্যবস্থা খুঁজে পাই। তাদের সুপারিশ কখনই হতাশ করে না!",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    address: "Cox's Bazar, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200",
    rating: 5,
    review:
      "LuxeNook বাংলাদেশি ভ্রমণকারীদের জন্য একটি আশীর্বাদ। স্থানীয় হোটেল এবং রিসোর্টগুলির সাথে তাদের সংযোগ আমাকে সর্বদা সেরা দাম পেতে সাহায্য করে।",
  }
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Spotless & Secure Accommodation",
    description: "Immaculately maintained and sanitized spaces for your complete peace of mind.",
  },
  {
    icon: assets.badgeIcon,
    title: "Premium Sanitization Protocol",
    description: "All properties adhere to LuxeNook's rigorous hygiene and cleaning guidelines.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Prime Location Advantage",
    description: "95% of our guests awarded perfect scores for our property locations.",
  },
  {
    icon: assets.heartIcon,
    title: "Hassle-Free Arrival Experience",
    description: "98% of visitors rated our check-in process as exceptionally smooth.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["Cosx's Bazar"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Bangla Coteg",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "Cox's bazar",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 399,
    amenities: ["Room Service", "Sea View", "Pool Access"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 299,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData,
    roomType: "Double Bed",
    pricePerNight: 249,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },

  
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData,
    roomType: "Single Bed",
    pricePerNight: 199,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
