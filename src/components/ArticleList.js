import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  const articleList =
    articles.length > 0
      ? articles.map(article => {
          return <Article key={article.id} article={article} />;
        })
      : null;
  return <div>{articleList}</div>;
};

export default ArticleList;
