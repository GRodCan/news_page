import React, { Component } from "react";
import Nav from "../Nav";

import { userContext } from "../../context/userContext";

class Header extends Component {


  render() {
    return <header>
      <h1>K'AppAsao</h1>
      <Nav/>
      <userContext.Consumer>
                {
                  
                ({user, logout})=>user()!==""?<>
                <h2>Bienvenido {user()}, disfruta de nuestros servicios</h2>
                <button onClick={logout}>Logout</button>
                </>:null}
                
                </userContext.Consumer>
    </header>;
  }
}

export default Header;
