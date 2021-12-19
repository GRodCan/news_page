import React, { Component } from "react";
import {Navigate} from "react-router";
import "./Form.css"

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.main= React.createRef();
    this.web_url= React.createRef();
    this.abstract= React.createRef();
    this.state={
      _new:{},
      redirect: false
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
    await this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to='/list'/>;
    }
    return  <>
    <h2>Crear nueva noticia</h2>
    <form onSubmit={this.handleSubmit} className="form_form">
                <label htmlFor="main">Titular:</label>
                <input type="text" id="main" name="main" ref={this.main}/>
                <label htmlFor="web_url">Url de la noticia:</label>
                <input type="url" id="web_url" name="web_url" ref={this.web_url}/>
                <label htmlFor="abstract">Resumen:</label>                
                <textarea id="abstract" name="abstract" ref={this.abstract}/>
                <input type="submit" value="Crear nueva noticia"/>
            </form>;
    </>
  }
}
export default Form;