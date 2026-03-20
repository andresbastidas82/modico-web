import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark text-slate-200">
      <CursorGlow />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Stats />
      <Gallery />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}
