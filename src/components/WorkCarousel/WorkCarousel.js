import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic1 from "../../img/project1.PNG"
import pic2 from "../../img/project2.png"
import pic3 from "../../img/project3.png"
import "./WorkCarousel.css"

export default function WorkCarousel() {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    {/* <div className='job-description d-block w-100'>

                    </div> */}
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                        height="400px"
                        width="500px"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <div className='job-description'>

                    </div> */}
                    <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                    height="400px"
                    width="500px"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <div className='job-description'>

                    </div> */}
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                    height="400px"
                    width="500px"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}
