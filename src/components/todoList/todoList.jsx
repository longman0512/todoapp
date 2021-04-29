import React, { Component } from 'react';
import Todo from '../todo/todo';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div className="to-do-list">
                <span>
                    {
                        this.props.items.map((element, index) => {
                            return !element.isDone ? <Todo identify='todo' item={element} key={index} index={index} /> : null;
                        })
                    }
                </span>
            </div>
        );
    }
}

const mapStateToProps = () => state => {
    return {
        items: state.todoList
    };
};

export default connect(mapStateToProps)(TodoList);
