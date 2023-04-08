import styles from "./Home.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes, getDiets } from "../../Redux/actions";
import { useEffect, useState } from "react";
import loader from '../../img/loader-unscreen.gif'
import Paginado from "../Paginado/Paginado";

export default function HomePage(props) {
  const { myRecipes, loading } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const finalPage = page * 9; //9 indica la cantidad de recetas que voy a mostrar por página
  const startPage = finalPage - 9;
  const actualPage = myRecipes?.slice(startPage, finalPage)
  const totalPages = Math.ceil(myRecipes.length / 9)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
  const handlerPrevPage = () => {
    setPage(page - 1);
  };
  const handlerNextPage = () => {
    setPage(page + 1);
  };
  const handlerPageNumber = (n) => {
    setPage(n)
  }

  return (
    <div className={styles.contenedor}>
      <Paginado 
      totalPages={totalPages}
      page={page}  
      prevPage={handlerPrevPage}
      nextPage={handlerNextPage}
      pageNumber={handlerPageNumber}/>
      {loading ? 
        <img src={loader} alt='Loading' />
        :
        (actualPage.length > 0 
          ?
          actualPage.map((recipe) => {
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
          : <h2>I did not find the recipe you are looking for, but we are working on it 😊</h2>)}
    </div>
  );
}
