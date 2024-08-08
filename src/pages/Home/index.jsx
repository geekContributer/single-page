import React, { lazy, Suspense } from "react";
import "./home.css";
const Whyus = lazy(() => import("./WhyUs"));
const Community = lazy(() => import("./Community"));
const PartnersSection = lazy(() => import("./Partners"));
function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Whyus />
        <Community />
        <PartnersSection />
      </Suspense>
    </>
  );
}

export default Home;
