import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line max-lines-per-function
const App = () => {
  // Hooks
  const [todos, setTodos] = useState([{ id: 0 }]);
  const [currentlyEditing, setCurrentlyEditing] = useState(0);
  const [currentlyEditingText, setCurrentlyEditingText] = useState("");
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

  const editToDo = (idToEdit, newText) => {
    axios
      .put("api/todo/", { idToEdit: idToEdit, newText: newText })
      .then(() => {
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

  const handleEditClick = (editId, toEditText) => {
    console.log("edit button clicked, id:", editId);
    setCurrentlyEditing(editId);
    setCurrentlyEditingText(toEditText);
  };

  const handleSaveClick = (saveId, saveText) => {
    console.log("save button clicked, data:", saveId, saveText);
    editToDo(saveId, saveText);
    setCurrentlyEditing(0);
    setCurrentlyEditingText("");
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
              {currentlyEditing === todo.id ? (
                <>
                  {todo.id}.
                  <input
                    type="text"
                    value={currentlyEditingText}
                    onChange={(e) => setCurrentlyEditingText(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      handleSaveClick(todo.id, currentlyEditingText)
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo.id}. {todo.text}
                  <button onClick={() => handleEditClick(todo.id, todo.text)}>
                    Edit
                  </button>
                </>
              )}
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
