// import Header from "@/components/Header";
// import HeroSection from "@/components/index/HeroSection";
// import EventsSection from "@/components/index/EventsSection";
// import VolunteeringSection from "@/components/index/VolunteeringSection";
// import SelfDiscoverySection from "@/components/index/SelfDiscoverySection";
// import SixStepsSection from "@/components/index/SixSteps";
// import AboutYouSection from "@/components/index/AboutYouSection";
// import UserReviewsSection from "@/components/index/UserReviewsSection";
// import Footer from "@/components/Footer";
import Image from 'next/image';

interface MainYouCardProps {
    image_main: string;
    name: string;
    role: string;
    content: string;
}

const MainYouCard: React.FC<MainYouCardProps> = ({ image_main, }) => {
    return (


                        <Image src={image_main} alt="О вас" width={98} height={98} style={{
                                filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.9))",
                                width: "auto",
                                height: "70px"
                            }}/>


    );
};

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
      <section className="container mx-auto">
      <div className="flex gap-4 md:gap-0 mb-8">
        <div className="w-1/2">
          <p className="text-[#BADE4F] text_hero_block text-xl">Прокачивай свои навыки, находи новые возможности и реализуйся в IT сфере. </p>
        </div>
        <div className="w-1/2">
          <p className="text-[#BADE4F] text-xl text_hero_block text-right">Решай реальные кейсы, получай ачивки и становись лидером своей профессии. </p>
        </div>
      </div>
      <div className="mb-10">
        <p className="text-[50px] sm:text-[70px] md:text-[100px] lg:text-[120px] xl:text-[165px] leading-none text-[#F2F2F2] font-semibold">Найди работу в  <span className="text-[#BADE4F]"> <span className="cov_left">IT СФЕРЕ</span ></span></p>
      </div>
      <div className="flex justify-center mb-30">
        <div className="text-center flex flex-col max-w-max">
            <span className="text-[#BADE4F] text-xl mb-3">
                
                Путь к карьере в IT начинается здесь
               
            </span>
            <button className="shadow-[0_0_60px_60px_rgba(186,222,79,0.2)] border-[#BADE4F] bg-[#BADE4F] text-2xl border-2 border-solid rounded-[10px] px-5 py-4 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:shadow-none hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Войти</button>
          </div>
      </div>
      
    </section>
      
      {/* steps */}
      <section className="mt-20 mb-20 container mx-auto">
        <div className="text-center mb-20">
            <p className="text-4xl md:text-5xl xl:text-7xl text-white font-semibold">Всего <span className="text-[#BADE4F]">4</span> шага до успеха</p>
        </div>
         
         <div className="flex xl:flex-nowrap flex-wrap gap-10 mb-10 items-center justify-center">
             <div className="w-[100%] md:w-[45%] xl:w-[25%] h-[260px] max-w-[100%] md:max-w-[45%] xl:max-w-[25%]  bg-contain relative bg-no-repeat">
                <div>
                    <div className="absolute">
                       <span className="text-4xl md:text-5xl xl:text-7xl text-[#BADE4F]">01</span>
                    </div>
                    <div className="absolute top-[-20px] right-[-20px]">
                       
                    </div>
                </div>
                <div className="flex items-end min-h-[65%] px-5">
                    <p className="text-white">Выбери направление</p>
                </div>
                <div className="absolute bottom-5 w-full px-3">
                    <button className="border-[#BADE4F] w-full bg-[#BADE4F] text-2xl border-2 border-solid rounded-[10px] px-2 py-2 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Направления</button>
                </div>
             </div>
             
             <div className="w-[100%] md:w-[45%] xl:w-[25%] h-[260px] max-w-[100%] md:max-w-[45%] xl:max-w-[25%] bg-contain relative bg-no-repeat">
          
                <div>
                    <div className="absolute">
                       <span className="text-4xl md:text-5xl xl:text-7xl text-[#BADE4F]">02</span>
                    </div>
                    <div className="absolute top-[-20px] right-[-20px]" >
                  
                    </div>
                </div>
                <div className="flex items-end min-h-[65%] px-5">
                    <p className="text-white">Решай разные кейсы и получай за них бонусы</p>
                </div>
                <div className="absolute bottom-5 w-full px-3">
                    <button className="border-[#BADE4F] w-full bg-[#BADE4F] text-2xl border-2 border-solid rounded-[10px] px-2 py-2 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Направления</button>
                </div>
             </div>
        
             <div className="w-[100%] md:w-[45%] xl:w-[25%] h-[260px] max-w-[100%] md:max-w-[45%] xl:max-w-[25%] bg-contain relative bg-no-repeat">
                <div>
                    <div className="absolute">
                       <span className="text-4xl md:text-5xl xl:text-7xl text-[#BADE4F]">03</span>
                    </div>
                    <div className="top-[-20px] right-[-20px] absolute ">
                       
                    </div>
                </div>
                <div className="flex items-end min-h-[65%] px-5">
                    <p className="text-white">Достигай большего и расти в рейтинге</p>
                </div>
                <div className="absolute bottom-5 w-full px-3">
                    <button className="border-[#BADE4F] w-full bg-[#BADE4F] text-2xl border-2 border-solid rounded-[10px] px-2 py-2 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Направления</button>
                </div>
             </div>
             <div className="w-[100%] md:w-[45%] xl:w-[25%] h-[260px] max-w-[100%] md:max-w-[45%] xl:max-w-[25%] bg-contain relative bg-no-repeat">
                <div>
                    <div className="absolute">
                       <span className="text-4xl md:text-5xl xl:text-7xl text-[#BADE4F]">04</span>
                    </div>
                    <div className="absolute top-[-20px] right-[-20px]">
                    </div>
                </div>
                <div className="flex items-end min-h-[65%] px-5">
                    <p className="text-white">Стань знаменитым для IT-компаний</p>
                </div>
                <div className="absolute bottom-5 w-full px-3">
                    <button className="border-[#BADE4F] w-full bg-[#BADE4F] text-2xl border-2 border-solid rounded-[10px] px-2 py-2 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Направления</button>
                </div>
             </div>
         </div>
        
    </section>

    {/* Features */}
    <section className="mt-20 mb-20 container mx-auto">
        <div className="text-center mb-20">
            <p className="text-4xl md:text-5xl xl:text-7xl text-white font-semibold">Почему мы?</p>
        </div>
        <div className="flex gap-5 lg:gap-10 xl:gap-15">
            <div className="border-r border-[#F2F2F2] pr-[50px] pt-[30px] pb-[30px] w-1/2 text-right">
               <p className="text-[#BADE4F] text-2xl md:text-3xl xl:text-4xl text_mob_features font-semibold mb-5">Реальные кейсы</p>
               <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">Мы создаём задачи, максимально приближенные к реальным условиям работы.</p>
               <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">От новичка до профи</p>
               <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">Любой юзер найдет задачи под свой уровень и сможет развить  навыки.</p>
               <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">Достижения, рейтинги</p>
               <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">Чем больше достижений ты собираешь, тем выше твой рейтинг.</p>
               <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">Актуальные вакансии</p>
               <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">Каждый день компании публикуют новые вакансии для специалистов любого грейда.</p>
            </div>
            <div className="w-1/2 text-left pt-[50px] pb-[30px]">
                <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">10 000+ задач</p>
                <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">охватывающих самые популярные направления в IT, уже на платформе.</p>
                <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">100 000+ разработчиков</p>
                <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">уже объединены нашей платформой, и их количество только продолжает расти.</p>
                <p className="text-[#BADE4F] font-semibold text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">10 000+ вакансий</p>
                <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">в IT-компаниях уже нашли своих соискателей на нашей платформе.</p>
                <p className="text-[#BADE4F] font-semibold text-xl lg:text-2xl md:text-3xl xl:text-4xl mb-5 text_mob_features">150+ IT-компаний</p>
                <p className="text-white text-xl lg:text-2xl text_mob_features mb-5">уже с нами в поисках талантливых сотрудников.</p>
            </div>
        </div>
    </section>

    {/* Trending */}
    <section className="mt-20 mb-20 container mx-auto">
        <div className="text-center mb-20">
            <p className="text-4xl md:text-5xl xl:text-7xl text-white font-semibold">Топовые направления</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap  mb-10 gap-10">
            <div className="w-full md:w-1/2 bg-[#242424] rounded-[10px]">
               <div className="p-3 md:p-5 xl:p-10">
                 <Image src="/images/index/desktop_windows.svg" alt="Логотип ITsphera" width={200} height={50} />
               
                 <h3 className="mb-3 font-semibold text-4xl text-white">Frontend</h3>
                 <p className="mb-3 text-white text-xl lg:text-2xl">Разрабатывай серверную часть приложений, обрабатывай данные и создавай API. Прокачивай навыки на Python, Java, Node.js и других языках.</p>
               </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#242424] rounded-[10px]">
                <div className="p-3 md:p-5 xl:p-10">
                <Image src="/images/index/desktop_windows.svg" alt="Логотип ITsphera" width={200} height={50} />
                    <h3 className="font-semibold text-4xl mb-3 text-white">Backend</h3>
                    <p className="text-white mb-3 text-xl lg:text-2xl">Оживляй пользовательские интерфейсы с помощью HTML, CSS и JavaScript. Работай с популярными фреймворками, такими как React, Angular и Vue.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap xl:gap-10 mb-10">
            <div className="w-full md:w-[50%] lg:w-1/3 bg-[#242424] rounded-[10px]">
               <div className="p-3 md:p-5 xl:p-10">
               <Image src="/images/index/desktop_windows.svg" alt="Логотип ITsphera" width={200} height={50} />
                 <h3 className="mb-3 font-semibold text-4xl text-white">Data Science</h3>
                 <p className="mb-3 text-white text-xl lg:text-2xl">Анализируй данные, работай с алгоритмами машинного обучения и находи инсайты. Применяй Python, R и SQL для решения сложных задач.</p>
               </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-1/3 bg-[#242424] rounded-[10px]">
                <div className="p-3 md:p-5 xl:p-10">
                    <Image src="/images/desktop_windows.svg" alt="Логотип ITsphera" width={200} height={50} />
                    <h3 className="font-semibold text-4xl mb-3 text-white">DevOps</h3>
                    <p className="text-white mb-3 text-xl lg:text-2xl">Автоматизируй процессы, настраивай CI/CD пайплайны и работай с облачными инфраструктурами, такими как AWS, Azure или Google Cloud.</p>
               </div>
            </div>
             <div className="w-full md:w-[50%] lg:w-1/3 bg-[#242424] rounded-[10px]">
                <div className="p-3 md:p-5 xl:p-10">
                   <Image src="/images/desktop_windows.svg" alt="Логотип ITsphera" width={200} height={50} />
                    <h3 className="font-semibold text-4xl mb-3 text-white">Mobile</h3>
                    <p className="text-white mb-3 text-xl lg:text-2xl">Создавай мобильные приложения для iOS и Android. Работай с Kotlin, Swift, Flutter или React Native.</p>
               </div>
            </div>
        </div>
        <div className="mb-10">
        </div>
        <div className="bg-[#242424] rounded-[10px]">
            <div className="px-7 py-10 flex items-center">
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-wrap xl:flex-nowrap gap-8 items-center">
                         <div className=''>
                         <Image src="/images/question_mark.svg" alt="Логотип ITsphera" width={200} height={50} />
                         </div>
                        <div className="font-semibold text-2xl lg:text-4xl text-white">
                            Не можешь выбрать направление в IT?
                        </div>
                    </div>
                     <p className="text-white py-8 text-xl lg:text-2xl">Пройди бесплатный тест на нашем сервисе и узнай, какой путь в IT подходит именно тебе. Мы поможем выявить твои сильные стороны и подскажем, какие кейсы и навыки стоит развивать для успешного старта в выбранной области.</p>
                    <div>
                        <button className="border-[#BADE4F] bg-[#BADE4F] text-xl lg:text-2xl border-2 border-solid rounded-[10px] px-7 py-4 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Пройти тест</button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                  <Image src="/images/pazl.svg" alt="Логотип ITsphera" width={200} height={50} />

                </div>
            </div>
        </div>
    </section>
    
      {/* User Reviews */}
      <section className="mt-20 mb-20 container xl:max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
            <p className="text-4xl md:text-5xl xl:text-7xl text-white font-semibold">Что о нас говорят?</p>
        </div>
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
           
             <div>
                <div className="relative mx-20 h-56 overflow-hidden rounded-lg md:h-96">
              
                   <div className="hidden bg-[#242424] rounded-[10px] duration-700 ease-in-out" data-carousel-item>
                  
                        <div className="flex px-10 py-12">
                        <div className="w-1/4 flex justify-center">
                           <Image src="/images/women.svg" alt="Логотип ITsphera" width={200} height={50} />
                          </div>
                          <div className="w-3/4">
                             <p className="text-white text-xl font-semibold">Екатерина Мельникова</p>
                             <p className="text-[#BADE4F] text-xl ">Екатерина Мельникова</p>
                             <p className="text-white text-xl">Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого. Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее. А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!</p>
                          </div>
                        </div>
                   </div>
                  
                   <div className="hidden bg-[#242424] rounded-[10px] duration-700 ease-in-out" data-carousel-item>
                        <div className="flex px-10 py-12">
                          <div className="w-1/4 flex justify-center">
                           <Image src="/images/women.svg" alt="Логотип ITsphera" width={200} height={50} />
                          </div>
                          <div className="w-3/4">
                             <p className="text-white text-xl font-semibold">Екатерина Мельникова</p>
                             <p className="text-[#BADE4F] text-xl ">Екатерина Мельникова</p>
                             <p className="text-white text-xl">Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого. Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее. А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!</p>
                          </div>
                        </div>
                   </div>
                 
                   <div className="hidden bg-[#242424] inset-px[!important] rounded-[10px] duration-700 ease-in-out" data-carousel-item>
                   
                        <div className="flex px-10 py-12">
                        <div className="w-1/4 flex justify-center">
                           <Image src="/images/women.svg" alt="Логотип ITsphera" width={200} height={50} />
                          </div>
                          <div className="w-3/4">
                             <p className="text-white text-xl font-semibold">Екатерина Мельникова</p>
                             <p className="text-[#BADE4F] text-xl ">Екатерина Мельникова</p>
                             <p className="text-white text-xl">Обожаю этот сервис за реальные задачи, которые помогают не только улучшить навыки, но и чувствовать себя частью чего-то большого. Особенно нравится, что можно сразу получить обратную связь по решениям. Это помогает учиться быстрее. А система рейтингов и достижений мотивирует расти. Советую всем, кто хочет начать карьеру в IT!</p>
                          </div>
                        </div>
                   </div>
                   
               </div>
                <div>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round"  strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                
             </div>
           

           
            <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
        
            
        </div>

      </section>
     {/* Cta */}

     <section className="mt-20 mb-30 container mx-auto">
        <div className="text-center mb-10">
            <p className="text-4xl md:text-5xl xl:text-7xl text-white text-center font-semibold">Начни свой путь
                в <span className="text-[#BADE4F]"><span></span>it сфере<span></span></span> <span className="border-r-6 border-[#BADE4F] pr-3">уже сегодня</span></p>
        </div>
        <div className="flex justify-center">
            <button className="shadow-[0_0_60px_30px_rgba(186,222,79,0.2)] border-[#BADE4F] bg-[#BADE4F] text-xl lg:text-2xl border-2 border-solid rounded-[10px] px-7 py-4 transition-all duration-300 hover:border-[1px] hover:border-solid hover:border-[#BADE4F] hover:shadow-none hover:cursor-pointer hover:bg-[#ffffff00] hover:text-[#bade4f]">Решить свой первый кейс</button>
        </div>
        </section>

      {/* Call to Action */}
      {/* <section>
        <h1>Начни свой путь в IT сфере уже сегодня</h1>
        <a href="#" className="underline">Решить свой первый кейс</a>
      </section> */}
    </>
  );
}
