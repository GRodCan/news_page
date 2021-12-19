import React, { Component } from "react";
import './App.css';
import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/';

import { BrowserRouter} from 'react-router-dom';
import {userContext} from "./context/userContext"

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      userName:""       
    }
  }
  
  value={
    user: ()=>this.state.userName,
    login: (name)=>{
      this.setState({userName:name})
    }, 
    logout: ()=>{
      this.setState({userName:""})
    }
  }
  
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={this.value}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}}

export default App;
