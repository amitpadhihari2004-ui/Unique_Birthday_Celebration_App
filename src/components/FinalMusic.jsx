import song from "../assets/songs/unique_birthday_song.mp3";

function FinalMusic() {
  return (
    <audio
      src={song}
      controls
      autoPlay
      loop
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999
      }}
    />
  );
}

export default FinalMusic;