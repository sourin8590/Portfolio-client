import { useEffect, useState } from "react";

const CursorBackground = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(0,150,255,0.35), rgba(0,0,0,0.85) 50%)`,
        transition: "background 0.2s ease-out",
      }}
    />
  );
};

export default CursorBackground;
