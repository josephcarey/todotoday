import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line max-lines-per-function
const App = () => {
  // Hooks
  const [todos, setTodos] = useState([{ id: 66 }]);
  const [currentlyEditing, setCurrentlyEditing] = useState(0);
  const [newToDoText, setNewToDoText] = useState("");

  useEffect(() => {
    getToDos();
  }, []);

  // Functions
  const getToDos = () => {
    axios.get("api/todo").then((response) => {
      setTodos(response.data);
    });
  };

  const addToDo = (textForToDoToAdd) => {
    axios.post("api/todo", { newToDoText: textForToDoToAdd }).then(() => {
      getToDos();
    });
  };

  const deleteToDo = (idToDelete) => {
    axios.delete("api/todo/" + idToDelete).then(() => {
      getToDos();
    });
  };

  const handleAddClick = () => {
    console.log("add button clicked, text:", newToDoText);
    addToDo(newToDoText);
  };

  const handleDeleteClick = (deleteId) => {
    console.log("delete button clicked, id:", deleteId);
    deleteToDo(deleteId);
  };

  const handleEditClick = (editId) => {
    console.log("edit button clicked, id:", editId);
    setCurrentlyEditing(editId);
  };

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
              <button onClick={() => handleEditClick(todo.id)}>
                {currentlyEditing === todo.id ? "Currently Editing" : "Edit"}
              </button>
              <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={newToDoText}
        onChange={(e) => setNewToDoText(e.target.value)}
      />
      <button onClick={() => handleAddClick()}>Add To Do</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default App;
