import { useState, useEffect, useRef } from "react";
import "../Styles/Home.css";

function Home() {
  const [rotation, setRotation] = useState(0);
  const lastTimestampRef = useRef(null);

  useEffect(() => {
    const draw = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestampRef.current;
      setRotation((prevRotation) => (prevRotation + deltaTime / 10) % 360);

      lastTimestampRef.current = timestamp;
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <header className="header-background">
        <div className="background-container">
          <div
            className="background"
            id="inicio"
            style={{ "--direction": `${rotation}deg` }}
          >
            <div className="foreground"></div>
          </div>
        </div>
        <h1 className="title-background">Calidad, Estilo y Comodidad.</h1>
      </header>
    </>
  );
}

export default Home;
