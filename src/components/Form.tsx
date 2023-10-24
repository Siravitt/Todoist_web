import { useState } from 'react';
import '../stylesheets/Form.scss'
import { Task } from '../contexts/TaskContext';
import useTask from '../hooks/useTask';

type Props = {
    closeAddTask: () => void;
}

function Form({ closeAddTask }: Props): JSX.Element {
    const { addNewTask } = useTask();
    const [input, setInput] = useState<Task>({
        taskName: '',
        description: ''
    });

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const addTaskHandler = (): void => {
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
                <div className='btn_cancel' onClick={closeAddTask}>Cancel</div>
                <div className='btn_add_task' onClick={addTaskHandler}>Add task</div>
            </div>
        </div>
    );
}

export default Form;