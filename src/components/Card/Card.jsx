import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
  

render() {
    const {abstract,headline,web_url, pub_date} = this.props.info
    const {main}= headline
    const date=new Date(pub_date)
    
    return (
        <div className="card"><a href={web_url} target="_blank" rel="noopener noreferrer">
            <h3>{main}</h3>
             <p>Fecha de publicación: {date.toDateString()}</p>
             <p>{abstract}</p>
            </a>
            <button onClick={this.props.delete}>Borrar</button>
        </div>
    )
}
}

export default Card;