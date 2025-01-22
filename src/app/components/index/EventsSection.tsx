import '../../styles/index.css';

interface EventCardProps {
    background_сolor: string;
    text_color: string;
    arrow_image_path: string;
    right_image_path: string;
}

const EventCard: React.FC<EventCardProps> = ({ background_сolor, text_color, arrow_image_path, right_image_path}) => {
    return (
        <div className="event-card" style={{ backgroundColor: background_сolor }}>
            <a href="NONE" className="href-plain">
                <img src={arrow_image_path}/>
                <p style={{ color: text_color, alignSelf: "center" }}>Узнать подробнее</p>
            </a>
            <img src={right_image_path}/>
        </div>
    );
};

export default function EventsSection() {
    return (
        <section className="events">
            <div className="container">
                <div className="events-content">
                    <div className="section-title">
                        <h2>Топовые события</h2>
                        <p>Стань участником самых крутых событий, которые проходят на территории нашей страны!</p>
                    </div>
                    <div className="events-grid">
                        <EventCard
                            background_сolor="#F3F3F3"
                            text_color="#000"
                            arrow_image_path="/images/Icon.svg"
                            right_image_path="/images/event12.svg"
                        />
                        <EventCard
                            background_сolor="#B9FF66"
                            text_color="#000"
                            arrow_image_path="/images/Icon.svg"
                            right_image_path="/images/event2.svg"
                        />
                        <EventCard
                            background_сolor="#191A23"
                            text_color="#fff"
                            arrow_image_path="/images/Icon_white.svg"
                            right_image_path="/images/event3.svg"
                        />
                        <EventCard
                            background_сolor="#F3F3F3"
                            text_color="#000"
                            arrow_image_path="/images/Icon.svg"
                            right_image_path="/images/event4.svg"
                        />
                        <EventCard
                            background_сolor="#B9FF66"
                            text_color="#000"
                            arrow_image_path="/images/Icon.svg"
                            right_image_path="/images/event5.svg"
                        />
                        <EventCard
                            background_сolor="#191A23"
                            text_color="#fff"
                            arrow_image_path="/images/Icon_white.svg"
                            right_image_path="/images/event3.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
