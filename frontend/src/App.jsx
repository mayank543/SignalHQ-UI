import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import StackingCards from "./components/StackingCards";
import { CallToAction, Footer } from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(
      "%c Looking for an intern? %c I'm right here! ",
      "background: #000; color: #fff; font-size: 12px; padding: 4px; border-radius: 4px;",
      "color: #000; font-size: 12px; font-weight: bold;"
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <Features />
        <StackingCards />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
