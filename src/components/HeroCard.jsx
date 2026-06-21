import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../context/UserContext";
import Berlin from "../assets/male/Berlin.jpg";
import Ironman from "../assets/male/Ironman.jpg";
import Thor from "../assets/male/Thor.jpg";
import Virat from "../assets/male/virat.jpg";
function HeroCard() {

  const { name } = useContext(UserContext);

  useEffect(() => {

  const speak = () => {

    const voices = speechSynthesis.getVoices();

    const maleVoice =
      voices.find(
        voice =>
          voice.name.includes("David") ||
          voice.name.includes("Guy") ||
          voice.name.includes("Male")
      ) || voices[0];

    const msg = new SpeechSynthesisUtterance(
      `Hi ${name}! Happy Birthday! Have an amazing year ahead!`
    );

    msg.voice = maleVoice;
    msg.rate = 1;
    msg.pitch = 0.8;

    speechSynthesis.speak(msg);
  };

  speak();

  speechSynthesis.onvoiceschanged = speak;

  return () => speechSynthesis.cancel();

}, [name]);
const maleImages = [Berlin, Ironman, Thor, Virat];

const randomImage = useMemo(
  () => maleImages[Math.floor(Math.random() * maleImages.length)],
  []
);
  return (
    <div className="gift-card">

     <img
  src={randomImage}
  alt="Hero"
  className="gift-image"
/>

      <div className="speech-bubble">

        <h2>Hi {name}! 💙</h2>

        <p>
          Happy Birthday! 🎂🎉
          <br />
          Have an amazing year ahead ✨
        </p>

      </div>

    </div>
  );
}

export default HeroCard;