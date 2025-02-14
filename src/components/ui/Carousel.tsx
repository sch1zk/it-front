"use client"

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import clsx from 'clsx';
import { useState } from 'react';

interface CarouselProps {
  content: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const [itemAnimation, setItemAnimation] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const canSlideNext = () => itemIndex < content.length - 1;

  const canSlidePrev = () => itemIndex > 0;

  const slideNext = () => {
  if (!itemAnimation && canSlideNext()) {
      setItemAnimation(true);
      setItemIndex(itemIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!itemAnimation && canSlidePrev()) {
      setItemAnimation(true);
      setItemIndex(itemIndex - 1);
    }
  };

  const onSlideChanged = () => {
    setItemAnimation(false);
  };

  return (
    <div className="relative">
      <AliceCarousel
        activeIndex={itemIndex}
        disableDotsControls
        disableButtonsControls
        onSlideChanged={onSlideChanged}
        mouseTracking={false}
        items={content}
      />
      <button
        onClick={slidePrev}
        disabled={!canSlidePrev()}
        className={clsx(
          "absolute block transform -translate-y-1/2 cursor-pointer text-primary -left-0 top-1/2",
          !canSlidePrev() && "opacity-25"
        )}
      >
        <MdNavigateBefore size={60} />
      </button>
      <button
        onClick={slideNext}
        disabled={!canSlideNext()}
        className={clsx(
          "absolute block transform -translate-y-1/2 cursor-pointer text-primary -right-0 top-1/2",
          !canSlideNext() && "opacity-25"
        )}
      >
        <MdNavigateNext size={60} />
      </button>
    </div>
  );
};

export default Carousel;