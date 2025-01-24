import Header from "./components/Header";
import HeroSection from "./components/index/HeroSection";
import EventsSection from "./components/index/EventsSection";
import VolunteeringSection from "./components/index/VolunteeringSection";
import SelfDiscoverySection from "./components/index/SelfDiscoverySection";
import SixStepsSection from "./components/index/SixSteps";
import AboutYouSection from "./components/index/AboutYouSection";
import UserReviewsSection from "./components/index/UserReviewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main style={{
        display: "flex",
        flexDirection: "column",
        gap: "150px"
      }}>
        <HeroSection/>
        <EventsSection/>
        <VolunteeringSection/>
        <SelfDiscoverySection/>
        <SixStepsSection/>
        <AboutYouSection/>
        <UserReviewsSection/>
      </main>
      <Footer/>
    </>
  );
}
