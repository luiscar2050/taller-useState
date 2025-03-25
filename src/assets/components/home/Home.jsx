import "./Home.css";
import img from "../img/foto_publicacion.jpg";

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#000000", "#FFFFFF", "#808080", "#800000",
  "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const Main = ({ likes, setLikes, dislikes, setDislikes, cardColor, setCardColor, seconds, setIsCounting }) => {
  
  const cambiarColor = () => {
    const colorAleatorio = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setCardColor(colorAleatorio);
    alert(`Color elegido: ${colorAleatorio}`);
  };

  return (
    <div className="main">
      <div className="card-publication" style={{ backgroundColor: cardColor }}>
        <img src={img} alt="Foto publicación" />

        <div className="like-dislike-container">
          <p className="text-content">¿Qué te pareció esta publicación?</p>
          <div className="icons-box">
            <div className="icons">
              <label className="btn-label">
                <span className="like-text-content">{likes}</span>
                <input className="input-box" type="checkbox" onClick={() => setLikes(likes + 1)} />
                👍
              </label>
            </div>
            <div className="icons">
              <label className="btn-label">
                <input className="input-box" type="checkbox" onClick={() => setDislikes(dislikes + 1)} />
                👎
                <span className="dislike-text-content">{dislikes}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={cambiarColor}>Generar Color</button>

      
        <p>Tiempo: {seconds} s</p>
        <button onClick={() => setIsCounting(true)}>Iniciar</button>
        <button onClick={() => setIsCounting(false)}>Parar</button>
      
    </div>
  );
};
