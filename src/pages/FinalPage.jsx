   import GalaxyBackground from "../components/GalaxyBackground";
import Backgroundstars from "../components/Backgroundstars";
import BalloonAnimation from "../components/BalloonAnimation";
import FallingPetals from "../components/FallingPetals";
import Fireworks from "../components/Fireworks";
import Birthdaycake from "../components/Birthdaycake";
import SecretLetter from "../components/SecretLetter";
import spinwheel from "../components/spinwheel";
import FinalCard from "../components/FinalCard";
import pagewrapper from "../components/pagewrapper";

function FinalPage() {
  return (
    <pagewrapper>
      <GalaxyBackground />
      <Backgroundstars />
      <Fireworks />
      <BalloonAnimation />
      <FallingPetals />
      


      <div className="container">
        <div className="card">

          <h1>🌠 For you Amazing Year. 🌠</h1>

          <Birthdaycake />

          <SecretLetter />

          <spinwheel />

          <FinalCard />

        </div>
      </div>
    </pagewrapper>
  );
}

export default FinalPage;