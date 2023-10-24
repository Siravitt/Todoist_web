import { useNavigate } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import '../stylesheets/Header.scss';

type Props = {
    toggleMenu: () => void;
}

function Header({ toggleMenu }: Props): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='header_left'>
                <div className='icon_btn' onClick={toggleMenu}>
                    <MenuRoundedIcon sx={{ color: '#fff' }} />
                </div>
                <div className='icon_btn' onClick={() => navigate('/today')}>
                    <HomeRoundedIcon sx={{ color: '#fff' }} />
                </div>
            </div>
            <div className='header_right'>
                <div className='icon_btn'>
                    <AddRoundedIcon sx={{ color: '#fff' }} />
                </div>
                <div className='icon_btn'>
                    <NotificationsRoundedIcon sx={{ color: '#fff' }} />
                </div>
                <div className='profile_img'>
                    {/* IMAGE */}
                </div>
            </div>
        </div>
    );
}

export default Header;