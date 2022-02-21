import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { updateTodo, deleteTodo } from "../../slices/todosSlice";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { useDispatch } from "react-redux";

export default function TodoDetails({ todo }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper className={styles.root}>
      {todo.edit ? (
        <>
          <TextField
            fullWidth
            defaultValue={todo.edit}
            onChange={(e) =>
              dispatch(updateTodo({ ...todo, edit: e.target.value }))
            }
            className={styles.text}
          />
          <IconButton
            color="primary"
            onClick={() =>
              dispatch(updateTodo({ ...todo, content: todo.edit, edit: null }))
            }
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(updateTodo({ ...todo, edit: null }))}
            color="primary"
          >
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography className={styles.text}>{todo.content}</Typography>
          <IconButton
            color="primary"
            onClick={() => {
              dispatch(updateTodo({ ...todo, edit: todo.content }));
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Paper>
  );
}
