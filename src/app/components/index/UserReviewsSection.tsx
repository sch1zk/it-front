'use client';

import React from 'react';
import Slider from 'react-slick';
import '../../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface UserReviewCardProps {
    content: string;
    name: string;
    role: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({ content, name, role }) => {
    return (
        <div className="user-review-card">
            <div className="user-review-card-content">
                <div className="user-review-card-top">
                    <p>{content}</p>
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
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
        { content: 'Сервис значительно упростил мою работу.', name: 'Алексей Смирнов', role: 'Разработчик' },
    ];

    const sliderSettings = {
        dots: true, // Показывает индикаторы слайдов
        infinite: true, // Бесконечная прокрутка
        speed: 500, // Скорость перехода (мс)
        slidesToShow: 3, // Количество отображаемых слайдов
        slidesToScroll: 1, // Количество слайдов за один прокрут
    };

    return (
        <section className="user-reviews">
            <div className="container">
                <div className="user-reviews-content">
                    <div className="section-title">
                        <h2>Отзывы наших пользователей</h2>
                        <p>Каждый из вас очень важен для нас!</p>
                    </div>
                    <div className="user-reviews-carousel">
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
                </div>
            </div>
        </section>
    );
}
