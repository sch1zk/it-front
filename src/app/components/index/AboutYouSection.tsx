import '../../styles/index.css';

interface AboutYouCardProps {
    image_path: string;
    name: string;
    role: string;
    content: string;
}

const AboutYouCard: React.FC<AboutYouCardProps> = ({ image_path, name, role, content }) => {
    return (
        <div className="about-you-card">
            <div className="about-you-card-info">
                <img src={image_path}/>
                <div>
                    <a href="#" className="linkedin-icon">in</a>
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
            <div>
                <hr/>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default function AboutYouSection() {
    return (
        <section className="about-you">
            <div className="container">
                <div className="about-you-content">
                    <div className="section-title">
                        <h2>Расскажи о себе!</h2>
                        <p>Не бойся рассказывать о своих сильных сторонах,<br/>стесняться тут нечего, это наоборот очень круто!</p>
                    </div>
                    <div className="about-you-grid">
                        <AboutYouCard
                            image_path="/images/Picture1.png"
                            name="Мельникова Арина"
                            role="Личный ассистент"
                            content="Мне 19 лет, я обожаю искусство, посещаю курсы по веб-дизайну, хотела бы попрактиковаться ))"
                        />
                        <AboutYouCard
                            image_path="/images/Picture2.png"
                            name="Мельникова Арина"
                            role="Личный ассистент"
                            content="Мне 19 лет, я обожаю искусство, посещаю курсы по веб-дизайну, хотела бы попрактиковаться ))"
                        />
                        <AboutYouCard
                            image_path="/images/Picture3.png"
                            name="Ткаченко Александр"
                            role="Разработчик"
                            content="Хотел бы найти друзей, так как из-за моего увлечения у меня практически нет времени на знакомства"
                        />
                        <AboutYouCard
                            image_path="/images/Picture4.png"
                            name="Буряков Никита"
                            role="Продакт-менеджер"
                            content="Хотел бы найти место для стажировки и отработки своих навыков!"
                        />
                        <AboutYouCard
                            image_path="/images/Picture5.png"
                            name="Артемий Шевченко"
                            role="Волонтер"
                            content="Я хотел бы принять активное участие в волонтерской жизни своего города !"
                        />
                        <AboutYouCard
                            image_path="/images/Picture6.png"
                            name="Озерова Мария"
                            role="Танцовщица"
                            content="Я бы хотела организовать круто танцевальное мероприятие в своем городе !"
                        />
                    </div>
                    <div className="about-you-href">
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
