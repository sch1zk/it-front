import '@/styles/index.css';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

interface AboutYouCardProps {
    image_path: string;
    name: string;
    role: string;
    content: string;
}

const AboutYouCard: React.FC<AboutYouCardProps> = ({ image_path, name, role, content }) => {
    return (
        <div style={{
            border: "1px solid #000",
            boxShadow: "0px 5px 0px #000",
            backgroundColor: "var(--color-bg-card)",
            borderRadius: "var(--border-radius-large)",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "15px",
            height: "300px"
        }}>
            <div style={{ height: "100%", display: "inline-grid", alignItems: "end" }}>
                <div style={{ display: "flex", position: "relative" }}>
                    <div style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "12px"
                    }}>
                        <Image src={image_path} alt="О вас" width={98} height={98} style={{ 
                                filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.9))",
                                width: "auto",
                                height: "70px"
                            }}/>
                        <div>
                            <h3 style={{ fontSize: "20px" }}>{name}</h3>
                            <p style={{ fontSize: "18px", lineHeight: "1.2" }}>
                                {role}
                            </p>
                        </div>
                    </div>
                    <a href="#" className="linkedin-icon">in</a>
                </div>
            </div>
            <hr style={{
                borderTop: "1px solid #000",
                margin: "10px 0"
            }}/>
            <p style={{
                fontSize: "18px",
                lineHeight: "1.2",
                whiteSpace: "break-spaces",
                height: "100%"
            }}>
                {content}
            </p>
        </div>
    );
};

export default function AboutYouSection() {
    return (
        <section className="container">
            <SectionTitle
                title="Расскажи о себе"
                description="Не бойся рассказывать о своих сильных сторонах, стесняться тут нечего, это наоборот очень круто!"
                max_width="500px"
            />
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px"
            }}>
                <AboutYouCard
                    image_path="/images/index/you-1.png"
                    name="Мельникова Арина"
                    role="Личный ассистент"
                    content="Мне 19 лет, я обожаю искусство, посещаю курсы по веб-дизайну, хотела бы попрактиковаться ))"
                />
                <AboutYouCard
                    image_path="/images/index/you-2.png"
                    name="Мельникова Арина"
                    role="Личный ассистент"
                    content="Мне 19 лет, я обожаю искусство, посещаю курсы по веб-дизайну, хотела бы попрактиковаться ))"
                />
                <AboutYouCard
                    image_path="/images/index/you-3.png"
                    name="Ткаченко Александр"
                    role="Разработчик"
                    content="Хотел бы найти друзей, так как из-за моего увлечения у меня практически нет времени на знакомства"
                />
                <AboutYouCard
                    image_path="/images/index/you-4.png"
                    name="Буряков Никита"
                    role="Продакт-менеджер"
                    content="Хотел бы найти место для стажировки и отработки своих навыков!"
                />
                <AboutYouCard
                    image_path="/images/index/you-5.png"
                    name="Артемий Шевченко"
                    role="Волонтер"
                    content="Я хотел бы принять активное участие в волонтерской жизни своего города !"
                />
                <AboutYouCard
                    image_path="/images/index/you-6.png"
                    name="Озерова Мария"
                    role="Танцовщица"
                    content="Я бы хотела организовать круто танцевальное мероприятие в своем городе !"
                />
            </div>
            <div style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <a href="#" className="href-button">Подробнее</a>
            </div>
        </section>
    );
}
