import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import PageWrapper from "../components/PageWrapper";
import GalaxyBackground from "../components/GalaxyBackground";
import BackgroundStars from "../components/BackgroundStars";

import PhotoBloom from "../components/PhotoBloom";
import VoiceGreeting from "../components/VoiceGreeting";
import MusicPlayer from "../components/MusicPlayer";
import Fireworks from "../components/Fireworks";
import ZodiacCard from "../components/ZodiacCard";
import GiftButton from "../components/GiftButton";

function Celebration() {

  const { name } = useContext(UserContext);

  return (
    <PageWrapper>

      <GalaxyBackground />
      <BackgroundStars />

      <div className="container">
        <div className="card">

          <PhotoBloom />

          <VoiceGreeting />

          <MusicPlayer />

          <Fireworks />

          <h1>🎉 Happy Birthday 🎉</h1>

          <h2>{name}</h2>

          <p>
            Wishing you happiness, success and lots of joy.
          </p>

          <ZodiacCard />

          <GiftButton />

        </div>
      </div>

    </PageWrapper>
  );
}

export default Celebration;