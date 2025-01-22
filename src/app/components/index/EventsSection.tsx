import '../../styles/index.css';

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
                        <div className="event-card" style={{ backgroundColor: "#F3F3F3" }}>
                            <a href="NONE">
                                <img src="/images/Icon.svg"/>
                                <p>Узнать подробнее</p>
                            </a>
                            <img src="/images/event12.svg"/>
                        </div>
                        <div className="event-card" style={{ backgroundColor: "#B9FF66"}}>
                            <a href="NONE">
                                <img src="/images/Icon.svg"/>
                                <p>Узнать подробнее</p>
                            </a>
                            <img src="/images/event2.svg"/>
                        </div>
                        <div className="event-card" style={{ backgroundColor: "#191A23" }}>
                            <a href="NONE">
                                <img src="/images/Icon_white.svg"/>
                                <p style={{ color: "#FFFFFF" }}>Узнать подробнее</p>
                            </a>
                            <img src="/images/event3.svg"/>
                        </div>
                        <div className="event-card" style={{ backgroundColor: "#F3F3F3"}}>
                            <a href="NONE">
                                <img src="/images/Icon.svg"/>
                                <p>Узнать подробнее</p>
                            </a>
                            <img src="/images/event4.svg"/>
                        </div>
                        <div className="event-card" style={{ backgroundColor: "#B9FF66" }}>
                            <a href="NONE">
                                <img src="/images/Icon.svg"/>
                                <p>Узнать подробнее</p>
                            </a>
                            <img src="/images/event5.svg"/>
                        </div>
                        <div className="event-card" style={{ backgroundColor: "#191A23"}}>
                            <a href="NONE">
                                <img src="/images/Icon_white.svg"/>
                                <p style={{ color: "#FFFFFF" }}>Узнать подробнее</p>
                            </a>
                            <img src="/images/event3.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
