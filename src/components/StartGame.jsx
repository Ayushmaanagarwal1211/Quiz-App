import React, { useEffect, useState } from 'react'
import { fill, startGame } from '../../reducer/slice'
import { useDispatch } from 'react-redux'

export default function StartGame() {
    let dispatch = useDispatch()
    let [isLoaded,setIsLoaded] = useState(true)
    async function fetchQuestions() {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
      const data = await response.json();
      dispatch(fill(data.results))
      setIsLoaded(false)
      return ;
  }
    async function handleClick(){
        dispatch(startGame())
    }
    useEffect(()=>{
      fetchQuestions()
    },[])
  return (
    <button className='text-[30px]' disabled={isLoaded} onClick={handleClick} >
      Start Game
    </button>
  )
}
