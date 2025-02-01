import '@/styles/index.css';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

interface EventCardProps {
    background_сolor: string;
    text_color: string;
    arrow_image_path: string;
    right_image_path: string;
}

const EventCard: React.FC<EventCardProps> = ({ background_сolor, text_color, arrow_image_path, right_image_path}) => {
    return (
        <div style={{
                backgroundColor: background_сolor,
                borderRadius: "var(--border-radius-large)",
                padding: "0 50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 5px 0 #000",
                border: "1px solid #000",
                height: "250px"
            }}>
            <a href="NONE" className="href-plain" style={{
                fontSize: "20px",
                display: "flex",
                gap: "15px"
            }}>
                <img src={arrow_image_path}/>
                <p style={{ color: text_color, alignSelf: "center" }}>Узнать подробнее</p>
            </a>
            <Image src={right_image_path} alt="События" width={220} height={220}/>
        </div>
    );
};

export default function EventsSection() {
    return (
        <section className="container">
            <SectionTitle
                title="Топовые события"
                description="Стань участником самых крутых событий и ивентов!"
                max_width="450px"
            />
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "40px"
            }}>
                <EventCard
                    background_сolor="#F3F3F3"
                    text_color="#000"
                    arrow_image_path="/images/index/event-arrow-green.svg"
                    right_image_path="/images/index/event-card-1.png"
                />
                <EventCard
                    background_сolor="#B9FF66"
                    text_color="#000"
                    arrow_image_path="/images/index/event-arrow-white.svg"
                    right_image_path="/images/index/event-card-2.png"
                />
                <EventCard
                    background_сolor="#191A23"
                    text_color="#fff"
                    arrow_image_path="/images/index/event-arrow-black.svg"
                    right_image_path="/images/index/event-card-3.png"
                />
                <EventCard
                    background_сolor="#F3F3F3"
                    text_color="#000"
                    arrow_image_path="/images/index/event-arrow-green.svg"
                    right_image_path="/images/index/event-card-4.png"
                />
                <EventCard
                    background_сolor="#B9FF66"
                    text_color="#000"
                    arrow_image_path="/images/index/event-arrow-white.svg"
                    right_image_path="/images/index/event-card-5.png"
                />
                <EventCard
                    background_сolor="#191A23"
                    text_color="#fff"
                    arrow_image_path="/images/index/event-arrow-black.svg"
                    right_image_path="/images/index/event-card-6.png"
                />
            </div>
        </section>
    );
}
