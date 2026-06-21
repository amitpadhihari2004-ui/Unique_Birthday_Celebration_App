import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ZodiacCard() {

  const { zodiac } = useContext(UserContext);

  return (
    <div className="zodiac-card">

      <h2>{zodiac}</h2>

      <p>💼 Career : Success</p>

      <p>❤️ Love : Happiness</p>

      <p>🌿 Health : Good</p>

      <p>⚡ Confidence : High</p>

    </div>
  );
}

export default ZodiacCard;