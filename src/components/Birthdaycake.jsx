import { useState } from "react";

import { openingMusic, birthdayMusic } from "../utils/music";
function BirthdayCake() {
  const [blown, setBlown] = useState(false);
const handleBlowCandle = async () => {
  setBlown(true);

  // Stop opening song
  openingMusic.pause();
  openingMusic.currentTime = 0;

  // Play final song
  birthdayMusic.currentTime = 0;
  birthdayMusic.volume = 0.5;

  try {
    await birthdayMusic.play();
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <div
        style={{
          fontSize: "120px",
          transition: "0.5s",
        }}
      >
        {blown ? "🎂" : "🕯️🎂🕯️"}
      </div>

      {!blown ? (
        <button
          onClick={handleBlowCandle}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            border: "none",
            borderRadius: "30px",
            background: "linear-gradient(45deg,#ff4da6,#ff66cc)",
            color: "white",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          🕯 Blow Candle
        </button>
      ) : (
        <h2 style={{ color: "#fff", marginTop: "20px" }}>
          🎉 Make a Wish! 🎉
        </h2>
      )}
    </div>
  );
}

export default BirthdayCake;