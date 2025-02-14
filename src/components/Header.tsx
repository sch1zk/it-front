import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
   <header className="container p-5 mx-auto" style={{ height: "var(--header-height)" }}>
    <div className="flex justify-between items-center h-full relative text-lg">
        <Link href="/" className="relative">
            <Image src="/images/it-logo_indent.svg" alt="Логотип" width={220} height={80} className="pointer-events-none select-none"/>
        </Link>
        <nav className="w-[500px] hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="text-[#888889] flex justify-between">
                <li className="flex-1 text-center hover:text-[#bade4f] transition-colors">
                    <a href="/about">О нас</a>
                </li>
                <li className="flex-1 text-center hover:text-[#bade4f] transition-colors">
                    <a href="/cases">Кейсы</a>
                </li>
                <li className="flex-1 text-center hover:text-[#bade4f] transition-colors">
                    <a href="/u/leaderboard">Рейтинг</a>
                </li>
                <li className="flex-1 text-center hover:text-[#bade4f] transition-colors">
                    <a href="/media">Медиа</a>
                </li>
                <li className="flex-1 text-center hover:text-[#bade4f] transition-colors">
                    <a href="/trends">IT тренды</a>
                </li>
            </ul>
        </nav>
        <button className={clsx(
          "text-main bg-transparent border border-main rounded-md px-5 py-2 cursor-pointer",
          "transition-colors transition-bg",
          "hover:text-light hover:bg-[var(--text-color-main)]"
        )}>Войти</button>
      </div>
    </header>
  );
};
