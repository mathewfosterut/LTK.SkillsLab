import * as types from './actionTypes'

export const addToDoActionCreator = toDo => ({
    type: types.ADD_TODO,
    payload: toDo,
})

export const deleteToDoActionCreator = idx => ({
    type: types.DELETE_TODO,
    payload: idx,
})