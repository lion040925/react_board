import React from "react";
import BoardOneRow from "./BoardOneRow";

const BoardList = props => {
  const boardRet = props.boards.map(boardOneRow => {
    return (
      <BoardOneRow
        board={boardOneRow}
        key={boardOneRow.boardSeq}
        onDeleteWithSeq={props.onDeleteWithSeq}
        onSelectOneRow={props.onSelectOneRow}
      />
    );
  });

  return (
    <div>
      <p align="left">게시판</p>
      <table border="1">
        <tbody>
          <tr>
            <td>게시물번호</td>
            <td>게시물제목</td>
            <td>게시물저자</td>
            <td>작성일</td>
            <td>비고</td>
          </tr>
          {boardRet}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
