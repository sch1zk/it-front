import '../../styles/index.css';

export default function VolunteeringSection() {
    return (
        <section className="volunteering">
            <div className="container">
                <div className="volunteering-content">
                    <div>
                        <h2>Волонтёрство - это важно!</h2>
                        <p>Каждый из нас должен принимать участие в волонтёрских мероприятиях, не становись исключением!</p>
                        <a href="#" className="href-button">Принять участие</a>
                    </div>
                    <div>
                        <img src="/images/volunteering-image.svg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
