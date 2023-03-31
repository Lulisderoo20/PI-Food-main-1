import styles from './About.module.css'
import { NavLink } from 'react-router-dom'

export default function HomePage (props){
    return (
        <div className={styles.container}>
            <NavLink to='/home'>
                <button>Back</button>
            </NavLink>
            <h1>ABOUT</h1>
        </div>
    )
}