import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <nav className="links">
                        <a href="#">О нас</a>
                        <a href="#">Партнёры</a>
                        <a href="#">Наши кейсы</a>
                        <a href="#">Блог</a>
                        <a href="#">Обучение</a>
                    </nav>
                    <div className="middle">
                        <div className="contacts">
                            <h3>Контакты</h3>
                            <p>Email: <a href="mailto:info@dokasw.ru">info@dokasw.ru</a></p>
                            <p>Phone: <a href="tel:+79897176349">+7-989-717-63-49</a></p>
                            <p>Address: Шахты, ул. Энтузиастов, д.85</p>
                        </div>
                        <div className="newsletter">
                            <input type="email" placeholder="Электронная почта"/>
                            <button>Подписаться на новости</button>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2025 DokaGo!</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
