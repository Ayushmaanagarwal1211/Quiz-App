import {createSlice} from '@reduxjs/toolkit'

let slice = createSlice({
    initialState:{
        questions : [],
        id : 0,
        gameState : "HOME"
    },
    name : "quiz",
    reducers : {
        startGame : (state)=>{
            state.gameState = "START_GAME"
        },
        gameOver: (state)=>{
            reset(state,"Loose")
        },
        home: (state)=>{
            state.gameState = "HOME"
        },
        nextQuestion : (state)=>{
            state.id++
            if(state.id >= state.questions.length){
                reset(state,"WON")
            }
        },
        fill :  (state,action)=>{
            let questions = []
            for(let {question, incorrect_answers, correct_answer} of action.payload){
                questions.push({question, correct_answer, incorrect_answers})
            }
            state.questions = questions
        }
    }
})
function reset(state,ending_state){
    state.id = 0
    state.questions = []
    state.gameState = ending_state
}
export function selectId(state){
    return state.game.id
}
export function selectgameState(state){
    return state.game.gameState
}
export function selectQuestions(state){
    return state.game.questions[state.game.id]
}

export const {startGame, gameOver,fill, checkAnswer, nextQuestion,home} = slice.actions
export default slice.reducer