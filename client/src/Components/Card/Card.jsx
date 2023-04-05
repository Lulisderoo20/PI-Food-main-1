import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'
export default function Card (props){
    const navigate = useNavigate();
    const toDetail = () => {
        navigate(`/detailrecipe/${props.id}`)
    }
    const { name, image, diets } = props
    return (
        <div key={props.id} onClick={toDetail} className={styles.card}>
            <img src={image} alt={name} className={styles.image}/>
            <h2>{name}</h2>
            <div className={styles.divData}>
            <h4>{diets ? diets.map((diet, i) => {
                return (
                    <div key={i}>
                        <h4>{diet}</h4>
                    </div>
                )
            }): null}</h4>
            </div>
        </div>
    )
}