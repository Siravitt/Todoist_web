import TodayIcon from '@mui/icons-material/Today';
import { useState } from 'react';
import '../stylesheets/Form.scss'
import { TaskType } from '../contexts/TaskContext';
import useTask from '../hooks/useTask';

type Props = {
    closeAddTask: () => void;
}

function Form({ closeAddTask }: Props): JSX.Element {
    const { addNewTask } = useTask();
    const [input, setInput] = useState<TaskType>({
        taskName: '',
        description: ''
    });

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const addTaskHandler = (): void => {
        // need validate input
        addNewTask(input);
        closeAddTask();
    }
    return (
        <div className="form_container">
            <input className='input_task_name'
                type="text"
                placeholder="Task name"
                name="taskName"
                value={input.taskName}
                onChange={changeInput}
            />
            <input className='input_description'
                type="text"
                placeholder="Description"
                name="description"
                value={input.description}
                onChange={changeInput}
            />
            <hr />
            <div className='btn_container'>
                <div className='btn-date'>
                    <TodayIcon fontSize='small'/>
                    <div>Today</div>
                </div>
                <div className='add-cancel'>
                    <div className='btn_cancel' onClick={closeAddTask}>Cancel</div>
                    <div className='btn_add_task' onClick={addTaskHandler}>Add task</div>
                </div>
            </div>
        </div>
    );
}

export default Form;