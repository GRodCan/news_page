import React, { Component } from "react";
import Card from "../Card"

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       listNews:[]
    }
  }
  // async componentDidMount(){
    
  //   const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=nKcAIBF4NK4Eh60PGN91ITDcGg13EFCw`);
  //   const data = resp.data;
  //   let allNews= data.response.docs;
  //   let news= allNews.slice(0,5);
  //   let current_news=this.state.listNews.concat(news)
  //   this.setState({
  //       listNews: current_news
  //   });
  // }

//   deleteNew = i => {
//     const news = this.state.listNews.filter((product, j) => j !== i)
//     this.setState({ listNews: news })
// }

  printNews = () => {

    return this.props.listNews.map((cardNew, i) => <Card info={cardNew} delete={()=>this.props.delete(i)} key={i} /> )
}
  

  render() {
    return <div> {this.printNews()}</div>;
  }
}

export default List;
