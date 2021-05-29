import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // sabmit時のリロードをキャンセルする
    e.preventDefault();

    let valueReplace = value.replace(/\s+/g, "");

    if (valueReplace === "") {
      alert("文字を入力してください。");
      return;
    }

    addTodo(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
