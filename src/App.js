import NavBar from "./components/navogations/NavBar";
import Home from "./components/Home";
import About from "./components/about/About";
import SocialLinks from "./components/socials/SocialLinks";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col justify-between  bg-gradient-to-b from-black to-gray-800 gap-32 md:gap-0 ">

      <Home />
      <About />
      <Portfolio />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
