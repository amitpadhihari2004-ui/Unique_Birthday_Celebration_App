function BackgroundStars() {

  const stars = Array.from({ length: 80 });

  return (
    <div className="stars-container">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></span>
      ))}
    </div>
  );
}

export default BackgroundStars;