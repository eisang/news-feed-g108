import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Article = props => {
  return (
    <div>
      <Card style={{ width: "30%", height: "5%" }}>
        <CardImg src={props.article.img} alt="can you please show yourself" />
        <CardBody>
          <CardTitle>{props.article.title}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;
