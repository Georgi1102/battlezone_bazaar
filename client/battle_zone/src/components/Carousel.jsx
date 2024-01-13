import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <div className='carousel-item'>
                {props.slides[currentIndex]}
            </div>
        )
    }
    return (
        <div className='carousel-container  bg-black flex flex-col justify-between h-[60vh]'>
            <div className='flex flex-row items-center justify-evenly'>
                {renderSlide()}
                <div className='flex flex-col justify-evenly h-32 text-2xl text-gray-300'>
                    <FontAwesomeIcon icon="fa-solid fa-diamond" onClick={() => setCurrentIndex(0)} />
                    <FontAwesomeIcon icon="fa-solid fa-diamond" onClick={() => setCurrentIndex(1)} />
                    <FontAwesomeIcon icon="fa-solid fa-diamond" onClick={() => setCurrentIndex(2)} />
                </div>
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='font-blackOpsOne text-6xl text-white'>Model</div>
                <div className='border-2 w-24 h-12 text-white flex items-center justify-center'>VIEW</div>
            </div>
        </div>
    )
}

export default Carousel;