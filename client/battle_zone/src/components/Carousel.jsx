import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate()
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
                    <FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: currentIndex === 0 ? "red" : '' }} onClick={() => setCurrentIndex(0)} />
                    <FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: currentIndex === 1 ? "red" : '' }} onClick={() => setCurrentIndex(1)} />
                    <FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: currentIndex === 2 ? "red" : '' }} onClick={() => setCurrentIndex(2)} />
                </div>
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='font-blackOpsOne text-6xl text-white'>Model</div>
                <div className='border-2 w-24 h-12 text-white flex items-center justify-center' onClick={() => navigate("/products")} style={{cursor: "pointer"}}>VIEW</div>
            </div>
        </div>
    )
}

export default Carousel;