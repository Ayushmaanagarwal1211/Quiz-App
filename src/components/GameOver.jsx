import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { home, selectScore } from '../reducer/gameSlice'

export default function GameOver() {
  const dispatch = useDispatch()
  const score = useSelector(state=>selectScore(state))
  function handleClick(){
    dispatch(home())
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        <div >Your Score is {score}</div>
        <div className='cursor-pointer border-[1px] border-black p-4' onClick={handleClick}>Home</div>
      </div>
    </>
  )
}
