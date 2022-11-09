import React from "react";
import Carousel from 'react-grid-carousel';

import imgcar1 from '../../assets/background.old.jpg';
import imgcar2 from '../../assets/image-carousel-2.jpg';
import imgcar3 from '../../assets/image-carousel-3.png';
import imgcar4 from '../../assets/image-carousel-4.png';
import imgcar5 from '../../assets/image-carousel-5.jpg';
import imgcar6 from '../../assets/image-carousel-6.jpg';
import imgcar7 from '../../assets/image-carousel-7.jpg';
import imgcar8 from '../../assets/image-carousel-8.jpg';


export default function Gallery() {
    return (
        <div className="cursor-pointer">
            <Carousel cols={1} loop >
                <Carousel.Item>
                    <img src={imgcar1} className="border-black border-2 lg:ml-16 lg:mr-11  rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar2} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar3} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar4} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar5} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar6} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar7} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgcar8} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}