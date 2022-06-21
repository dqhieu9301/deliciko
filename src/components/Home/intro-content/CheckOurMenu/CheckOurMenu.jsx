import React, { useState } from "react";
import './CheckOurMenu.scss'
import image01 from '../../../../img/image01.jpg'
import image02 from '../../../../img/image02.jpg'
import image03 from '../../../../img/image03.jpg'
import image04 from '../../../../img/image04.jpg'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
const CheckOurMenu = () => {
    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        responsive: [
            // { breakpoint: 740, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            // { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 740, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }
    return (
        <div className="check-our-menu" data-aos="zoom-in-up" data-aos-once='true' data-aos-duration="3000">
            <div className="check-our-menu-overlay"></div>
            <div className="check-our-menu-container">
                <h2>Check Our <h3>Menu</h3></h2>
                <div className="intro-icons">
                    <div className="intro-icon">
                        <i class="fa-solid fa-champagne-glasses"></i>
                        <p>STARTERS</p>
                    </div>
                    <div className="intro-icon">
                        <i class="fa-solid fa-mug-hot"></i>
                        <p>BREAKFAST</p>
                    </div>
                    <div className="intro-icon">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <p>LUNCH</p>
                    </div>
                    <div className="intro-icon">
                        <i class="fa-solid fa-champagne-glasses"></i>
                        <p>DINNER</p>
                    </div>
                    <div className="intro-icon">
                        <i class="fa-solid fa-champagne-glasses"></i>
                        <p>BEVERAGE</p>
                    </div>
                </div>
                <div className="seperate"></div>
                <div className="check-our-menu-slider">
                    <Slide {...properties}>
                        <div className="check-our-menu-slider-item">
                            <div className="container-img">
                                <img src={image01}></img>
                            </div>
                            <h3>Flatbread Tuscan</h3>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                            <button>ORDER NOW</button>
                        </div>
                        <div className="check-our-menu-slider-item">
                            <div className="container-img">
                                <img src={image02}></img>
                            </div>
                            <h3>Flatbread Tuscan</h3>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                            <button>ORDER NOW</button>
                        </div>
                        <div className="check-our-menu-slider-item">
                            <div className="container-img">
                                <img src={image03}>
                                </img>
                            </div>
                            <h3>Flatbread Tuscan</h3>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                            <button>ORDER NOW</button>
                        </div>
                        <div className="check-our-menu-slider-item">
                            <div className="container-img">
                                <img src={image04}></img>
                            </div>
                            <h3>Flatbread Tuscan</h3>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                            <button>ORDER NOW</button>
                        </div>
                        <div className="check-our-menu-slider-item">
                            <div className="container-img">
                                <img src={image01}></img>
                            </div>
                            <h3>Flatbread Tuscan</h3>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                            <button>ORDER NOW</button>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default CheckOurMenu;