import { useState } from "react";

import PageWrapper from "../components/PageWrapper";
import GalaxyBackground from "../components/GalaxyBackground";
import BackgroundStars from "../components/BackgroundStars";
import Hero from "../components/Hero";
import NameInput from "../components/NameInput";
import PhotoUpload from "../components/PhotoUpload";
import ZodiacDropdown from "../components/ZodiacDropdown";
import StartButton from "../components/StartButton";

function Home() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <PageWrapper>
      <GalaxyBackground />
      <BackgroundStars />

      <div className="container">
        <div className="card">
          <Hero />

          <NameInput name={name} setName={setName} />

          {/* Date of Birth Input */}
          {/* Date of Birth Input */}
{/* Date of Birth Input */}
<input
  type="text"
  placeholder="DD-MM-YYYY"
  value={dob}
  maxLength={10}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "-" + value.slice(2);
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }

    setDob(value);
  }}
  style={{
    width: "100%",
    padding: "15px",
    marginTop: "15px",
    borderRadius: "15px",
    border: "2px solid white",
    background: "#1e1b4b",
    color: "white",
    fontSize: "18px"
  }}
/>
          <PhotoUpload />
          <ZodiacDropdown />

          <StartButton
            name={name}
            dob={dob}
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;