import { useContext } from "react";
import { TaskContext, TaskContextType } from "../contexts/TaskContext";

function useTask(): TaskContextType | null {
    return useContext(TaskContext);
}

export default useTask;