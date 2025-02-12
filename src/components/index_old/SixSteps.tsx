"use client";

import { useState } from 'react';
import '@/styles/index.css';
import SectionTitle from './SectionTitle';

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
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            gap: "25px",
            border: "1px solid #000",
            boxShadow: "0px 5px 0px #000",
            backgroundColor: "#F3F3F3",
            borderRadius: "20px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    <span style={{ fontSize: "60px", fontFamily: "var(--font-extra)" }}>
                        {number}
                    </span>
                    <h3 style={{ fontSize: "30px", fontWeight: "normal" }}>
                        {title}
                    </h3>
                </div>
                <button onClick={toggleContent} style={{
                    backgroundColor: "#F3F3F3",
                    border: "2px solid #333",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "50px",
                    color: "black",
                    cursor: "pointer",
                    padding: "0",
                    fontFamily: "var(--font-extra)"
                }}>
                    <img
                        src={`images/index/icon_${isContentVisible ? 'minus' : 'plus'}.svg`} 
                        style={{ width: "25px", height: "25px" }}
                    />
                </button>
            </div>
            {isContentVisible && (
                <div style={{
                    borderTop: "1px solid #000",
                    paddingTop: "25px"
                }}>
                    <p style={{
                        fontSize: "16px",
                    }}>{content}</p>
                </div>
            )}
        </div>
    );
};

export default function SixStepsSection() {
    return (
        <section className="container">
            <SectionTitle
                title="Шесть этапов поиска себя"
                description="по версии психотерапевта Екатерины Сигитовой:"
                max_width="500px"
            />
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
            }}>
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
        </section>
    );
}
