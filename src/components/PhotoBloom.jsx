import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PhotoBloom() {
  const { photo } = useContext(UserContext);

  return (
    <div className="photo-container">
      <div className="photo-ring">
        <img
          src={photo}
          alt=""
          className="profile-photo"
        />
      </div>
    </div>
  );
}

export default PhotoBloom;