import '../../styles/index.css';

export default function HeroSection() {
    return (
        <section className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" , maxWidth: "460px" }}>
                    <h1 style={{ fontSize: "60px" }}>Молодежный портал услуг</h1>
                    <p style={{ fontSize: "20px" }}>Найди для себя работу или подбери интересное обучение! Собирай все свои достижения в одном месте и делись успехами с остальными!</p>
                    <a href="#" className="href-button">Перейти в портфолио</a>
                </div>
                <img src="/images/index/megaphone.svg" alt="Мегафон" draggable="false"/>
            </div>
        </section>
    );
}
