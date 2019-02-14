import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <Article key={article.id} article={article} />
  ));
  return <div>{articleList}</div>;
};

export default ArticleList;
