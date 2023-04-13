import styles from "./Form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { addRecipe } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    );
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipe));
    alert("✅Recipe created successfully!!✅");
    navigate("/home");
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
    if (event.target.value) {
      setDiet([...diet, event.target.value]);
      setRecipe({ ...recipe, diets: [...diet, event.target.value] });
      console.log("SUBIDA A LA RECETA");
      event.target.value = "Choose your diets 🥰";
    }
  };
  const deleteDiet = (event) => {
    setDiet(diet.filter((d) => d !== event));
    setRecipe({
      ...recipe,
      diets: recipe.diets.filter((d) => d !== event),
    });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={inputChange}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={inputChange}
        />
        {errors.image && <p className={styles.error}>{errors.image}</p>}
        <label>Summary: </label>
        <textarea
          type="text"
          name="summary"
          value={recipe.summary}
          onChange={inputChange}
        />
        {errors.summary && <p className={styles.error}>{errors.summary}</p>}
        <label>HealthScore: </label>
        <input
          id="range-input"
          name="healthScore"
          type="range"
          min="1"
          max="100"
          value={recipe.healthScore}
          onChange={inputChange}
        />
        <label>Steps: </label>
        <textarea
          type="text"
          name="steps"
          value={recipe.steps}
          onChange={inputChange}
        />
        {errors.steps && <p className={styles.error}>{errors.steps}</p>}
        <label>Diets: </label>
        <select
          onChange={dietHandler}
          name="diets"
          defaultValue="Choose your diets 🥰"
        >
          <option disabled value="Choose your diets 🥰">
            Choose your diets 🥰
          </option>
          {mapDiets()}
        </select>
        <div className={styles.formDiets}>
          {diet?.map((d, i) => {
            return (
              <button type="button" onDoubleClick={() => deleteDiet(d)}>
                {d}
              </button>
            );
          })}
        </div>
        {errors.diets && <p className={styles.error}>{errors.diets}</p>}
        {!errors.title &&
        !errors.image &&
        !errors.summary &&
        !errors.healthScore &&
        !errors.steps &&
        diet.length >= 1 ? (
          <button className={styles.createButton}>Create</button>
        ) : (
          <button disabled className={styles.disabledButton}>
            Create
          </button>
        )}
      </form>
      <div className={styles.card}>
        <h6>{recipe.healthScore}</h6>
        <img src={recipe.image} alt="" className={styles.image} />
        <h3>{recipe.title}</h3>
        <br />
        {recipe.diets.map((diet) => {
          return (
            <div className={styles.diets}>
              <span className={styles.diet}>
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
