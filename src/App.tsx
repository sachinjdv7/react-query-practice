import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import NavBar from "./state-management/NavBar";
import { TaskList, TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <TaskList />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
