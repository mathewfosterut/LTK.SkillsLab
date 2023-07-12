import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

const mapStateToProps = state => ({
    list: state.toDo.toDoList,
})
const mapDispatchToProps = dispatch => ({
    deleteToDo: (idx) => {
        dispatch(actions.deleteToDoActionCreator(idx))
    }
})

const List = (props) => {
    const list = [];
    for (let i = 0; i < props.list.length; i++){
        list.push(
            <div className='listItem'>
                <p>{props.list[i]}</p>
                <button onClick={() => {props.deleteToDo(i)}}>Delete</button>
            </div>
        )
    }

    return (
        <div>
            <h2>To Do List</h2>
            {list.length ? list : <p>You are all done!</p>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(List)