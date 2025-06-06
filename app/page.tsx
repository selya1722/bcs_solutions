import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import GetQuote from "../components/GetQuote";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <GetQuote />
      <Contact />
      
    </main>
  );
}