import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import DetailRecipe from "./Components/Detail/DetailRecipe";
import LandingPage from "./Components/Landing Page/Landing";
import HomePage from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About"
import Form from "./Components/Form/Form";

function App() {
  const location = useLocation();
  return (
    <div>
      <div>{location.pathname !== "/" && <NavBar/>}</div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />;
        <Route path="/home" element={<HomePage />} />;
        <Route path="/detailrecipe/:id" element={<DetailRecipe />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/createfood" element={<Form/>}/>;
      </Routes>
    </div>
  );
}

export default App;
