import NavBar from "./components/navogations/NavBar";
import Home from "./components/Home";
import About from "./components/about/About";
import SocialLinks from "./components/socials/SocialLinks";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 ">
      <NavBar />
      <div className="flex flex-col justify-between   gap-32 md:gap-0 ">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
