import React, { useEffect, lazy, Suspense } from "react";
import { Route,Routes} from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("sticky-navbar-hidden");
        navbar.classList.remove("sticky-navbar-visible");
      } else {
        // Scrolling up
        navbar.classList.add("sticky-navbar-visible");
        navbar.classList.remove("sticky-navbar-hidden");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const Elements = (val) => {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h1>{val} </h1>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={Elements("About")} />
          <Route path="/services" element={Elements("Services")} />
          <Route path="/contact" element={Elements("Contact")} />
          <Route path="/login" element={Elements("Login")} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
