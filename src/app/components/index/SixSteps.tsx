"use client";

import { useState } from 'react';
import '../../styles/index.css';

interface SixStepsCardProps {
    number: string;
    title: string;
    content: string;
}

const SixStepsCard: React.FC<SixStepsCardProps> = ({ number, title, content }) => {
    const [isContentVisible, setContentVisible] = useState<boolean>(false);
  
    const toggleContent = () => {
        setContentVisible((prevState) => !prevState);
    };
  
    return (
        <div className="six-steps-card">
            <div className="six-steps-card-header">
                <span>{number}</span>
                <h3>{title}</h3>
                <button className="six-steps-card-toggle" onClick={toggleContent}>
                    {isContentVisible ? '-' : '+'}
                </button>
            </div>
            {isContentVisible && (
                <div className="six-steps-card-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default function SixStepsSection() {
    return (
        <section className="six-steps">
            <div className="container">
                <div className="six-steps-content">
                    <div className="section-title">
                        <h2>Шесть этапов поиска себя в современном мире</h2>
                        <p>по версии психотерапевта<br/>Екатерины Сигитовой:</p>
                    </div>
                    <div className="six-steps-grid">
                        <SixStepsCard
                            number="01"
                            title="Наблюдение"
                            content="Обычно вызывает сильные чувства: раздражение, бессилие, гнев, отвращение, стыд, вину, отчаяние."
                        />
                        <SixStepsCard
                            number="02"
                            title="Привыкание"
                            content="???"
                        />
                        <SixStepsCard
                            number="03"
                            title="Успокоение"
                            content="???"
                        />
                        <SixStepsCard
                            number="04"
                            title="Признание ценности"
                            content="???"
                        />
                        <SixStepsCard
                            number="05"
                            title="Принятие"
                            content="???"
                        />
                        <SixStepsCard
                            number="06"
                            title="Любовь"
                            content="???"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
