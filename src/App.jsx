import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/subcomponents/Footer";
import { Toaster } from "react-hot-toast";
import CursorBackground from "./pages/subcomponents/CursorEffect";
import Starfield from "./pages/subcomponents/BackgroundStars";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CursorBackground />
      <Starfield
        speedFactor={0.1} // Adjust speed of stars
        backgroundColor="black" // Customize background color
        starColor={[255, 255, 255]} // Customize star color
        starCount={5000} // Set number of stars
      />
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
