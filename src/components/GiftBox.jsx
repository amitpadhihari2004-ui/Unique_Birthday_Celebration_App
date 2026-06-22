import { useState } from "react";

function GiftBox({ onOpen }) {

  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    onOpen();
  };

  return (
    <div>

      {!opened ? (

        <div
          className="gift-box"
          onClick={handleOpen}
        >
          🎁
        </div>

      ) : (

        <h2>✨ Gift Opened ✨</h2>

      )}

    </div>
  );
}

export default GiftBox;