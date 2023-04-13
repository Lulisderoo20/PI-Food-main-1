import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <h1>PI FOODS</h1>
        <div className={styles.frase}>
          <h4>
            Let's take a walk through the culinary universe and delight our eyes
            with delights for every taste.
          </h4>
        </div>
        <NavLink to="/home">
          <button>Time to eat!🍴</button>
        </NavLink>
      </div>
    </div>
  );
}
