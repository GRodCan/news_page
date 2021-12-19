import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import "./Nav.css"


class Nav extends Component {
  render() {
    return <nav>
      <ul className="ul_Nav">
       <li className="li_Nav"><Link to="/">Home</Link></li>
        <li className="li_Nav"><Link to="/form">Form</Link></li>
        <li className="li_Nav"><Link to="/list">List</Link></li>
        <userContext.Consumer>
                {              
                ({user, logout})=>user()!==""?
                <li className="li_Nav"><a href="#" onClick={logout}>Logout</a></li>
                :null}
                
                </userContext.Consumer>
      </ul>
    </nav>;
  }
}

export default Nav;
