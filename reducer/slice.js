import {createSlice} from '@reduxjs/toolkit'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'

let slice = createSlice({
    initialState:{
        questions : [],
        id : -1,
    },
    name : "quiz",
    reducers : {
        startGame : (state)=>{
            if(isValidQuestions(state.questions)){
                state.id = 0
            }
        },
        gameOver: (state)=>{
            state.questions = []
            state.id = null
        },
        home: (state)=>{
            state.id = -1
        },
        nextQuestion : (state)=>{
            state.id++
        },
        fill :  (state,action)=>{
            if(isValidQuestions(action.payload)){
                state.questions = action.payload
            }
        }
    }
})
function isValidQuestions(questions){
    return (typeof questions == 'object') && questions.length>0
}
export function selectId(state){
    return state.task.id
}
export function selectQuestions(state){
    return state.task.questions
}

export const {startGame, gameOver,fill, checkAnswer, nextQuestion,home} = slice.actions
export default slice.reducer