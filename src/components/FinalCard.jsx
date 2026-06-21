import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";
import finalSong from "../assets/songs/final_song_party.mp3";

function FinalCard() {
  const { name, age } = useContext(UserContext);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(() => {});
  }, []);

  return (
    <div className="gift-card">

      <audio
        ref={audioRef}
        src={finalSong}
        autoPlay
        loop
      />

      <h1>🎂 Happy Birthday {name}</h1>

      <h2>
        🎉 Today you are
      </h2>

      <h1>
        {age.years} Years {age.months} Months {age.days} Days
      </h1>

      <h3>
        ✨ A beautiful journey filled with happiness and memories ❤️
      </h3>

      <h2>
        <marquee>
          <b>
            <i>Designed ❤️ By Amit for you</i>
          </b>
        </marquee>
      </h2>

      <p>
        May your life be filled with happiness,
        success and unforgettable memories ✨
      </p>

      <h1>🎆 🎈 🌸 ⭐ 🎉</h1>

    </div>
  );
}

export default FinalCard;