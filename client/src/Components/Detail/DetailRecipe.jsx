import styles from "./DetailRecipe.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from '../../img/loader-unscreen.gif'
import { getDetail } from "../../Redux/actions";

export default function DetailRecipe() {
  const { idRecipe } = useParams();
  const {detail, loading} = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDetail(idRecipe))
  }, [dispatch, idRecipe])
  const regExp = /<[^>]*>/g;
  return (
    <div>
      <NavLink>
        <button>⬅</button>
      </NavLink>
      {loading ? <div className={styles.loader}><img src={loader} alt='Loading'/> </div> :
      (<div>
      <h1>{detail.title}</h1>
      <img src={detail.image} alt={detail.title} />
      <p>{detail.summary ? detail.summary.replace(regExp, "") : ""}</p>
      <h3>How To</h3>
      {detail.steps ? (
        <p>{detail.steps.replace(regExp, "")}</p>
      ) : <p>There are no instructions to follow for this recipe, but we're
      working on it!</p>}
      <h4>HealthScore: {detail.healthScore}</h4>
      <h4>Diets: {detail.diets?.map((diet, i) => <ul key={i}>{diet.name.charAt(0).toUpperCase() + diet.name.slice(1)}</ul>)}</h4>
      </div>)}
    </div>
  );
}
