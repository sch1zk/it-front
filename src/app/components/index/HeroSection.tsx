import '../../styles/index.css';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div style={{ display: "inline-grid", gap: "20px" }}>
                        <h1>Молодежный портал услуг</h1>
                        <p>С помощью нашего сервиса вы можете найти для себя работу или подобрать интересное обучение, также у вас есть возможность собрать все ваши достижения в одном месте и делиться вашими успехами со всеми!</p>
                        <a href="#" className="href-button">Перейти в портфолио</a>
                    </div>
                    <img src="/images/hero-image.png" alt="Мегафон"/>
                </div>
            </div>
        </section>
    );
}
