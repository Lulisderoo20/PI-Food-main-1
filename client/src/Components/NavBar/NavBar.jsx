import { NavLink } from "react-router-dom"

export default function NavBar (){
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
        </div>
    )
}