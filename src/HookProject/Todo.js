import React, { useContext, memo } from "react";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./contexts/todos.context";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ id, task, completed }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} toggle={toggleIsEditing} task={task} />
      ) : (
        <React.Fragment>
          <Checkbox
            onChange={() => dispatch({ type: "TOGGLE", id })}
            checked={completed}
            tabIndex={-1}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              arial-label="delete"
              onClick={() => dispatch({ type: "REMOVE", id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton arial-label="edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
      )}
    </ListItem>
  );
};

export default memo(Todo);
