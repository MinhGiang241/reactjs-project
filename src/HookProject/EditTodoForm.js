import React, { useContext } from "react";
import useInputState from "./hooks/UseInputState";
import { TextField } from "@material-ui/core";
import { DispatchContext } from "./contexts/todos.context";

const EditTodoForm = ({ id, task, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id, newTask: value });
        reset();
        toggle(id);
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        label="Edit To do"
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
