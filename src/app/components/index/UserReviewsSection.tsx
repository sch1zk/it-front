'use client';

import React from 'react';
import Slider from 'react-slick';
import '@/styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from './SectionTitle';

interface UserReviewCardProps {
    content: string;
    name: string;
    role: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({ content, name, role }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "0 20px"
        }}>
            <div style={{
                color: "#fff",
                padding: "0 var(--border-radius-medium)"
            }}>
                <p>{role}</p>
                <h3 style={{ 
                    fontSize: "20px",
                    color: "var(--color-primary)"
                }}>
                    {name}
                </h3>
            </div>
            <div style={{
                padding: "20px 45px",
                border: "1px solid var(--color-primary)",
                borderRadius: "var(--border-radius-medium)",
                color: "#fff",
                height: "75px",
                display: "flex",
                alignItems: "center"
            }}>
                <p style={{ textAlign: "center" }}>{content}</p>
            </div>
        </div>
    );
};

export default function UserReviewsSection() {
    const reviews = [
        { content: 'Это лучший сервис, которым я пользовался!', name: 'Иван Иванов', role: 'Дизайнер' },
        { content: 'Очень круто, всем рекомендую!', name: 'Мария Петрова', role: 'Маркетолог' },
        { content: 'Сервис значительно упростил мою работу.', name: 'Алексей Смирнов', role: 'Разработчик' },
        { content: 'Сервис значительно упростил мою работу.', name: 'Алексей Смирнов', role: 'Разработчик' },
        { content: 'Сервис значительно упростил мою работу.', name: 'Алексей Смирнов', role: 'Разработчик' },
    ];

    const sliderSettings = {
        dots: true, // Показывает индикаторы слайдов
        infinite: true, // Бесконечная прокрутка
        speed: 500, // Скорость перехода (мс)
        slidesToShow: 3, // Количество отображаемых слайдов
        slidesToScroll: 1, // Количество слайдов за один прокрут
        arrows: false,
        dotsClass: "review-dots",
        appendDots: (dots: React.ReactNode) => (
            <div
              style={{
                
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          )
    };

    return (
        <section className="container">
            <SectionTitle
                title="Отзывы наших пользователей"
                description="Каждый из вас очень важен для нас!"
                max_width="500px"
            />
            <div style={{
                padding: "35px 50px 50px 50px",
                backgroundColor: "var(--color-bg)",
                borderRadius: "var(--border-radius-large)"
            }}>
                <Slider {...sliderSettings}>
                    {reviews.map((review, index) => (
                        <UserReviewCard
                            key={index}
                            content={review.content}
                            name={review.name}
                            role={review.role}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
}
