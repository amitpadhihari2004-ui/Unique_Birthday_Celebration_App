import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PhotoUpload() {
  const { setPhoto } = useContext(UserContext);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handlePhoto}
    />
  );
}

export default PhotoUpload;