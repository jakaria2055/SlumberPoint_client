import React from 'react'
import { roomsDummyData } from '../assets/assets'
import Card from './smallcomponents/Card'

function Destination() {
  return (
    <div>
        <div>
            {roomsDummyData.slice(0, 4).map((room, index)=>(
                <Card key={room._id} room={room} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Destination;