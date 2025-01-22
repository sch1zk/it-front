import Image from "next/image";
import styles from "./styles/page.module.css";
import Header from "./components/Header";
import HeroSection from "./components/index/HeroSection";
import EventsSection from "./components/index/EventsSection";
import VolunteeringSection from "./components/index/VolunteeringSection";
import SelfDiscoverySection from "./components/index/SelfDiscoverySection";
import SixStepsSection from "./components/index/SixSteps";
import AboutYouSection from "./components/index/AboutYouSection";
import UserReviewsSection from "./components/index/UserReviewsSection";
import QuestionSection from "./components/index/QuestionSection";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <EventsSection/>
        <VolunteeringSection/>
        <SelfDiscoverySection/>
        <SixStepsSection/>
        <AboutYouSection/>
        <UserReviewsSection/>
        <QuestionSection/>
      </main>
    </>
  );
}
