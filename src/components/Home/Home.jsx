import React, { Component } from "react";
import { userContext } from "../../context/userContext";
import "./Home.css"

class Home extends Component {
  static contextType= userContext

  constructor(props) {
    super(props)

    this.name= React.createRef();
  }
  
  handleSubmit = event => {
    const {login}= this.context
    event.preventDefault();
    const name = this.name.current.value
    login(name)
  }

  render() {
    return <>
    <h2>Bienvenido</h2>
    <form onSubmit={this.handleSubmit} className="home_form">
                <label htmlFor="name">Introduzca su nombre:</label>
                <input type="text" id="name" name="name" ref={this.name}/>
                <input type="submit" value="Login"/>
                </form> 
    </>;
  }
}

export default Home;
