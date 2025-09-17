import Lenis from "lenis";
import { useEffect } from "react";
import "./App.css";
import Router from "./router/Router";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.25, // animation duration
      easing: (t) => 1 - (1 - t) ** 2, // linear easing
      smooth: true, // enable smooth scrolling
      direction: "vertical", // vertical scroll
      gestureDirection: "vertical",
      smoothTouch: true, // Smooth scroll for touch devices
      wheelMultiplier: 0.8, // Multiplies wheel scroll distance
      touchMultiplier: 2, // Multiplies touch scroll distance
      infinite: false, // mouse/touch gesture
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // cleanup
  }, []);
  return <Router />;

}

export default App;
