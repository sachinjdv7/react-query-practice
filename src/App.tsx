import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import TaskProvider from "./state-management/TaskProvider";

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
