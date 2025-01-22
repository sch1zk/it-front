import '../../styles/index.css';

export default function SelfDiscoverySection() {
    return (
        <section className="self-discovery">
            <div className="container">
                <div className="self-discovery-content">
                    <div className="section-title">
                        <h2>Найди себя в обществе!</h2>
                        <p>Если ты до сих пор не нашёл себя, мы поможем тебе!</p>
                    </div>
                    <div className="self-discovery-grid">
                        <div className="self-discovery-card">
                            <p>Хочешь помогать людям?<br/>Попробуй заняться волонтерской деятельностью!</p>
                            <a href="NONE">
                                <p>Подробнее</p>
                                <img src="images/icon_strelka.svg" alt="Волонтерская деятельность"/>
                            </a>
                        </div>
                        <div className="self-discovery-card">
                            <p>Тебе интересно найти подработку или постоянное место работы?<br/>Мы готовы помочь!</p>
                            <a href="NONE">
                                <p>Подробнее</p>
                                <img src="images/icon_strelka.svg" alt="Волонтерская деятельность"/>
                            </a>
                        </div>
                        <div className="self-discovery-card">
                            <p>Тебе интересно улучшить свои навыки в какой-либо сфере?<br/>Мы готовы тебе помочь!</p>
                            <a href="NONE">
                                <p>Подробнее</p>
                                <img src="images/icon_strelka.svg" alt="Волонтерская деятельность"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
