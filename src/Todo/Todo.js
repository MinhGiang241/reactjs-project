import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  componentWillUnmount() {
    console.log("in component will unmount");
  }
  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <CSSTransition key="editing" timeout={500} classNames="form">
            <div className="Todo">
              <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                <input
                  type="text"
                  value={this.state.task}
                  name="task"
                  onChange={this.handleChange}
                />
                <button>Save</button>
              </form>
            </div>
          </CSSTransition>
        ) : (
          <CSSTransition key="normal" timeout={500} classNames="task-text">
            <div className="Todo">
              <li
                className={
                  this.props.complete ? "Todo-task completed" : "Todo-task"
                }
                onClick={this.handleToggle}
              >
                {this.props.task}
              </li>
              <div>
                <button onClick={this.toggleForm}>
                  <i className="fa fa-pen" />
                </button>
                <button onClick={this.props.removeTodo}>
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </CSSTransition>
        )}
      </div>
    );
  }
}

export default Todo;
