import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/Reducer/tasksReducer";
import TaskList from "./state-management/TaskList";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <TaskList />
    </TasksContext.Provider>
  );
}

export default App;
