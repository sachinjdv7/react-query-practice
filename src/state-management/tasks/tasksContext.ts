import { Dispatch, createContext } from "react";
import { Task, TaskAction } from "./TaskProvider";

export interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;
