import '../../styles/index.css';

export default function VolunteeringSection() {
    return (
        <section className="container">
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "var(--color-bg-card)",
                borderRadius: "var(--border-radius-large)",
                padding: "40px 80px"
            }}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "25px"
                    }}>
                    <h2 style={{ fontSize: "30px" }}>Волонтёрство - это важно!</h2>
                    <p style={{
                        fontSize: "18px",
                        width: "400px"
                    }}>Каждый из нас должен принимать участие в волонтёрских мероприятиях, не становись исключением!</p>
                    <a href="#" className="href-button">Принять участие</a>
                </div>

                <img src="/images/index/volunteering.svg" style={{
                    maxWidth: "100%",
                    marginTop: "-80px",
                    marginBottom: "-80px",
                    position: "relative",
                }}/>
            </div>

        </section>
    );
}
