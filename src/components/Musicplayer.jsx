import { useEffect } from "react";
import { openingMusic } from "../utils/music";

function MusicPlayer() {
  useEffect(() => {
    openingMusic.volume = 0.5;

    openingMusic.play().catch(() => {});

    return () => {
      openingMusic.pause();
      openingMusic.currentTime = 0;
    };
  }, []);

  return null;
}

export default MusicPlayer;