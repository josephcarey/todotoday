import React, { useState, useEffect } from "react";
import axios from "axios";

// Material-UI
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Paper,
} from "@material-ui/core";

import Header from "../Header/Header";
import ToDoList from "../ToDoList/ToDoList";
import ToDo from "../ToDo/ToDo";
import ToDoAdd from "../ToDoAdd/ToDoAdd";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#e0e0e0" },
    secondary: { main: "#ffeb3b" },
    // type: "dark",
  },
  // typography: {
  //   useNextVariants: true,
  // },
});

// eslint-disable-next-line max-lines-per-function
const App = () => {
  // Hooks
  const [todos, setTodos] = useState([{ id: 0 }]);
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

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Header text="Todo Today" />
        <ToDoList title="To Dos:">
          {todos.map((todo) => {
            return (
              <ToDo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                editToDo={editToDo}
                deleteToDo={deleteToDo}
              />
            );
          })}
          <ToDoAdd addToDo={addToDo} />
        </ToDoList>
        {/* <input
          type="text"
          value={newToDoText}
          onChange={(e) => setNewToDoText(e.target.value)}
        />
        <button onClick={() => handleAddClick()}>Add To Do</button> */}
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
