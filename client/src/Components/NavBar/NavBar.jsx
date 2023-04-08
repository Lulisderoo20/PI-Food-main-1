import styles from './NavBar.module.css'
import { NavLink, useLocation } from "react-router-dom"
import Form from "../Form/Form";
import image from '../../img/toHomeLogo.png'
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar (){
    const location = useLocation();
    return (
        <div className={styles.nav}>
            <NavLink to='/home'>
                <img src={image} alt='toHome' />
            </NavLink>
            <NavLink to='/about'>
            {location.pathname === '/createfood' || <button>About</button>}
            </NavLink>
            <NavLink to='/createfood'>
                {location.pathname === '/createfood' || <button>Create</button>}
                
            </NavLink>
            {location.pathname !== '/createfood' && location.pathname !== '/about' ? <SearchBar/> : null}
        </div>
    )
}