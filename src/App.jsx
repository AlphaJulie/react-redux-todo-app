import React from 'react';
import './App.css';
import Header from './components/header/header';
import AddTodo from './components/addTodo/addTodo'
import TodoList from './components/todoList/todoList'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="to-do-container">
            <AddTodo />
            <TodoList />
          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;
