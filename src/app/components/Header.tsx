import Link from 'next/link';
import '../styles/header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link href="/">Doka</Link>
                    </div>
                    <nav className="nav">
                        <Link href="/it-jobs">Работа в IT</Link>
                        <Link href="/it-cases">Кейсы IT</Link>
                        <Link href="/education">Обучение</Link>
                        <Link href="/about">О нас</Link>
                        <Link href="/blog">Блог</Link>
                        <Link href="/rating">Рейтинг</Link>
                        <Link href="/profile" className="profile-link">Личный кабинет</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
