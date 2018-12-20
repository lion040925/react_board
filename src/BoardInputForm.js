import React, { Component } from "react";

class BoardInputForm extends Component {
  constructor(props) {
    super(props);
    const selectedBoard = this.props.selectedBoard;
    console.log("selectedBoard: " + selectedBoard);
    this.state = {
      inTitle: "제목을입력해주세요.",
      inAuthor: "no author"
    };

    if (selectedBoard === null) {
      console.log("if: " + selectedBoard);
    } else {
      console.log("else: " + selectedBoard);
      this.setState({
        inTitle: selectedBoard.boardTitle,
        inAuthor: selectedBoard.boardAuthor
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onInsert = () => {
    this.props.onInsertWithTitle(this.state.inTitle, this.state.inAuthor);
  };

  render() {
    return (
      <div align="left" border="1">
        게시물제목 :
        <input
          type="text"
          name="inTitle"
          size="15"
          onChange={this.handleChange}
          value={this.state.inTitle}
        />
        <br />
        게시물저자 :
        <input
          type="text"
          name="inAuthor"
          size="10"
          onChange={this.handleChange}
          value={this.state.inAuthor}
        />
        <br />
        <input type="button" onClick={this.onInsert} value="게시물추가" />
      </div>
    );
  }
}

export default BoardInputForm;
