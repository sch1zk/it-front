export default function Footer() {
    return (
        <footer className="container">
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                backgroundColor: "var(--color-bg)",
                padding: "60px 50px",
                borderRadius: "var(--border-radius-large) var(--border-radius-large) 0 0",
                marginTop: "50px"
            }}>
                <nav style={{
                    display: "flex",
                    gap: "40px",
                    marginBottom: "15px"
                }}>
                    <a href="#" className="href-plain-w">О нас</a>
                    <a href="#" className="href-plain-w">Партнёры</a>
                    <a href="#" className="href-plain-w">Наши кейсы</a>
                    <a href="#" className="href-plain-w">Блог</a>
                    <a href="#" className="href-plain-w">Обучение</a>
                </nav>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "20px",
                        color: "#fff"
                    }}>
                        <h3 style={{
                            padding: "0 7px",
                            backgroundColor: "var(--color-primary)",
                            borderRadius: "var(--border-radius-small)",
                            color: "#000"
                        }}>
                            Контакты
                        </h3>
                        <p>Email: <a href="mailto:info@dokasw.ru" className="href-plain-w">info@dokasw.ru</a></p>
                        <p>Phone: <a href="tel:+79897176349" className="href-plain-w">+7-989-717-63-49</a></p>
                        <p>Address: Шахты, ул. Энтузиастов, д.85</p>
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "45px 45px",
                        gap: "20px",
                        background: "#292A32",
                        borderRadius: "var(--border-radius-large)"
                    }}>
                        <input type="email" placeholder="Электронная почта" style={{
                            border: "1px solid #fff",
                            borderRadius: "var(--border-radius-medium)",
                            padding: "0 30px",
                            color: "white"
                        }}/>
                        <button style={{
                            backgroundColor: "var(--color-primary)",
                            borderRadius: "var(--border-radius-medium)",
                            padding: "20px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}>
                            Подписаться на новости
                        </button>
                    </div>
                </div>
                <hr style={{ width: "100%" }}/>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    color: "white"
                }}>
                    <p>© 2025 DokaGo!</p>
                    <a href="#" className="href-plain-w">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};
