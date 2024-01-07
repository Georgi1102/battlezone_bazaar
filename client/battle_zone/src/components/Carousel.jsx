import React, { useState } from 'react';

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        if (currentIndex === props.slides.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const goToPrevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(props.slides.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }
    const renderSlide = () => {
        if (!props.slides) {
            return
        }
        return (
            <div className='carousel-item' style={{maxHeight: "400px"}}>
                {props.slides[currentIndex]}
            </div>
        )
    }
    return (
        <div className='carousel-container  bg-black flex items-center justify-center'>
            <button className='prev-button' onClick={goToPrevSlide}>
                {"<"}
            </button>
            {renderSlide()}
            <button className='next-button' onClick={goToNextSlide}>
                {">"}
            </button>
        </div>
    )
}

export default Carousel;