import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import StackingCards from "./components/StackingCards";
import { CallToAction, Footer } from "./components/Footer";

function App() {
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
