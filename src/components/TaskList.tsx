import { TaskType } from '../contexts/TaskContext';
import '../stylesheets/TaskList.scss';
import Task from './Task';

type Props = {
    task: TaskType[]
}

function TaskList({ task }: Props): JSX.Element {
    return (
        <div className='tasklist_container'>
            {task.map((el: TaskType, idx: number) => <Task key={idx} taskName={el.taskName} description={el.description} />)}
        </div>
    );
}

export default TaskList;