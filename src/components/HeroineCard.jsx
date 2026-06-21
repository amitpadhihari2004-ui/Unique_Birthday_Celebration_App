import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../context/UserContext";
import Ana from "../assets/Female/Ana de armas.jpg";
import Denereys from "../assets/Female/Denereys.jpg";
import Haydee from "../assets/Female/Haydee.jpg";
import Wanda from "../assets/Female/Wanda.jpg";
function HeroineCard() {

  const { name } = useContext(UserContext);

  useEffect(() => {

  const speak = () => {

    const voices = speechSynthesis.getVoices();

    const femaleVoice =
      voices.find(
        voice =>
          voice.name.includes("Zira") ||
          voice.name.includes("Samantha") ||
          voice.name.includes("Female")
      ) || voices[0];

    const msg = new SpeechSynthesisUtterance(
      `Hi ${name}! Happy Birthday! May all your dreams come true!`
    );

    msg.voice = femaleVoice;
    msg.rate = 1;
    msg.pitch = 1.2;

    speechSynthesis.speak(msg);
  };

  speak();

  speechSynthesis.onvoiceschanged = speak;

  return () => speechSynthesis.cancel();

}, [name]);
const femaleImages = [Ana, Denereys, Haydee, Wanda];

const randomImage = useMemo(
  () =>
    femaleImages[
      Math.floor(Math.random() * femaleImages.length)
    ],
  []
);
  return (
    <div className="gift-card">

      <img
  src={randomImage}
  alt="Heroine"
  className="gift-image"
/>

      <div className="speech-bubble">

        <h2>Hi {name}! ❤️</h2>

        <p>
          Happy Birthday! 🎂✨
          <br />
          May all your dreams come true 💖
        </p>

      </div>

    </div>
  );
}

export default HeroineCard;