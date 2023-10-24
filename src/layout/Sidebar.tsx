import { useLocation, useNavigate } from 'react-router-dom';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import '../stylesheets/Sidebar.scss';

type Props = {
    showSideBar: boolean;
}

function Sidebar({ showSideBar }: Props): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();

    const clickMenuHandler = (pathname: string): void => {
        navigate(pathname)
    }
    
    return (
        <>
            {showSideBar && <div className='sidebar_container fade_in'>
                <div className={`list ${location.pathname === '/inbox' ? 'list-active' : ''}`} onClick={()=>clickMenuHandler('inbox')}>
                    <InboxRoundedIcon sx={{ color: '#246EE0' }} />
                    <div>Inbox</div>
                </div>
                <div className={`list ${location.pathname === '/today' ? 'list-active' : ''}`} onClick={()=>clickMenuHandler('today')}>
                    <CalendarTodayRoundedIcon sx={{ color: '#4B9144' }} />
                    <div>Today</div>
                </div>
                <div className={`list ${location.pathname === '/upcoming' ? 'list-active' : ''}`} onClick={()=>clickMenuHandler('upcoming')}>
                    <CalendarMonthRoundedIcon sx={{ color: '#692DC2' }} />
                    <div>Upcoming</div>
                </div>
            </div>}
        </>
    );
}

export default Sidebar;