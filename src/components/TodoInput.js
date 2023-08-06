import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  const handleClick = () => {
    props.addList(inputText);
    setInputText("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        className="input-box-todo"
        placeholder="Enter your todo"
        onChange={handleChange}
        onKeyDown={handleEnterPress}
      />
      <button onClick={handleClick} className="add-btn">
        +
      </button>
    </div>
  );
}

export default TodoInput;
