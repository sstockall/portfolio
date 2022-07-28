import { NavLink } from 'react-router-dom';
import './SideBar.scss';

function SideBar() {
    return ( 
        <ul className='sidebar'>
            <li className='sidebar__item' to=''>About</li>
            <li className='sidebar__item' to=''>Projects</li>
            <li className='sidebar__item' to=''>Skills</li>
            <li className='sidebar__item' to=''>Contact</li>
        </ul>
     );
}

export default SideBar;