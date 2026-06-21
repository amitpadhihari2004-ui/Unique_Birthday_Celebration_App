import { useState } from "react";

function SpinWheel() {
  const gifts = [
    "🍫",
    "🌹",
    "🎁",
    "💖",
    "🎬",
    "🍕",
    "🎵",
    "💌"
  ];

  const [rotation, setRotation] = useState(0);
  const [gift, setGift] = useState("");

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const angle = 360 * 5 + randomIndex * 45;

    setRotation(angle);

    setTimeout(() => {
      setGift(gifts[randomIndex]);
    }, 3000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          border: "8px solid gold",
          margin: "auto",
          position: "relative",
          transition: "transform 3s ease-out",
          transform: `rotate(${rotation}deg)`,
          background:
            "conic-gradient(red 0deg 45deg, orange 45deg 90deg, yellow 90deg 135deg, green 135deg 180deg, cyan 180deg 225deg, blue 225deg 270deg, purple 270deg 315deg, pink 315deg 360deg)"
        }}
      >
        {gifts.map((item, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translateY(-100px)`,
              fontSize: "24px"
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={handleSpin}>
        🎡 SPIN
      </button>

      {gift && <h2>🎁 You Won {gift}</h2>}
    </div>
  );
}

export default SpinWheel;