import React from "react";

const BoardOneRow = props => {
  return (
    <tr
      onClick={() => {
        props.onSelectOneRow(props.board);
      }}
    >
      <td>{props.board.boardSeq}</td>
      <td>{props.board.boardTitle}</td>
      <td>{props.board.boardAuthor}</td>
      <td>{props.board.boardRgstDate}</td>
      <td>
        <input
          type="button"
          value="삭제"
          onClick={() => {
            props.onDeleteWithSeq(props.board.boardSeq);
          }}
        />
      </td>
    </tr>
  );
};

export default BoardOneRow;
