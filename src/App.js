import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import AddArticle from "./components/AddArticle";

class App extends Component {
  state = {
    articles: []
  };

  addArticle = newArticle => {
    const { title, img } = newArticle;
    fetch("http://localhost:3001/articles/", {
      method: "post",
      body: JSON.stringify({ title, img }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            articles: [
              ...prevState.articles,
              {
                title,
                img
              }
            ]
          };
        });
      });
  };
  // async componentDidMount() {
  //   const res = await fetch("http://localhost:3001/articles");
  //   const json = await res.json();
  //   this.setState({ articles: json });
  // }

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
        <ArticleList articles={this.state.articles} />
        <AddArticle addArticle={this.addArticle} />
      </div>
    );
  }
}

export default App;
