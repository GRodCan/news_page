import React, { Component } from "react";
import Nav from "../Nav";
import "./Header.css"

import { userContext } from "../../context/userContext";

class Header extends Component {


  render() {
    return (<header className="header">
      <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="Logo noticias" className="logo" />
      <h1 className="title">TechNews</h1>
      <userContext.Consumer>
                {
                  
                  ({user, logout})=>user()!==""?
                <p className="user">Disfruta de nuestros servicios {user()}.</p>
                :null}
                
                </userContext.Consumer>
      <Nav/>
    </header>);
  }
}

export default Header;
