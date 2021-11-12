import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo({...this.state, id:uuidv4()})
        this.setState({
            todo:""
        })
        alert("Task Saved ! .. Good Luck! ☺️")
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Add a todo!</h2>
                <form className="row g-3 " onSubmit={this.handelSubmit}>
                    <div className="col-8">
                        <input type="text" class="form-control" id="todo"
                        required
                        name="todo"
                        value={this.state.todo} 
                        onChange={this.handelChange}
                        />
                    </div>
                    <div className="col-4"  >
                        <button className="btn btn-success">Add Todo</button>
                    </div>
                </form>

            </div>
        );
    }
}
