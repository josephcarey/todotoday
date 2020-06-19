import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line max-lines-per-function
const App = () => {
  const [todos, setTodos] = useState([{ id: 66 }]);

  const getData = () => {
    axios.get("api/todo").then((response) => {
      setTodos(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <header>
        <h1>TodoToday</h1>
      </header>
      <h2>To Dos:</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}. {todo.text}
            </li>
          );
        })}
      </ul>
      <input type="text" />
      <button>Add To Do</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default App;
