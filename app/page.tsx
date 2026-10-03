import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Brands from "@/components/Brands";
import Menu from "@/components/Menu";
import Offer from "@/components/Offer";
import QRSection from "@/components/QRSection";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Reviews from "@/components/Reviews";
import Feedback from "@/components/Feedback";
import Catering from "@/components/Catering";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Brands />
        <Menu />
        <Offer />
        <QRSection />
        <Gallery />
        <Videos />
        <Reviews />
        <Feedback />
        <Catering />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
