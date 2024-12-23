import React from 'react'
import { useDispatch } from 'react-redux'
import { home } from '../../reducer/slice'

export default function GameOver({id}) {
  let dispatch = useDispatch()
  function handleClick(){
    dispatch(home())
  }

  return (
    <>
      <div className='flex flex-col gap-3'>
        {
          id >= 10 ? <div >Congratulations You Won</div> : <div className='text-2xl'>GameOver <br></br>You Loose</div>
        }
        <div className='cursor-pointer border-[1px] border-black p-4' onClick={handleClick}>Home</div>
      </div>
    </>
  )
}
