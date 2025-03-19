import "./App.css";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonial from "./components/testimonial";
import WorkingStep from "./components/WorkingStep";
function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep/>
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default App;
