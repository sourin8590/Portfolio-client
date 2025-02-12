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
import axios from "axios";
import { serverUrl } from "./lib/utils";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [vanish, setVanish] = useState(false);

  useEffect(() => {
    let interval;

    const getMyProfile = async () => {
      try {
        await axios.get(`${serverUrl}/api/v1/user/portfolio/me`, {
          withCredentials: true,
        });

        // API fetch done, set progress to 100%
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setVanish(true);
        }, 500);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    // Start a smooth progress animation while waiting for API
    interval = setInterval(() => {
      setProgress((prev) => (prev < 95 ? prev + 5 : prev)); // Stops at 95%
    }, 100);

    getMyProfile().finally(() => clearInterval(interval)); // Ensures the interval stops

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Favicon url={"https://media.tenor.com/K3j9pwWlME0AAAAj/fire-flame.gif"} />
      {loading ? (
        <div className={`loading-screen ${vanish ? "vanish" : ""}`}>
          <div className="loader">
            <div className="spinner"></div>
            <p className="loading-text">{Math.floor(progress)}%</p>
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
