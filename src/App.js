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

    //array object  manipulation
    let pt1 = this.state.boards;
    console.log("pt1.length : " + pt1.length);

    let pt2 = pt1.find(board => board.boardSeq === 2);
    console.log("pt2.boardTitle : " + pt2.boardTitle);

    let indexValue = pt1.findIndex(board => board.boardSeq === 2);
    console.log("index : " + indexValue);

    //배열복사 독립적인 배열로 각각
    let pt4 = pt1.slice();

    //배열에서 인덱스로 해당인덱스정보 삭제
    let pt3 = pt4.splice(indexValue, 1);
    console.log("pt3 삭제한정보 : " + JSON.stringify(pt3));
    console.log("pt4 삭제후배열 : " + JSON.stringify(pt4));
    console.log("pt1 삭제후배열 : " + JSON.stringify(pt1));

    //배열에서 값추가 concat pt4에다 pt3을 추가해서 새로운pt5로 생성
    let pt5 = pt4.concat(pt3);
    console.log("pt5 콘캣후배열 : " + JSON.stringify(pt5));
  }

  insertBoard(inTitle, inAuthor) {
    //alert("app.js insert : " + inTitle + inAuthor)
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

    let boards = this.state.boards;
    let deleteIndex = boards.findIndex(board => board.boardSeq === inSeq);
    boards.splice(deleteIndex, 1);
    this.setState({
      boards: boards
    });
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
