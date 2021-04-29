import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoAction } from '../../actions/addTodoAction';
import './addTodo.css'
class AddTodo extends Component {
    constructor(props) {
        super(props);
    this.state = {
          numOfClicks: 0
        };
    this.addList = this.addList.bind(this);
      }


    addTodo(event) {
        if (event.key === 'Enter') {
            this.props.addTodo({ workName: event.target.value });
            event.target.value = null;
        }
    }

    addList () {
        console.log("asdf", this.props)
        var data = document.getElementById("list-name")

        if(data.value)
        this.props.addTodo({ workName: data.value });
        // this.props.addTodo({ workName: data.value });
        data.value = null
    };
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <input type="text" className="search" id="list-name" placeholder="Enter Your Work Here" />
                <button type="button" className="to-do-add" value="Add" onClick={this.addList} >Add</button>
            </div>
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ addTodo: addTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(AddTodo);