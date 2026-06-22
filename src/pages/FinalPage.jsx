   import GalaxyBackground from "../components/GalaxyBackground";
import BackgroundStars from "../components/BackgroundStars";
import BalloonAnimation from "../components/BalloonAnimation";
import FallingPetals from "../components/FallingPetals";
import Fireworks from "../components/Fireworks";
import BirthdayCake from "../components/BirthdayCake";
import SecretLetter from "../components/SecretLetter";
import SpinWheel from "../components/SpinWheel";
import FinalCard from "../components/FinalCard";
import PageWrapper from "../components/PageWrapper";

function FinalPage() {
  return (
    <PageWrapper>
      <GalaxyBackground />
      <BackgroundStars />
      <Fireworks />
      <BalloonAnimation />
      <FallingPetals />
      


      <div className="container">
        <div className="card">

          <h1>🌠 For you Amazing Year. 🌠</h1>

          <BirthdayCake />

          <SecretLetter />

          <SpinWheel />

          <FinalCard />

        </div>
      </div>
    </PageWrapper>
  );
}

export default FinalPage;