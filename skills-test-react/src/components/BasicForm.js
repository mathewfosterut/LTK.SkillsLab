import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

 
const mapStateToProps = state => ({
    list: state.toDo.toDoList,
})
const mapDispatchToProps = dispatch => ({
    addToDo: (todo) => {
        dispatch(actions.addToDoActionCreator(todo))
    }
})
const BasicForm = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Add Task</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          props.addToDo(values.addToDo)
          navigate('/')
        }}
      >        
          <Form>
            <Field id="toDo" name="addToDo" placeholder="To Do Item" />
            <button type="submit">Add</button>
          </Form>
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicForm)
