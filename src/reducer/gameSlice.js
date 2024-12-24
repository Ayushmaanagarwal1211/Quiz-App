import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    initialState:{
        questions : [],
        id : 0,
        gameState : "HOME",
        score : 0
    },
    name : "quiz",
    reducers : {
        startGame : (state)=>{
            state.gameState = "START_GAME"
        },
        gameOver: (state)=>{
            reset(state)
        },
        home: (state)=>{
            state.gameState = "HOME"
            state.score = 0
        },
        nextQuestion : (state,action)=>{
            state.id++
            action.payload && state.score++
            state.id >= state.questions.length && reset(state) 
        },
        fill :  (state,action)=>{
            let questions = []
            questions = action.payload.map(({question,incorrect_answers,correct_answer})=>{return {question, incorrect_answers, correct_answer}})
            state.questions = questions
        }
    }
})
function reset(state){
    state.id = 0
    state.questions = []
    state.gameState = "GAME_OVER"
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
export function selectScore(state){
    return state.game.score
}

export const {startGame, gameOver,fill, checkAnswer, nextQuestion,home} = slice.actions
export default slice.reducer