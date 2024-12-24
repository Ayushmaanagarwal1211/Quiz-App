import React from 'react'
import { useDispatch } from 'react-redux'
import { home } from '../reducer/gameSlice'

export default function GameOver({game_state}) {
  let dispatch = useDispatch()
  function handleClick(){
    dispatch(home())
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        <div >{game_state == "WON" ? "Congratulations You Won" : "You Loose"}</div>
        <div className='cursor-pointer border-[1px] border-black p-4' onClick={handleClick}>Home</div>
      </div>
    </>
  )
}
