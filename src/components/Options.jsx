import React from 'react'

export default function Options({option, handleClick,correctOption}) {
  return (
    <div style={{backgroundColor:`${correctOption?"#62d862":""}`}} className={`${correctOption ? "bg-green-300":""} rounded-3xl cursor-pointer bg-white p-4  text-center border-black border-[1px] `} onClick={()=>handleClick(option)}>{option}</div>
  )
}
