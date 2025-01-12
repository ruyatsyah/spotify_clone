import FooterHome from "./components/footer/FooterHome";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <FooterHome />
    </div>
  );
}
