import '../../styles/index.css';
import SectionTitle from './SectionTitle';

interface SelfDiscoveryCardProps {
    text_top: string;
    text_bottom: string;
}

const SelfDiscoveryCard: React.FC<SelfDiscoveryCardProps> = ({ text_top, text_bottom }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "white"
        }}>
            <div>
                <p style={{ fontSize: "16px", maxWidth: "300px" }}>{text_top}</p>
                <p style={{ fontSize: "16px", maxWidth: "300px" }}>{text_bottom}</p>
            </div>
            <a href="NONE" className="href-plain" style={{
                color: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <p style={{ fontSize: "16px", maxWidth: "300px" }}>Подробнее</p>
                <img src="images/index/arrow_ur.svg" style={{
                    
                    width: "16px",
                    height: "16px"
                }}/>
            </a>
        </div>
    );
};

export default function SelfDiscoverySection() {
    return (
        <section className="container">
            <SectionTitle
                title="Найди себя в обществе"
                description="Если ты до сих пор не нашёл себя, мы поможем тебе!"
                max_width="500px"
            />
            <div style={{
                borderRadius: "var(--border-radius-large)",
                backgroundColor: "var(--color-bg)",
                display: "flex",
                padding: "50px 75px",
                alignItems: "stretch",
                justifyContent: "space-between"
            }}>
                <SelfDiscoveryCard
                    text_top="Хочешь помогать людям?"
                    text_bottom="Попробуй заняться волонтерской деятельностью!"
                />
                <div className="separator"/>
                <SelfDiscoveryCard
                    text_top="Тебе интересно найти подработку или постоянное место работы?"
                    text_bottom="Мы готовы помочь!"
                />
                <div className="separator"/>
                <SelfDiscoveryCard
                    text_top="Тебе интересно улучшить свои навыки в какой-либо сфере?"
                    text_bottom="Мы готовы тебе помочь!"
                />
            </div>
        </section>
    );
}
