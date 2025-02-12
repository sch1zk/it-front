import Image from 'next/image';

interface FooterYouCardProps {
    image_footer: string;
    name: string;
    role: string;
    content: string;
}

const FooterYouCard: React.FC<FooterYouCardProps> = ({ image_footer, }) => {
    return (


                        <Image src={image_footer} alt="О вас" width={98} height={98} style={{
                                filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.9))",
                                width: "auto",
                                height: "70px"
                            }}/>


    );
};
export default function Footer() {
  return (
    <footer>
       <section className="mt-20  mx-auto">
          <div className="bg-[#242424]">
            <div className="flex flex-wrap xl:flex-nowrap px-2 md:px-5 md:xl-10 mb-5 py-12">
              
                     <div className="w-full mb-5 xl:mb-px xl:w-1/4">
                         <Image src="/images/main-logo.png" alt="Логотип ITsphera" width={200} height={50} />
                        <p className="text-[#F2F2F2] text-xl">© 2025 ITsphera</p>
                      </div>
                      <div className="w-full xl:w-2/4 lg:w-4/5 flex flex-wrap xl:flex-nowrap justify-between">
                        <div className="w-1/2 md:w-1/4  mb-5">
                          <ul className="text-[#F2F2F2]">
                            <li className="font-semibold  mb-5 text-2xl">О нас</li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Команда</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Партнеры</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Для инвесторов</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Карьера</a></li>
                          </ul>
                        </div>
                        <div className='w-1/2 md:w-1/4 mb-5'>
                          <ul className="text-[#F2F2F2]">
                            <li className="font-semibold text-[#F2F2F2] mb-5 text-2xl">IT сфера</li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">ЛК</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Кейсы</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Рейтинг</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Вакансии</a></li>
                          </ul>
                        </div>
                        <div className='w-1/2 md:w-1/4 mb-5'>
                          <ul className="text-[#F2F2F2]">
                            <li className="font-semibold text-[#F2F2F2] mb-5 text-2xl">медиа</li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Блог</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">События</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Отзывы</a></li>
                          
                          </ul>
                        </div>
                        <div className='w-1/2 md:w-1/4 mb-5'>
                          <ul className="text-[#F2F2F2]">
                            <li className="font-semibold text-[#F2F2F2] mb-5 text-2xl">Поддержка</li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Privacy Policy</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Cookie Policy</a></li>
                            <li className="mb-1"><a className='hover:text-[#bade4f] transition-colors duration-500' href="#">Terms of Service</a></li>
                          </ul>
                        </div>
                      </div>
                        <div className="w-full lg:w-1/5 footer_text_contact xl:w-1/4">
                          <p className="font-semibold text-[#F2F2F2] text-right mb-px lg:mb-5 text-2xl">Контакты</p>
                          <div className="flex gap-5  mb-5 justify-end">
                            <div>
                                {/* <img src="../img/ic_baseline-telegram.svg" alt=""> */}
                            </div>
                            <div>
                              {/* <img src="../img/mingcute_vkontakte-fill.svg" alt=""> */}
                            </div>
                          </div>
                          <div className="text-right">
                            <a className="text-[#F2F2F2] mb-1 hover:text-[#bade4f] transition-colors duration-500" href="">+7 (989) 717-63-49</a>
                          </div>
                          <div className="text-right">
                            <a className="text-[#F2F2F2] hover:text-[#bade4f] transition-colors duration-500" href="">itsphere@yandex.ru</a>
                          </div>
                        
                        </div>
             
            </div>
            <div className="flex px-2 md:px-5 lg:px-10 items-center pb-12">
                <div className="w-1/2 flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.0775 24.7851C9.0775 24.7851 0 17.2942 0 9.9234C0 7.3247 1.05357 4.83244 2.92893 2.99488C4.8043 1.15733 7.34784 0.125 10 0.125C12.6522 0.125 15.1957 1.15733 17.0711 2.99488C18.9464 4.83244 20 7.3247 20 9.9234C20 17.2942 10.9225 24.7851 10.9225 24.7851C10.4175 25.2407 9.58625 25.2358 9.0775 24.7851ZM10 14.2102C10.5745 14.2102 11.1434 14.0993 11.6742 13.8839C12.205 13.6685 12.6873 13.3527 13.0936 12.9546C13.4998 12.5566 13.8221 12.084 14.042 11.5639C14.2618 11.0438 14.375 10.4863 14.375 9.9234C14.375 9.36045 14.2618 8.80301 14.042 8.28291C13.8221 7.76281 13.4998 7.29024 13.0936 6.89217C12.6873 6.49411 12.205 6.17834 11.6742 5.96291C11.1434 5.74748 10.5745 5.6366 10 5.6366C8.83968 5.6366 7.72688 6.08824 6.90641 6.89217C6.08594 7.6961 5.625 8.78647 5.625 9.9234C5.625 11.0603 6.08594 12.1507 6.90641 12.9546C7.72688 13.7586 8.83968 14.2102 10 14.2102Z" fill="#F2F2F2"/>
                        </svg>
                    <p className="text-[#F2F2F2] text-xl">г. Шахты, ул. Энтузиастов, д.85</p>
                 </div>
                 <div className="w-1/2 ml-5 lg:ml-px block lg:flex items-center justify-between">
                    <div>
                        <p className="text-[#F2F2F2]">Узнавай новости первым</p>
                    </div>
                    <div className="w-[70%]">
                        {/* <input className="border-[#F2F2F2] w-full p-5 border-2 border-solid rounded-[10px] placeholder-white opacity-90" type="text" placeholder="Введите Email"> */}
                    </div>
                </div>
            </div>
            
          </div>
        </section>
    </footer>
    // <footer>
    //   <hr/>
    //   <nav>
    //     <ul className="flex gap-10">
    //       <li><a href="/about" className="underline">О нас</a></li>
    //       <li><a href="/u/leaderboard" className="underline">Рейтинг</a></li>
    //       <li><a href="/media" className="underline">Медиа</a></li>
    //       <li><a href="/contacts" className="underline">Контакты</a></li>
    //       <li><a href="/partnerships" className="underline">Партнеры</a></li>
    //       <li><a href="/reviews" className="underline">Отзывы</a></li>
    //       <li><a href="/faq" className="underline">Помощь</a></li>
    //     </ul>
    //   </nav>
    //   <a href="#" className="underline">Политика конфиденциальности</a>
    // </footer>

        // <footer className="container">
        //     <div style={{
        //         display: "flex",
        //         flexDirection: "column",
        //         gap: "30px",
        //         backgroundColor: "var(--color-bg)",
        //         padding: "60px 50px",
        //         borderRadius: "var(--border-radius-large) var(--border-radius-large) 0 0",
        //         marginTop: "50px"
        //     }}>
        //         <nav style={{
        //             display: "flex",
        //             gap: "40px",
        //             marginBottom: "15px"
        //         }}>
        //             <a href="#" className="href-plain-w">О нас</a>
        //             <a href="#" className="href-plain-w">Партнёры</a>
        //             <a href="#" className="href-plain-w">Наши кейсы</a>
        //             <a href="#" className="href-plain-w">Блог</a>
        //             <a href="#" className="href-plain-w">Обучение</a>
        //         </nav>
        //         <div style={{
        //             display: "flex",
        //             alignItems: "center",
        //             justifyContent: "space-between"
        //         }}>
        //             <div style={{
        //                 display: "flex",
        //                 flexDirection: "column",
        //                 alignItems: "flex-start",
        //                 gap: "20px",
        //                 color: "#fff"
        //             }}>
        //                 <h3 style={{
        //                     color: "var(--color-primary)"
        //                 }}>
        //                     Контакты
        //                 </h3>
        //                 <p>Email: <a href="mailto:info@dokasw.ru" className="href-plain-w">info@dokasw.ru</a></p>
        //                 <p>Phone: <a href="tel:+79897176349" className="href-plain-w">+7-989-717-63-49</a></p>
        //                 <p>Address: Шахты, ул. Энтузиастов, д.85</p>
        //             </div>
        //             <div style={{
        //                 display: "flex",
        //                 padding: "45px 45px",
        //                 gap: "20px",
        //                 background: "#292A32",
        //                 borderRadius: "var(--border-radius-large)"
        //             }}>
        //                 <input type="email" placeholder="Электронная почта" style={{
        //                     border: "1px solid #fff",
        //                     borderRadius: "var(--border-radius-medium)",
        //                     padding: "0 30px",
        //                     color: "white"
        //                 }}/>
        //                 <button style={{
        //                     backgroundColor: "var(--color-primary)",
        //                     borderRadius: "var(--border-radius-medium)",
        //                     padding: "20px",
        //                     fontSize: "16px",
        //                     cursor: "pointer"
        //                 }}>
        //                     Подписаться на новости
        //                 </button>
        //             </div>
        //         </div>
        //         <hr style={{ width: "100%" }}/>
        //         <div style={{
        //             display: "flex",
        //             alignItems: "center",
        //             gap: "20px",
        //             color: "white"
        //         }}>
        //             <p>© 2025 DokaGo!</p>
        //             <a href="#" className="href-plain-w">Политика конфиденциальности</a>
        //         </div>
        //     </div>
        // </footer>
  );
};
