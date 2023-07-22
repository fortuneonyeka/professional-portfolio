import NavBar from "./components/navogations/NavBar";
import Home from "./components/Home";
import About from "./components/about/About";
import SocialLinks from "./components/socials/SocialLinks";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
