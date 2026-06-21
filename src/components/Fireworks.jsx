import { useEffect } from "react";
import confetti from "canvas-confetti";

function Fireworks() {

  useEffect(() => {

    const interval = setInterval(() => {

      confetti({
        particleCount:150,
        spread:90,
        origin:{ y:0.6 }
      });

    },3000);

    return ()=>clearInterval(interval);

  },[]);

  return null;
}

export default Fireworks;