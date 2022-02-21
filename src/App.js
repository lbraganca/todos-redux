import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import theme from "./themes/main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
