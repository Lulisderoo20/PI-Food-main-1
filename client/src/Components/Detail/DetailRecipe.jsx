import styles from './DetailRecipe.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailRecipe (){
    const [recipe, setRecipe] = useState({});
    const {idRecipe} = useParams();
   useEffect(() => {
    fetch(`http://localhost:3001/recipe/${idRecipe}`)
    .then(response => response.json())
    .then(rec => {
        if(rec.title){
            setRecipe(rec)
        }else{
            alert('No existe receta con el ID que usted está buscando')
        }
    })
    .catch(err => {
        alert('No existe receta con el ID que usted está buscando')
    })
    return setRecipe({})
   }, [idRecipe])
    return (
        <div>
            <h1>Página Detail</h1>
            <h4>Receta: {recipe.title}</h4>
        </div>
    )
}