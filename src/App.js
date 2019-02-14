import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
// import axios from "axios";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:3001/articles");
      const json = await res.json();
      this.setState({
        articles: json.map(article => {
          return {
            ...article
          };
        })
      });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <div>
        <h4>Article App</h4>
        <h2>yaya</h2>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
