import React from "react";

function TodoList(props) {
  const handleClick = (e) => {
    props.deleteItem(props.index);
  };

  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className="icons">
          <i className="fa-solid fa-trash-can" onClick={handleClick}></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
