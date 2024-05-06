import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import Testimonials from "../Testimonials";

export default function Home() {
    return (
        <>
        <HeroSection />
        <MySkills />
        <Testimonials />
        <ContactMe/>
        <AboutMe />
        <MyPortfolio />
        <Navbar/>
        <Footer/>
        </>
    )
}
