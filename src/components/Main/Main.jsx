import React, { Component } from "react";
import Home from "../Home"
import Form from "../Form"
import List from "../List"
import axios from "axios";


import {Routes, Route} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      listNews:[]
       
    }
  }
  async componentDidMount(){
    
    const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=nKcAIBF4NK4Eh60PGN91ITDcGg13EFCw`);
    const data = resp.data;
    let allNews= data.response.docs;
    let news= allNews.slice(0,5);
    let current_news=this.state.listNews.concat(news)
    this.setState({
        listNews: current_news
    });
  }

  addNew = (_new)=>{
    let current_news=this.state.listNews.concat(_new)
    this.setState({
      listNews: current_news
  });
  }

  deleteNew = i => {
    const news = this.state.listNews.filter((product, j) => j !== i)
    this.setState({ listNews: news })
}

  render() {
    return <main>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/form" element={<Form add={(_new)=>this.addNew(_new)}/>} />
      <Route path="/list" element={<List listNews={this.state.listNews} delete={this.deleteNew}/>} />
    </Routes>
</main>;
  }
}

export default Main;
