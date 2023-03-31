import styles from "./Landing.module.css"
import { NavLink } from "react-router-dom"

export default function LandingPage (){
    return (
        <div className={styles.landing}>
            <div className={styles.container}>
                <h1>PI FOODS</h1>
                <NavLink to='/home'>
                <button>GO Home!🍽</button>
                </NavLink>
            </div>
        </div>
    )
}