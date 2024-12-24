import React, { useEffect, useMemo, useState } from 'react'
import Options from './Options'
import { useDispatch, useSelector } from 'react-redux'
import { gameOver, nextQuestion, selectQuestions } from '../reducer/gameSlice'
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

export default function Questions() {
    const question = useSelector(state=> selectQuestions(state))
    const dispatch = useDispatch()
    const [time,setTime] = useState(10)
    const [options,setOptions] = useState([])

    useEffect(()=>{
        setOptions(createOptions(question))
        const timeOut = setTimeout(()=>dispatch(nextQuestion(false)),10000)
        const interval = setInterval(()=>setTime((prev)=>prev-1),1000)
        return ()=>{
          clearTimeout(timeOut)
          clearInterval(interval)
        }
      },[])

    function handleCheckAnswer(answer){
        dispatch(nextQuestion(answer == question.correct_answer))
    }

  return (
    <>
        <div className=' flex flex-col '>

      <div className=" rounded-r-full m-auto mb-[20px] rounded-t-full rounded-l-full bg-white w-[40px] h-[40px] flex justify-center items-center" > {time}</div>
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
