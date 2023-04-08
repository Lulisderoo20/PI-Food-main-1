import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { addRecipe, getDiets } from "../../Redux/actions";

export default function Form(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  const { diets } = useSelector((state) => state);
  const [diet, setDiet] = useState([]);
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: 1,
    steps: "",
    diets: [],
  });
  const [errors, setErrors] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: 1,
    steps: "",
    diets: [],
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
    setErrors(
      validation({
        ...recipe,
        [name]: value,
      })
    )
    };
    const handlerSubmit = (event) => {
      event.preventDefault();
      const errores = validation(recipe)
      setErrors(errores)
      if (
        !errors.title &&
        !errors.image &&
        !errors.summary &&
        !errors.healthScore &&
        !errors.steps &&
        diet.length >= 1
        ) {
          console.log(recipe);
          dispatch(addRecipe(recipe));
        }else{
          alert('Todos los campos deben estar completos')
        }
      };
      const mapDiets = () => {
        const filtered = diets.filter((d) => !diet.includes(d.name));
        return filtered.map((di, i) => {
          return (
              <option value={di.name} key={i}>
              {di.name}
            </option>
          );
        });
      };
      const dietHandler = (event) => {
        if(event.target.value){
          setDiet([...diet, event.target.value]);
          setRecipe({...recipe, diets: [...diet, event.target.value]})
          console.log('SUBIDA A LA RECETA');
          event.target.value = "Choose your diets 🥰";
        }
      };
      const deleteDiet = (event) => {
        event.preventDefault();
        setDiet(diet.filter((d) => d !== event.target.value))
      };
      return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={inputChange}
        />
        {errors.title && <p>{errors.title}</p>}
        <br />
        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={inputChange}
        />
        {errors.image && <p>{errors.image}</p>}
        <br />
        <label>Summary: </label>
        <textarea
          type="text"
          name="summary"
          value={recipe.summary}
          onChange={inputChange}
        />
        {errors.summary && <p>{errors.summary}</p>}
        <br />
        <label>HealthScore: {recipe.healthScore} </label>
        <input
          name="healthScore"
          type="range"
          min="1"
          max="100"
          value={recipe.healthScore}
          onChange={inputChange}
        />
        {/* {errors.healthScore && <p>{errors.healthScore}</p>} */}
        <br />
        <label>Steps: </label>
        <textarea
          type="text"
          name="steps"
          value={recipe.steps}
          onChange={inputChange}
        />
        {errors.steps && <p>{errors.steps}</p>}
        <br />
        <label>Diets: </label>
        <select onChange={dietHandler} name="diets">
          <option value="diets" disabled="disable">
            Choose your diets 🥰
          </option>
          {mapDiets()}
        </select >
        {diet?.map((d, i) => {
          return (
            <div key={i}>
              <button>{d}</button>
              <button onClick={deleteDiet}>x</button>

            </div>
          )
        })}
        {errors.diets && <p>{errors.diets}</p>}
        <br />
        <button>Create</button>
      </form>
    </div>
  );
}
