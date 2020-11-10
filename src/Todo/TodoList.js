import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState((st) => ({
      todos: [...st.todos, newTodo],
    }));
  }
  remove(id) {
    this.setState((st) => ({
      todos: st.todos.filter((todo) => todo.id !== id),
    }));
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <CSSTransition key={todo.id} timeout={500} classNames="todo">
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          removeTodo={() => this.remove(todo.id)}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      </CSSTransition>
    ));
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <span>Simple React Todo List App</span>
        {todos}
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
