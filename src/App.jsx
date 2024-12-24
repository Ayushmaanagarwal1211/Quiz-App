import {   useSelector } from "react-redux"
import { selectgameState, selectId } from "./reducer/gameSlice"
import StartGame from "./components/StartGame"
import GameOver from "./components/GameOver"
import Questions from "./components/Questions"


function App() {
  const id = useSelector(state=>selectId(state))
  const game_state = useSelector(state=>selectgameState(state))

  return (
    <>
    <div className='bg-gray-200 flex justify-center items-center pt-[100px] w-[100vw] h-[100vh] ' style={{margin:"0px"}}>
      {
        game_state == "HOME" ? <StartGame/> : (
          (game_state == "START_GAME") ? <Questions  key={id}/> : 
          <GameOver/>
        )
      }
    </div>
    </>
  )
}

export default App
