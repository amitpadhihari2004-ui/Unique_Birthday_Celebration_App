import { useNavigate } from "react-router-dom";
import GalaxyBackground from "../components/GalaxyBackground";
import MemoryGallery from "../components/MemoryGallery";
import PageWrapper from "../components/PageWrapper";

function Gallery() {

  const navigate = useNavigate();

  return (
    <PageWrapper>

      <GalaxyBackground />

      <div className="container">
        <div className="card">

          <h1>📸 Memory Gallery</h1>

          <MemoryGallery />

          <br />

          <button onClick={() => navigate("/final")}>
            🎂 Grand Finale
          </button>

        </div>
      </div>

    </PageWrapper>
  );
}

export default Gallery;