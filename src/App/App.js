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

  const editToDo = (newToDo) => {
    axios.put("api/todo/", { newToDo: newToDo }).then(() => {
      getToDos();
    });
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
                todo={todo}
                editToDo={editToDo}
                deleteToDo={deleteToDo}
              />
            );
          })}
          <ToDoAdd addToDo={addToDo} />
        </ToDoList>
        {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
