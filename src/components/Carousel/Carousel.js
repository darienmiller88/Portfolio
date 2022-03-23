import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef } from 'react';
import "./Carousel.css"

export default function Carousel({ projectImages, projectNumber }) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    const indicatorRef = useRef(null)
    const [indicators, setIndicators] = useState([])
    const [indicatorsNodeList, setindicatorsNodeList] = useState(null)
    const activeIndicatorClassname = "active_indicator"

    useEffect(() => {
        setIndicators(Array.from(indicatorRef.current.querySelectorAll(".indicator")))
        setindicatorsNodeList(indicatorRef.current.querySelectorAll(".indicator"))
    }, [])

    const toggleActiveIndicator = (e) => {
        indicatorsNodeList.forEach((indicator, i) => {        
            if(indicator.classList.contains(activeIndicatorClassname)){
                indicator.classList.remove(activeIndicatorClassname)
            }
        })
        
        setCurrentPictureIndex(parseInt(e.target.id))
        e.target.classList.add(activeIndicatorClassname)
    }

    const leftArrowOnclick = () => {
        const activeIndex = indicators.findIndex(indicator => indicator.classList.contains(activeIndicatorClassname))
        
        //First, remove the active class from the 
        indicators[activeIndex].classList.remove(activeIndicatorClassname)
        if(activeIndex === 0){
            indicators[indicators.length - 1].classList.add(activeIndicatorClassname)
            setCurrentPictureIndex(indicators.length - 1)
        }else{
            indicators[activeIndex - 1].classList.add(activeIndicatorClassname)
            setCurrentPictureIndex(activeIndex - 1)
        }
    }
         
    const rightArrowOnclick = () => {
        const activeIndex = indicators.findIndex(indicator => indicator.classList.contains(activeIndicatorClassname))
        
        indicators[activeIndex].classList.remove(activeIndicatorClassname)
        if(activeIndex === indicators.length - 1){
            indicators[0].classList.add(activeIndicatorClassname)
            setCurrentPictureIndex(0)
        }else{
            indicators[activeIndex + 1].classList.add(activeIndicatorClassname)
            setCurrentPictureIndex(activeIndex + 1)
        }
    }

    return (
        <div className='carousel_wrapper'>
            <div className="left-arrow">
                <FaAngleLeft className='arrow' onClick={ leftArrowOnclick }/>
            </div>

            {/* Since each project card alternates between "picture, description" and "description, picture"
                we must also alternate for which side of the picture is also rounded*/}
            <div className={`current_picture ${projectNumber % 2 === 0 ? "current_picture_left_rounded" : "current_picture_right_rounded" }`}>
                <img alt='temp' src={ projectImages[currentPictureIndex] } />
            </div>

            <div className="right-arrow">
                <FaAngleRight className='arrow' onClick={ rightArrowOnclick }/>
            </div> 

            <div className="indicator_wrapper" ref={ indicatorRef }>
                <div className="indicator_inner">
                    {
                        projectImages.map((elem, i) => {
                            return (
                                <div 
                                className={i === 0 ? `indicator ${activeIndicatorClassname}` : "indicator"}
                                onClick={toggleActiveIndicator}
                                key={i}
                                id={i}
                                />
                            )
                        })
                    } 
                </div>
                                    
            </div>
        </div>
                // {/* <div className='carousel'>
                //     <Carousel activeIndex={index} onSlid={slideEvent} onSelect={selectEvent}>
                //         {
                //             projectImages.map((image, i) => {
                //                 return(
                //                     <Carousel.Item className='carousel_item' interval={interval}  key={i} >
                //                         <img
                //                         className="d-block w-100"
                //                         // style={{'height':"100%"}}
                //                         // className='carousel_image'
                //                         src={image}
                //                         alt="slide"
                //                         />
                //                     </Carousel.Item>
                //                 )
                //             })
                //         }
                //     </Carousel>        
                // </div> */}

        
            // {/* <div className='project_pictures' ref={imagesRef}>
            //     {
            //         projectImages.map((image, i) => {
            //             return (
            //                 <div className='project_picture' onClick={imageOnclick}>
            //                     <img className={i === 0 ? activeClassname : null} alt='project_picture' src={image} key={i}/>
            //                 </div>
            //             )
            //         })
            //     }
            // </div>         */}
    )
}
