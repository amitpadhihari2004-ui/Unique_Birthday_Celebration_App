import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function VoiceGreeting() {

  const { name } = useContext(UserContext);

  useEffect(() => {

    const speech = new SpeechSynthesisUtterance(
      `Hi ${name}. Happy Birthday. Wishing you happiness and success.`
    );

    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

  }, []);

  return null;
}

export default VoiceGreeting;