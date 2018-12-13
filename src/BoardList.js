import React, { Component } from "react";
import BoardOneRow from "./BoardOneRow";

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: "v001",
      boards: [
        {
          boardSeq: 1,
          boardTitle: "게시물제목",
          boardContents: "게시물내용",
          boardAuthor: "게시물저자",
          boardRgstDate: "2018.12.13"
        },
        {
          boardSeq: 2,
          boardTitle: "게시물제목2",
          boardContents: "게시물내용",
          boardAuthor: "게시물저자",
          boardRgstDate: "2018.12.13"
        },
        {
          boardSeq: 3,
          boardTitle: "게시물제목3",
          boardContents: "게시물내용",
          boardAuthor: "게시물저자",
          boardRgstDate: "2018.12.13"
        }
      ]
    };
  }

  render() {
    let boardsTotCnt = this.state.boards.length;
    let boards = this.state.boards;
    let boardList = boards.map(function(b) {
      return (
        b.boardSeq + b.boardTitle + b.boardAuthor + b.boardRgstDate + "<br/>"
      );
    });

    // for (let i = 0; i < boardsTotCnt; i++) {
    //   boards[i];
    // }

    return (
      <div>
        <span>BoardList cnt : {boardsTotCnt}</span>
        <p>{boardList}</p>
        <table border="1">
          <tr>
            <td>게시물번호</td>
            <td>게시물제목</td>
            <td>게시물저자</td>
            <td>게시물작성일</td>
          </tr>
          <BoardOneRow />
        </table>
      </div>
    );
  }
}

export default BoardList;
