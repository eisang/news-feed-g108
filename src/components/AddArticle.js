import React, { Component } from "react";

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
          {/* <h3>add article</h3> */}
          <div>
            <h4>add article</h4>
            <label style={{ paddingLeft: "10px" }}>Title</label>
            <input
              className="my-2 mx-5"
              type="text"
              name="title"
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          </div>

          <div style={{ marginTop: "2px" }}>
            <label style={{ paddingLeft: "10px" }}>img</label>
            <input
              className="my-3 mx-5"
              type="text"
              name="image"
              onChange={this.handleImageChange}
              value={this.state.img}
            />
          </div>

          <button className="">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddArticle;
