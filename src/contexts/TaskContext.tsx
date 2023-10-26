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

const TaskContext = createContext<TaskContextType | null>(null);

function TaskContextProvider({ children }: Props) {
    const [task, setTask] = useState<TaskType[]>([]);

    console.log(task);

    // const getAllTask = ():void => {
    //     setTask([]);
    // }

    const addNewTask = (newTask: TaskType): void => {
        const cloneTask = structuredClone(task);
        cloneTask.push(newTask);
        setTask(cloneTask);
    }

    return <TaskContext.Provider value={{ task, addNewTask }}>
        {children}
    </TaskContext.Provider>
}

export { TaskContext };
export type { TaskContextType, TaskType };
export default TaskContextProvider;