import React, { Component } from "react";
import BoardOneRow from "./BoardOneRow";

class BoardList extends Component {
  render() {
    return (
      <div>
        <span>BoardList</span>
        <table border="1">
          <tr>
            <td>게시물번호</td>
            <td>게시물제목</td>
            <td>게시물작성자</td>
            <td>게시물작성일</td>
          </tr>
          <BoardOneRow />
        </table>
      </div>
    );
  }
}

export default BoardList;
