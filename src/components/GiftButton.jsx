import { useNavigate } from "react-router-dom";

function GiftButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/gift")}>
      🎁 Open Your Gift
    </button>
  );
}

export default GiftButton;