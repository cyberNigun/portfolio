import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import AboutPage from "./Components/AboutPage/AboutPage";
import Service from "./Components/Service/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <AboutPage />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
