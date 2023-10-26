import '../stylesheets/Task.scss'

type Props = {
    taskName: string;
    description: string;
}

function Task({ taskName, description }: Props): JSX.Element {
    return (
        <div className='all_task_container'>
            <div className='task_container'>
                <div className='checkbox_container'>
                    <input type="checkbox" className='checkbox' />
                </div>
                <div className='task_content_container'>
                    <small className='task_name'>{taskName}</small>
                    <div className='task_description'>{description}</div>
                </div>
            </div>
            <hr className='hr'/>
        </div>
    );
}

export default Task;