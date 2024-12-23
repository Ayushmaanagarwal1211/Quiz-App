import React, { useState } from 'react'

export default function Timer({gameOver}) {
  const [time,setTime] = useState(10)
      if(time ==0){
        gameOver()
        return 
      }
      setTimeout(()=>setTime(time-1),1000)

  return (
    <div>{time}</div>
  )
}
