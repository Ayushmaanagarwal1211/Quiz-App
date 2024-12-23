import React, { useState } from 'react'
import Options from './Options'
import { useDispatch } from 'react-redux'
import { gameOver, nextQuestion } from '../../reducer/slice'
import Timer from './Timer'
function createOptions(question){
    let arr = new Array(4)
    let index = 0
    arr[Math.floor(Math.random()*4)] = question.correct_answer
    for(let i=0;i<=3;i++){
        if(arr[i] == undefined){
            arr[i] = question.incorrect_answers[index++]
        }
    }
    return arr
}

export default function Questions({question,id}) {
    const options = createOptions(question)
    const [showTimer,  setShowTimer] = useState(true)
    const dispatch = useDispatch()

    function handleCheckAnswer(answer){
        if(answer == question.correct_answer){
            setShowTimer(false)
            dispatch(nextQuestion())
            setTimeout(()=>setShowTimer(true),0)
            return
        }
        return handleGameOver()
    }
    function handleGameOver(){
        dispatch(gameOver())
    }
  return (
    <>
        <div className=' flex flex-col '>

       {showTimer &&  <div className=" rounded-r-full m-auto mb-[20px] rounded-t-full rounded-l-full bg-white w-[40px] h-[40px] flex justify-center items-center"><Timer gameOver = {handleGameOver} id={id}/></div>}
        <div className=' rounded-3xl bg-white p-4 text-center border-black border-[1px] '>{question.question}</div>
       <div className='grid grid-cols-2 gap-2 mt-4'>
        {
            options.map((data,index)=><Options correctOption={data == question.correct_answer} option={data} handleClick={handleCheckAnswer} key={index} />)
        }
        </div>
        </div>
    </>
  )
}
