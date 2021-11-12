import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import './styles/Todolist.css'
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      todos: []
    })
  }

  addTodo = (todo) => {
    this.setState((st) => (
      {
        todos: [...st.todos, todo]
      }
    ));
  }
  handelDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  change = (id,changedTask) =>{
       const changedTodos = this.state.todos.map(todo =>{
         if(todo.id === id){
           return {...todo , todo:changedTask}
         }
         return todo;
       });
       this.setState({
         todos: changedTodos
       })
  }


  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo key={todo.id} id={todo.id} handelDelete={this.handelDelete} todo={todo.todo} change={this.change}></Todo>
      )
    })
    return (
      <div>
        <div class="bg-light ">
          <div class="container">
            <NewTodoForm addTodo={this.addTodo}></NewTodoForm>
          </div>
        </div>
        <div className="container-fluid">
          {todos.length === 0 ? <h3 style={{textAlign:"center", margin:"20px"}}>Yay! all Todos completed!</h3>: <ul>{todos}</ul>}
        </div>

      </div>

    );
  }
}
