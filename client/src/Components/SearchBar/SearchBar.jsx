import { useDispatch } from "react-redux"
import { useState } from "react"
import { getAllRecipes, getQueryRecipe } from "../../Redux/actions";

export default function SearchBar (props){
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const searchHandler = (event) =>{
        const {value} = event.target
        if(value){
            dispatch(getQueryRecipe(value))
        }else{
            dispatch(getAllRecipes())
            
        }
    }
    const handlerInput = (event) => {
        if(!event.target.value){
            dispatch(getAllRecipes());
            setInput('')
        }else{
            setInput(event.target.value)
        }
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchHandler(event)
        }
      }
    return (
        <div>
            <input type="text" name='search' placeholder="Recipe" value={input} onChange={handlerInput} onKeyDown={handleKeyPress}/>
            <button onClick={searchHandler} value={input}>Search</button>
        </div>
    )
}