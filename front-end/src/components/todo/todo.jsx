import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import { deleteTodoAction, updateDone } from '../../actions/deleteTodoAction';

class Todo extends Component {
    render() {
        return (
            <div className="to-do">
                <span className={"checkbox"} ><input type="checkbox" checked={this.props.item.isDone} onClick={()=>{this.props.updateDoneById({
                    id: this.props.index,
                    flag: this.props.item.isDone
                })}}/></span>
                <span className={"to-do-name "+this.props.identify}>{this.props.item.workName}</span>
                <span className="space"></span>
                <button className="to-do-delete" onClick={() => this.props.deleteTodoById(this.props.index)}>Delete</button>
            </div>
        );
    }
}

const mapDistachToProps = (dispatch) => ({

    deleteTodoById: (data) => dispatch(deleteTodoAction(data)),
    updateDoneById: (data) => dispatch(updateDone(data)),
});

export default connect(null, mapDistachToProps)(Todo);
