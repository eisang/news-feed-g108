import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";

class AddArticle extends Component {
  state = {
    title: "",
    img: ""
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleImageChange = e => {
    this.setState({
      img: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const newArticle = {
      title: this.state.title,
      img: this.state.img
    };
    this.props.addArticle(newArticle);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4 style={{ marginTop: "60px", paddingLeft: "30px" }}>
              Add An Article
            </h4>
            <label style={{ marginTop: "20px", paddingLeft: "30px" }}>
              Title
            </label>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                placeholder="title"
                type="text"
                name="title"
                onChange={this.handleTitleChange}
                value={this.state.title}
              />
            </InputGroup>
            <br />
          </div>
          <div>
            <label style={{ paddingLeft: "35px" }}>image</label>
            <InputGroup style={{ bsize: "large", paddingLeft: "30px" }}>
              <Input
                bsize="large"
                placeholder="image"
                type="text"
                name="image"
                onChange={this.handleImageChange}
                value={this.state.img}
              />
            </InputGroup>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Button color="info" style={{ marginLeft: "30px" }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddArticle;
