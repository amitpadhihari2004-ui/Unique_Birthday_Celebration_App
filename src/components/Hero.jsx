import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "🎂 Happy Birthday Website 🎉",
          2000,
          "✨ Create Magical Memories ✨",
          2000
        ]}
        speed={40}
        repeat={Infinity}
      />
    </>
  );
}

export default Hero;