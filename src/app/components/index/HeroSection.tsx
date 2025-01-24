import '../../styles/index.css';

export default function HeroSection() {
    return (
        <section className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" , maxWidth: "500px" }}>
                    <h1 style={{ fontSize: "60px" }}>Молодежный портал услуг</h1>
                    <p style={{ fontSize: "20px" }}>С помощью нашего сервиса вы можете найти для себя работу или подобрать интересное обучение, также у вас есть возможность собрать все ваши достижения в одном месте и делиться вашими успехами со всеми!</p>
                    <a href="#" className="href-button">Перейти в портфолио</a>
                </div>
                <img src="/images/index/megaphone.svg" alt="Мегафон" draggable="false"/>
            </div>
        </section>
    );
}
