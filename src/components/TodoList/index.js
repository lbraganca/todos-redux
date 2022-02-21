import { Typography, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoDetails from "../TodoDetails";
import useStyles from "./useStyles";

export default function TodoList() {
  const styles = useStyles();
  const todos = useSelector((state) => state.todos.value);

  return (
    <Container>
      {todos.length ? (
        <div className={styles.todoList}>
          {todos.map((todo) => (
            <TodoDetails key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <Typography className={styles.empty}>
          Feels lonely here, start adding TODOs
        </Typography>
      )}
    </Container>
  );
}
