import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const RotatingGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      // Make the globe spin continuously
      let angle = 0;
      const rotationSpeed = 0.002; // Adjust speed

      const animate = () => {
        if (globe) {
          globe.pointOfView({ lat: 0, lng: angle }, 100);
          angle = (angle + rotationSpeed * 360) % 360;
        }
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="absolute hidden md:block right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 opacity-70 z-0 pointer-events-none">
      <Globe
        
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={400}
        height={400}
      />
    </div>
  );
};

export default RotatingGlobe;
