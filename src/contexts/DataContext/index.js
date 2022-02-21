import { createContext, useEffect, useReducer } from "react";
import dataReducer from "../../reducers/rootReducer";

export const DataContext = createContext();

const initialState = {
  input: "",
  todos: [],
};

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, initialState, () => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
