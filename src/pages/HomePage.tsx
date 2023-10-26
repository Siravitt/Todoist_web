import { useState } from 'react';
import '../stylesheets/HomePage.scss'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import useTask from '../hooks/useTask';

const monthNames: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function HomePage() {
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const [addTask, setAddTask] = useState<boolean>(false);

    const { task } = useTask();

    const currentDate = new Date // need to have store and get date from server
    const day = dayNames[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];

    const closeAddTask = (): void => {
        setAddTask(false);
    }

    return (
        <div className='home_container'>
            <div className='home_header'>
                <div className='topic_container'>
                    <span className='topic'>Today</span>
                    <small className='date'>{day + ' ' + date + ' ' + month}</small>
                </div>
            </div>
            {task.length ? <TaskList task={task} /> : null}
            {addTask ? <Form closeAddTask={closeAddTask} />
                :
                <div className='add_task' onClick={() => setAddTask(true)}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                >
                    <div className={`add_task_icon ${mouseOver ? 'bg-primary' : ''}`}>
                        <AddRoundedIcon sx={{ color: `${mouseOver ? '#FFF' : '#DC4B3E'}` }} />
                    </div>
                    <div>Add Task</div>
                </div>}
        </div>
    );
}

export default HomePage;