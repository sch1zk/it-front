// import Header from "@/components/Header";
// import HeroSection from "@/components/index/HeroSection";
// import EventsSection from "@/components/index/EventsSection";
// import VolunteeringSection from "@/components/index/VolunteeringSection";
// import SelfDiscoverySection from "@/components/index/SelfDiscoverySection";
// import SixStepsSection from "@/components/index/SixSteps";
// import AboutYouSection from "@/components/index/AboutYouSection";
// import UserReviewsSection from "@/components/index/UserReviewsSection";
// import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    // <>
    //   <Header/>
    //   <main className="flex flex-col gap-[150px]">
    //     <HeroSection/>
    //     <EventsSection/>
    //     <VolunteeringSection/>
    //     <SelfDiscoverySection/>
    //     <SixStepsSection/>
    //     <AboutYouSection/>
    //     <UserReviewsSection/>
    //   </main>
    //   <Footer/>
    // </>

    <>
      {/* Hero */}
      <section>
        <h1>Найди работу в IT сфере</h1>
        <a href="#" className="underline">Начать сейчас</a>
      </section>
      
      {/* Trending Topics */}
      <section>
        <h2>Топовые направления</h2>
        <div className="flex flex-col">
          <a href="#" className="underline">Frontend</a>
          <a href="#" className="underline">Backend</a>
          <a href="#" className="underline">Data Science</a>
          <a href="#" className="underline">DevOps</a>
          <a href="#" className="underline">Mobile</a>
        </div>
        <p>Не можете выбрать направление?</p>
        <a href="#" className="underline">Пройти тест</a>
      </section>

      {/* User Reviews */}
      <section>
        <h2>Отзывы пользователей</h2>
        <p>----------</p>
      </section>

      {/* Call to Action */}
      <section>
        <h1>Начни свой путь в IT сфере уже сегодня</h1>
        <a href="#" className="underline">Решить свой первый кейс</a>
      </section>
    </>
  );
}
