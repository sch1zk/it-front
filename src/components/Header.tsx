// import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-10">
        <li><a href="/" className="underline">Главная</a></li>
          <li><a href="/cases" className="underline">Кейсы</a></li>
          <li><a href="/about" className="underline">О нас</a></li>
          <li><a href="/u/leaderboard" className="underline">Рейтинг</a></li>
          <li><a href="/media" className="underline">Медиа</a></li>
          <li><a href="/trends" className="underline">IT тренды</a></li>
          <li><a href="/auth" className="underline">Войти</a></li>
        </ul>
      </nav>
      <hr/>
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
