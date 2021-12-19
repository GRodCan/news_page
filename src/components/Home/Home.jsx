import React, { Component } from "react";
import { userContext } from "../../context/userContext";

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
    // Crear producto
    
}

  render() {
    return <>
    <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Nombre:</label><br/>
                <input type="text" id="name" name="name" ref={this.name}/><br />
                <input type="submit" value="Login"/>
                </form> 
    </>;
  }
}

export default Home;
