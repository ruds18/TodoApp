import React, { Component } from 'react'
import './Navbar.css'
import logo from '../assets/bg.png'

export default class Navbar extends Component {
    static defaultProps ={
        title : 'Ruds App!'
    }
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <img className="logo image-fluid" src={logo} alt="logo" />
                        <ul className="nav navbar-nav navbar-right">
                             <h2>{this.props.title}</h2>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
