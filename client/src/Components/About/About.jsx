import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import aboutIMG from "../../img/guidoslack.jpeg";
export default function HomePage(props) {
  return (
    <div className={styles.boton}>
      <NavLink to="/home">
        <button>⬅</button>
      </NavLink>
      <div className={styles.parrafo}>
        <img src={aboutIMG} alt="Guido" />
        <h2>About me</h2>
        <p>
          HELLO! My name is Guido José Dealbera, I'm 28 years old and I'm a
          programmer, a sports enthusiast and a future math teacher. I entered
          the world of programming in late 2022 after a friend recommended the
          Henry Bootcamp to me! At first, I had many doubts and insecurities,
          but I can say that after a little over four months, I have learned a
          lot. Today, I have several goals for the future. One of them is to
          become an instructor at Henry since I'm passionate about teaching and
          I can say that I really like programming. Another goal would be to
          work for a company based in another country, to be able to travel and
          experience many different places and cultures. Currently, I am in the
          role of Teaching Assistant (T.A) within Henry, as I love to interact
          with people, I have a lot of ease in socializing with anyone, and I
          really enjoy being connected with people from all over Latin America
          sharing conversations that will be unforgettable for me. It's really
          exciting to delve into the I.T business and continue learning a little
          more every day and be able to do things that I never thought I was
          capable of doing. I hope you enjoy the work I have done to complete my
          Individual Project and that the project meets your expectations. 💛🖤
        </p>
      </div>
    </div>
  );
}
