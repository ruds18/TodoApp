import React, { Component } from 'react'
import "./styles/Todo.css"
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task:  this.props.todo,
        
        }
    }
    remove = () => {
        this.props.handelDelete(this.props.id)
    }

    handeleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handeleChange = (e) => {
        e.preventDefault();
        this.props.change(this.props.id, this.state.task)
        
        this.setState ({
            isEditing: false,

        })

    }
    
    update = (e) =>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="container mt-4 ">

                    <form className="row g-3 " onSubmit={this.handeleChange}>
                        <div className="col-8">
                            <input type="text" className="form-control"
                                name="task"
                                value ={this.state.task}
                                onChange = {this.update}
                                required
                            /></div>
                        <div className="col-4"><button className="btn btn-success">Save</button></div>
                    </form>
                </div>


            )
        } else {
            result = (<div className="container mt-4 ">
                <div className="d-flex justify-content-between ">
                    <div>
                        <li className="todo">
                            {this.props.todo}
                        </li>
                        </div>
                    <div className="d-inline-flex justify-content-between ">
                        <div><button className="btn btn-outline-warning" onClick={this.handeleEdit}><i class="fas fa-edit"></i></button></div>
                        <div><button className="btn btn-danger mx-2" onClick={this.remove}><i class="fas fa-trash-alt"></i></button></div>
                    </div>
                </div>
                <hr/>
            </div>
            )
        }

        return (
            result

        )
    }
}
