import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GalaxyBackground from "../components/GalaxyBackground";
import HeroineCard from "../components/HeroineCard";
import HeroCard from "../components/HeroCard";
import GiftBox from "../components/GiftBox";
import PageWrapper from "../components/PageWrapper";

function GiftPage() {
  const [gender, setGender] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <GalaxyBackground />

      <div className="container">
        <div className="card">

          <h1>🎁 Surprise Gift 🎁</h1>

          <GiftBox onOpen={() => setIsOpened(true)} />

          {isOpened && (
            <>
              <h2>Who is receiving the gift?</h2>

              <button onClick={() => setGender("male")}>
                👦 Male
              </button>

              <br /><br />

              <button onClick={() => setGender("female")}>
                👧 Female
              </button>

              <br /><br />
            </>
          )}

          {gender === "male" && <HeroineCard />}
          {gender === "female" && <HeroCard />}

          {(gender === "male" || gender === "female") && (
            <>
              <br />
              <button onClick={() => navigate("/gallery")}>
                📸 Go To Memory Gallery
              </button>
            </>
          )}

        </div>
      </div>

    </PageWrapper>
  );
}

export default GiftPage;