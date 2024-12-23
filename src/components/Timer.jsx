import React, { useState } from 'react'

export default function Timer({gameOver}) {
  const [time,setTime] = useState(0)
      if(time >= 11){
        gameOver()
        return 
      }
      setTimeout(()=>setTime(time+1),1000)

  return (
    <div>{time}</div>
  )
}
