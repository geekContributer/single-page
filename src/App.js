import React, { useEffect, lazy, Suspense } from "react";
import { Route,Routes} from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = lazy(() => import('./pages/Home'));

function App() {
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
          <Route path="/projects" element={Elements("Construction Projects")} />
          <Route path="/ev-charging" element={Elements("EV Charging Stations")} />
          <Route path="/road-map" element={Elements(" Road Map")} />
          <Route path="/travel-times" element={Elements("Travel Times")} />

        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
