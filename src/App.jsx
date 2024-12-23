import {  useDispatch, useSelector } from "react-redux"
import { selectId, selectQuestions, startGame } from "../reducer/slice"
import StartGame from "./components/StartGame"
import GameOver from "./components/GameOver"
import Questions from "./components/Questions"
import { useEffect } from "react"


function App() {
  const id = useSelector(state=>selectId(state))
  const questions = useSelector(state=> selectQuestions(state))

  return (
    <>
    <div className='bg-gray-200 flex justify-center items-center pt-[100px] w-[100vw] h-[100vh] ' style={{margin:"0px"}}>
      {
        id == -1 ? <StartGame/> : (
          (id == null || id>=10) ? <GameOver id={id}/> : 
          <Questions id={id} question={questions[id]}/>
        )
      }
    </div>
    </>
  )
}

export default App
