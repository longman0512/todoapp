import React, { Component } from 'react';
import Header from './components/header/header';
import { connect } from 'react-redux';
import TodoList from './components/todoList/todoList';
import CompletedList from './components/completedList/completedList';
import AddTodo from './components/addTodo/addTodo';
import { saveLocal } from './actions/addTodoAction';

import './App.css';

class App extends Component {

  componentDidMount(){
    var data = JSON.parse(localStorage.getItem('todo'))
    if(data)
    this.props.getData(data);
  }
    
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="to-do-container">
            <AddTodo className="search" />
            <div className="space-between"></div>
            <div className="list-container">
              <div className="list">
                Todo
                <TodoList />
              </div>
              <div className="list">
                Completed
                <CompletedList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDistachToProps = (dispatch) => ({

  getData: (data) => dispatch(saveLocal(data)),
});
export default connect(null, mapDistachToProps)(App);
