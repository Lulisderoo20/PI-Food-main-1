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
            <img src={image} alt={name} className={styles.image}/>
            <h3>{name}</h3>
            <h6>{healthScore}</h6>
            <div className={styles.divData}>
            {diets?.map((diet, i) => {
                return (
                    <div key={i}>
                        <h4>{diet.charAt(0).toUpperCase() + diet.slice(1)}</h4>
                    </div>
                )
            })}
            </div>
        </div>
    )
}