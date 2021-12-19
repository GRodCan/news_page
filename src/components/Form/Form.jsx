import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.main= React.createRef();
    this.web_url= React.createRef();
    this.abstract= React.createRef();
    this.state={
      _new:{}
    }
  }
  
  handleSubmit = async event => {
    const {add}= this.props
    event.preventDefault();
    const _new= await {
      headline:{main:this.main.current.value},
      abstract: this.abstract.current.value,
      web_url: this.web_url.current.value,
      pub_date: new Date
    };
    this.setState({_new:_new})
    await add(this.state._new)
    // Crear producto
    
}

  render() {
    return  <form onSubmit={this.handleSubmit}>
                <label htmlFor="main">Titular:</label><br/>
                <input type="text" id="main" name="main" ref={this.main}/><br />
                <label htmlFor="abstract">Resumen:</label><br/>
                <input type="text" id="abstract" name="abstract" ref={this.abstract}/><br />
                <label htmlFor="web_url">Url de la noticia:</label><br/>
                <input type="url" id="web_url" name="web_url" ref={this.web_url}/><br />
                <input type="submit" value="Crear nueva noticia"/>
            </form>;
  }
}

export default Form;
