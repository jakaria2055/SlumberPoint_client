import React, { useEffect, useState } from 'react'
import TitleHeader from '../../components/smallcomponents/TitleHeader'
import { useAppContext } from '../../context/AppContext';
import { toast } from "react-hot-toast";


function DashBoard() {
  const {currency, user, getToken, axios} = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    bookings:[],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const fetchDashboardData = async () =>{
    try {
      const {data} = await axios.get('/api/bookings/hotel', {
        headers: { Authorization: `Bearer ${await getToken()}` }})

        if(data.success){
          setDashboardData(data.dashboardData)
        }else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user){
      fetchDashboardData();
    }
  },[user])


  return (
    <div>
      <TitleHeader align={"left"} font={"outfit"} title={"DashBoard"} subTitle={"Monitor all of your work from here. Room list, Track Bookings, and analyze revenuue all in one page. Stay updated with real-time insights to ensure smooth operations."} />

      <div className='flex gap-4 my-8'>
        {/* TOTAL BOOKING */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src="/icon/totalBookingIcon.svg" alt="Bokking" className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Booking</p>
            <p className='text-neutral-400 text-xl'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* REVENUE */}
         <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src="/icon/totalRevenueIcon.svg" alt="Revenue" className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-xl'>{currency} {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>


      {/* Recenet Booking */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Booking</h2>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>

        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font font-medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font font-medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font font-medium text-center'>payment Status</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
              {dashboardData.bookings.map((item, index) => (
                <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>{currency} {item.totalPrice}</td>

                    <td className='py-3 px-4 border-t border-gray-300 flex'>
                      <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-100 text-yellow-600'}`}>{item.isPaid ? "Completed" : "Pending"}</button>
                    </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashBoard