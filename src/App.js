import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: "課題をする",
      id: "task",
    },
    {
      content: "洗濯をする",
      id: "landry",
    },
    {
      content: "電話をする",
      id: "call",
    },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
    // todos={todos}っていうのは、
    // {todos}という値を渡している、、、todos という名前をつけて。
    // a={todos}でもOK、、、そのかわり子要素で受け取るとき（使うとき）は a と呼び出して使う。
  );
};

export default App;
