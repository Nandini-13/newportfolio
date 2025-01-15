import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Highlights from "../components/Highlights";

export default function HomePage() {
    return (
        <div className="bg-[#FFF]">
            <Navbar />
                <HeroSection />
                <About />
                <Highlights />
                <Footer />
  
        </div>
    )

}