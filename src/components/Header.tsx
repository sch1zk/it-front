import Image from 'next/image';

interface HeaderYouCardProps {
    image_header: string;
    name: string;
    role: string;
    content: string;
}

const HeaderYouCard: React.FC<HeaderYouCardProps> = ({ image_header, }) => {
    return (


                        <Image src={image_header} alt="О вас" width={98} height={98} style={{
                                filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.9))",
                                width: "auto",
                                height: "70px"
                            }}/>


    );
};
export default function Header() {
  return (
    // <header>
    //   <nav>
    //     <ul className="flex gap-10">
    //     <li><a href="/" className="underline">Главная</a></li>
    //       <li><a href="/cases" className="underline">Кейсы</a></li>
    //       <li><a href="/about" className="underline">О нас</a></li>
    //       <li><a href="/u/leaderboard" className="underline">Рейтинг</a></li>
    //       <li><a href="/media" className="underline">Медиа</a></li>
    //       <li><a href="/trends" className="underline">IT тренды</a></li>
    //       <li><a href="/auth" className="underline">Войти</a></li>
    //     </ul>
    //   </nav>
    //   <hr/>
    // </header>

   <header className="p-5 mb-10 main__bg container mx-auto">
    <div className="flex items-center">
        <div className="w-1/2 lg:w-1/4">
          <Image src="/images/main-logo.png" alt="Логотип ITsphera" width={200} height={50} />
        </div>
        <div className="w-1/2 hidden lg:block">
            <ul className="text-[#888889] text-xl justify-center flex gap-12">
                <li>
                    <a className='hover:text-[#bade4f] transition-colors duration-500' href="/about">О нас</a>
                </li>
                <li>
                    <a className='hover:text-[#bade4f] transition-colors duration-500' href="/cases">Кейсы</a>
                </li>
                <li>
                    <a className='hover:text-[#bade4f] transition-colors duration-500' href="/u/leaderboard">Рейтинг</a>
                </li>
                <li>
                    <a className='hover:text-[#bade4f] transition-colors duration-500' href="/media">Медиа</a>
                </li>
                <li>
                    <a className='hover:text-[#bade4f] transition-colors duration-500' href="/trends">IT тренды</a>
                </li>
            </ul>
        </div>
        <div className="w-1/2 lg:w-1/4 text-xl text-right">
          <button className="text-[#F2F2F2] border-2 border-solid rounded-[10px] px-5 py-2 hover:text-[#222] hover:bg-[#F2F2F2] transition-colors duration-500 transition-bg hover:cursor-pointer">Войти</button>
        </div>
    </div>
   
</header>




        // <header className="container" style={{ marginBottom: "50px" }}>
        //     <div style={{
        //         display: "flex",
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //         padding: "30px 0",
        //         backgroundColor: "#fff"
        //     }}>
        //         <div style={{
        //             fontSize: "100px",
        //             fontWeight: "bold",
        //             fontFamily: "var(--font-extra)"
        //         }}>
        //             <Link href="/" className="href-plain" style={{ color: "var(--color-secondary)"}}>Doka</Link>
        //         </div>
        //         <nav style={{
        //             display: "flex",
        //             gap: "27px",
        //             alignItems: "center",
        //             fontSize: "20px"
        //         }}>
        //             <Link href="/it-jobs" className="href-plain">Работа в IT</Link>
        //             <Link href="/it-cases" className="href-plain">Кейсы IT</Link>
        //             <Link href="/education" className="href-plain">Обучение</Link>
        //             <Link href="/about" className="href-plain">О нас</Link>
        //             <Link href="/blog" className="href-plain">Блог</Link>
        //             <Link href="/rating" className="href-plain">Рейтинг</Link>
        //             <Link href="/profile" className="href-plain" style={{
        //                 border: "1px solid #000",
        //                 borderRadius: "var(--border-radius-medium)",
        //                 padding: "20px 35px"
        //             }}>Личный кабинет</Link>
        //         </nav>
        //     </div>
        // </header>
  );
};
