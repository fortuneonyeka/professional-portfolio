import NavBar from "./components/navogations/NavBar";
import Home from "./components/Home";
import About from "./components/about/About";
import SocialLinks from "./components/socials/SocialLinks";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notfound/NotFound";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 ">
      <NavBar />
      <div className="flex flex-col justify-between   gap-32 md:gap-0 ">
        <RouterProvider router={router} />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
