import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'
import './addTodo.css';

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = () => {
        setValue('')
        addTodo(value)
    }

    return (
        <>
            <input type="text" className="add-todo" onChange={handleOnChange} value={value} placeholder="Enter Your Work Here" />
            <button className="todo-btn" onClick={handleAdd}>Add</button>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo)
