import React, { useState } from 'react';
import { useRef } from 'react';
import Carousel from '../Carousel/Carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function ProjectCarousel({projectImages}) {
    const [index, setIndex] = useState(0)    
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    const [isActive, setActive] = useState(false)
    const imagesRef = useRef(null)
    const indicatorRef = useRef(null)
    const interval = 3500
    const activeClassname = "active"
    const activeIndicatorClassname = "active_indicator"
    const activeIndicatorColor = "#bebebe"

    // const slideEvent = (selectedIndex) => {
    //     setIndex(selectedIndex)
    //     changeActiveImage(selectedIndex)
    // }
    
    // const selectEvent = (selectedIndex) => {
    //     setIndex(selectedIndex)
    //     changeActiveImage(selectedIndex)
    // }

    // const imageOnclick = (e) => {
    //     const pictures = imagesRef.current.querySelectorAll(".project_picture")

    //     pictures.forEach((picture, i) => {
    //         if(picture.children[0].classList.contains(activeClassname)){
    //             picture.children[0].classList.remove(activeClassname)
    //         }

    //         if(e.target === picture.children[0]){
    //             console.log("elems are equal! at index:", i);
    //             setIndex(i)
    //         }
    //     });        
        
    //     e.target.classList.add(activeClassname) 
    // }

    // const changeActiveImage = (selectedIndex) => {
    //     const pictures = imagesRef.current.querySelectorAll(".project_picture")

    //     pictures.forEach((picture, i) => {
    //         if(picture.children[0].classList.contains(activeClassname)){
    //             picture.children[0].classList.remove(activeClassname)
    //         }

    //         if(i === selectedIndex){
    //             picture.children[0].classList.add(activeClassname)
    //         }
    //     });    
    // }

    return (
        <Carousel projectImages={projectImages}/>
    );
}
