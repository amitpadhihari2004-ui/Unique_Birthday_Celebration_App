import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function MemoryGallery() {

  const {
    memory1,
    memory2,
    memory3,
    memory4
  } = useContext(UserContext);

  return (
    <div className="gallery-container">

      <h1>📸 Memory Gallery</h1>

      <div className="gallery">

        {memory1 && (
          <img
            src={memory1}
            alt=""
            className="gallery-image"
          />
        )}

        {memory2 && (
          <img
            src={memory2}
            alt=""
            className="gallery-image"
          />
        )}

        {memory3 && (
          <img
            src={memory3}
            alt=""
            className="gallery-image"
          />
        )}

        {memory4 && (
          <img
            src={memory4}
            alt=""
            className="gallery-image"
          />
        )}

      </div>

    </div>
  );
}

export default MemoryGallery;