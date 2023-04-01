import { NavLink, useLocation } from "react-router-dom"
import Form from "../Form/Form";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar (){
    const location = useLocation();
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
            <NavLink to='/createfood'>
                <button>Create</button>
            </NavLink>
            {location.pathname !== '/createfood' && location.pathname !== '/about' ? <SearchBar/> : null}
        </div>
    )
}