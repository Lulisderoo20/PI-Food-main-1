import styles from "./Home.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../Redux/actions";
import { useEffect } from "react";

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
  const { myRecipes } = useSelector((state) => state);
  return (
    <div className={styles.contenedor}>
      {myRecipes
        ? myRecipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <Card
                  id={recipe.id}
                  name={recipe.title}
                  image={recipe.image}
                  diets={recipe.diets}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
