import { createContext, useState } from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

type TaskType = {
    taskName: string;
    description: string;
    // date: Date;
    // group: string;
    // priority: string;
}

interface TaskContextType {
    task: TaskType[];
    addNewTask: (task: TaskType) => void;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

function TaskContextProvider({ children }: Props) {
    const [task, setTask] = useState<TaskType[]>([]);

    const addNewTask = (addTask: TaskType): void => {
        const newTask = [...task, addTask];
        setTask(newTask);
    }

    return (
        <TaskContext.Provider value={{ task, addNewTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext };
export type { TaskContextType, TaskType };
export default TaskContextProvider;