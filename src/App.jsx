import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./assets/components/header/Header";
import { Main } from "./assets/components/home/Home";
import { Footer } from "./assets/components/footer/Footer";

const coloresAbsolutos = [
  "#FF0000", // Rojo
  "#00FF00", // Verde
  "#0000FF", // Azul
  "#FFFF00", // Amarillo
  "#FF00FF", // Magenta
  "#00FFFF", // Cian
  "#000000", // Negro
  "#FFFFFF", // Blanco
  "#808080", // Gris
  "#800000", // Marrón oscuro
  "#808000", // Oliva
  "#800080", // Púrpura
  "#008080", // Verde azulado
  "#C0C0C0", // Plata
  "#FFA500", // Naranja
  "#A52A2A", // Marrón
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [cardColor, setCardColor] = useState("#34495e");
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main 
        likes={likes} setLikes={setLikes} 
        dislikes={dislikes} setDislikes={setDislikes} 
        cardColor={cardColor} setCardColor={setCardColor} 
        seconds={seconds} setIsCounting={setIsCounting} 
      />
      <Footer />
    </div>
  );
}

export default App;
