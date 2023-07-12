import * as types from './actionTypes'

const initialState = {
    toDoList : [],
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type){
        case types.ADD_TODO: {
            const toDoList = state.toDoList.slice();
            toDoList.push(action.payload)
            return {
                ...state,
                toDoList,
            }
        }
        case types.DELETE_TODO: {
            const toDoList = state.toDoList.slice();
            toDoList.splice(action.payload, 1)
            return {
                ...state,
                toDoList,
            }
        }
        default: {
            return state;
        }
    }
}

export default toDoReducer