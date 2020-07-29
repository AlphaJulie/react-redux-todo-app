import React from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import { deleteTodo } from '../../redux/actions'
import './todoList.css';

const Todo = ({ todo, id, deleteTodo }) => (
    <div className="to-do">
        <li className={todo.completed ? 'completed' : ''} >{todo.content}
        </li>
        <button className="delete-btn todo-btn" onClick={() => deleteTodo(id)}>Delete</button>
    </div>

)

function TodoList({ todos, deleteTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} deleteTodo={deleteTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    return ({
        todos: _.pick(state.todos.data, (todo) => !todo.completed)
    })
}

export default connect(mapState, { deleteTodo })(TodoList);