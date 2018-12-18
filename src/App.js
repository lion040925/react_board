import React, { Component } from "react";
import "./App.css";
import BoardList from "./BoardList";
import BoardInputForm from "./BoardInputForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: "v001",
      boards: [
        {
          boardSeq: 1,
          boardTitle: "게시물제목",
          boardContents: "게시물내용",
          boardAuthor: "마이클",
          boardRgstDate: "2018-12-13"
        },
        {
          boardSeq: 2,
          boardTitle: "게시물제목2",
          boardContents: "게시물내용",
          boardAuthor: "앤디",
          boardRgstDate: "2018-12-13"
        },
        {
          boardSeq: 3,
          boardTitle: "게시물제목3",
          boardContents: "게시물내용",
          boardAuthor: "다니엘",
          boardRgstDate: "2018-12-13"
        }
      ]
    };
  }

  insertBoard(inTitle, inAuthor) {
    //alert("app.js : " + inTitle + inAuthor)
    let inSeq = this.state.boards.length + 2;
    let now = new Date();
    let inRgstDate = now.toISOString().slice(0, 10);

    this.setState({
      boards: this.state.boards.concat({
        boardSeq: inSeq,
        boardTitle: inTitle,
        boardAuthor: inAuthor,
        boardRgstDate: inRgstDate
      })
    });
  }

  deleteBoard(inSeq) {
    alert("app.js delete : " + inSeq);
  }

  render() {
    return (
      <div className="App">
        <h2> React Board </h2>
        <BoardList
          boards={this.state.boards}
          onDeleteWithSeq={inSeq => this.deleteBoard(inSeq)}
        />
        <br />
        <BoardInputForm
          onInsertWithTitle={(inTitle, inAuthor) =>
            this.insertBoard(inTitle, inAuthor)
          }
        />
      </div>
    );
  }
}

export default App;
