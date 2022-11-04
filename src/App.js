import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import "./App.css";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
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
      <h1>MAHSA</h1>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
