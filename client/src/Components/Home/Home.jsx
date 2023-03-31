import styles from './Home.module.css';
import Card from '../Card/Card';

export default function HomePage (props){
    //const {recipes} = props;
    return (
        <div className={styles.container}>
            {/* {recipes.map(recipe => {
                return <Card
                id={recipe.id}
                key={recipe.id}
                name={recipe.name}
                image={recipe.image}
                score={recipe.score}/>
            })} */}
        </div>
    )
}