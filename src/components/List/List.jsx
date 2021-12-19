import React, { Component } from "react";
import Card from "../Card"
import "./List.css"
import Ripple from '@bit/joshk.react-spinners-css.ripple';

class List extends Component {
  constructor(props) {
    super(props)
  
  }
  
  printNews = () => this.props.listNews.map((cardNew, i) => <Card info={cardNew} delete={()=>this.props.delete(i)} key={i} /> )

  render() {
    return (
    <>
    <h2>Noticias</h2>
    {this.props.listNews.length!==0?
    <div className="list">
       
    {this.printNews()}
    </div>:<Ripple color="white" />}
    </>)
  }
}

export default List;
