import React, { Component } from "react";

class BoardInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMod: false,
      inTitle: "제목",
      inAuthor: "no author",
      inSeq: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onInsert = () => {
    this.props.onInsertWithTitle(this.state.inTitle, this.state.inAuthor);
  };

  onUpdate = () => {
    this.props.onUpdateWithSeq(
      this.state.inTitle,
      this.state.inAuthor,
      this.state.inSeq
    );
  };

  setupModifyForm = selectedBoard => {
    console.log("selectedBoard :" + JSON.stringify(selectedBoard));
    console.log("selectedBoard :" + selectedBoard); // object로 찍히네여..

    this.setState({
      inTitle: selectedBoard.boardTitle,
      inAuthor: selectedBoard.boardAuthor,
      inSeq: selectedBoard.boardSeq
    });
  };

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps : " + JSON.stringify(this.props));
    this.setState({
      isMod: true
    });
    //여서 setState하니 이전값이 세팅되는 이상현상이 ㅠㅠ
  }

  getDerivedStateFromProps(nextProps) {
    //요 라이프사이클은 또모지..
    console.log("getDerivedStateFromProps : " + nextProps);
  }

  render() {
    if (this.state.isMod) {
      let selectedBoard = this.props.selectedBoard;
      this.setupModifyForm(selectedBoard);
      this.setState({
        isMod: false
      });
    }

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
        <input type="button" onClick={this.onInsert} value="게시물추가" />{" "}
        &nbsp;
        <input type="button" onClick={this.onUpdate} value="게시물수정" />
      </div>
    );
  }
}

export default BoardInputForm;
