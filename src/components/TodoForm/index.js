import { Container, IconButton, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../slices/inputSlice";
import { addTodo } from "../../slices/todosSlice";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./useStyles";

export default function TodoForm() {
  const styles = useStyles();
  const input = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    dispatch(updateInput(""));
  };

  return (
    <Container>
      <form
        className={styles.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
          fullWidth
          label="Content"
          className={styles.field}
          required
        ></TextField>
        <IconButton
          disabled={!input}
          variant="contained"
          type="submit"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </form>
    </Container>
  );
}
