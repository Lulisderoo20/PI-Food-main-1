import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'


export default function Card (props){
    const navigate = useNavigate();
    const toDetail = () => {
        navigate(`/detailrecipe/${props.id}`)
    }
    const { name, image, healthScore, diets } = props
    return (
        <div key={props.id} onClick={toDetail} className={styles.card}>
            <h6>{healthScore}</h6>
            <img src={image} alt={name} className={styles.image}/>
            <h3>{name}</h3>
            <br />
            {diets?.map((diet, i) => {
                return (
                    <div key={i} className={styles.diets}>
                        <span className={styles.diet}>{diet.charAt(0).toUpperCase() + diet.slice(1)}</span>
                    </div>
                )
            })}
        </div>
    )
}