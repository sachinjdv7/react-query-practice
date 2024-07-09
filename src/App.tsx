import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/Reducer/tasksReducer";
import TaskList from "./state-management/TaskList";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/Reducer/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <TaskList />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
