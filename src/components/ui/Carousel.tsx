"use client"

import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/slick.css';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

interface CarouselArrowProps {
  onClick: () => void;
}

const CarouselArrowNext: React.FC<CarouselArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      
      className="absolute block transform -translate-y-1/2 cursor-pointer text-primary -right-2 top-1/2"
    >
      <MdNavigateNext size={60} />
    </button>
  );
};

const CarouselArrowPrev: React.FC<CarouselArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute block transform -translate-y-1/2 cursor-pointer text-primary -left-2 top-1/2"
    >
      <MdNavigateBefore size={60} />
    </button>
  );
};

interface CarouselProps {
  content: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const sliderRef = useRef<Slider>(null); // создаем реф для Slider

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); 
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CarouselArrowNext onClick={handleNextClick} />,
    prevArrow: <CarouselArrowPrev onClick={handlePrevClick} />,
    dotsClass: "review-dots",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Slider ref={sliderRef} {...sliderSettings} className="p-10">
      {content.map((node, index) => (
        <div key={index}>{node}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
