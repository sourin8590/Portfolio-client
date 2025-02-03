import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/subcomponents/Footer";
import { Toaster } from "react-hot-toast";
import CursorBackground from "./pages/subcomponents/CursorEffect";
import Starfield from "./pages/subcomponents/BackgroundStars";
import Favicon from "react-favicon";



function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [vanish, setVanish] = useState(false);

  useEffect(() => {
    // Faster loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setVanish(true); // Start vanish animation
          setTimeout(() => setLoading(false), 50); // Faster vanish effect
          return prev;
        }
        return prev + 10; // Increase progress faster
      });
    }, 50); // Faster interval

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Favicon url={"https://media.tenor.com/K3j9pwWlME0AAAAj/fire-flame.gif"} />
      {loading ? (
        <div className={`loading-screen ${vanish ? "vanish" : ""}`}>
          <div className="loader">
            <div className="spinner"></div>
            <p className="loading-text">{progress}%</p>
          </div>
        </div>
      ) : (
        <>
          <CursorBackground />
          <Starfield
            speedFactor={0.1} 
            backgroundColor="black"
            starColor={[255, 255, 255]}
            starCount={5000}
          />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
            <Footer />
            <Toaster position="top-right" />
          </Router>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
