import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const Article = props => {
  //   const { img, title } = article;
  console.log("this", props.article.img);
  return (
    <div>
      <Card style={{ width: "60%", height: "25%" }}>
        <CardImg src={props.article.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.article.title}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;

// const Article = ({ article }) => {
//   //   const { img, title } = article;
//   //   console.log("this is", img);
//   return (
//     <div>
//       <Card>
//         <CardImg
//           top
//           width="70%"
//           src={article.article.img}
//           alt="Card image cap"
//         />
//         <CardBody>
//           <CardTitle>{article.article.title}</CardTitle>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Article;
