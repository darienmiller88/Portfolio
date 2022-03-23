import React from 'react';
import { Carousel } from 'react-bootstrap';
import { pic1, pic2, pic3 } from "../../Constants/Constants"


export default function TestCarousel() {
    const interval = 2000;

    return (
        <div className='test_carousel'>
            <Carousel>
                <Carousel.Item interval={interval}>
                    <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={interval}>
                    <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={interval}>
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
        </div>
    )
}
