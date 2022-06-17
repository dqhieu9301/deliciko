import React, { useState } from "react";
import './CheckOurMenu.scss'
import image01 from '../../../../img/image01.jpg'
import image02 from '../../../../img/image02.jpg'
import image03 from '../../../../img/image03.jpg'
import image04 from '../../../../img/image04.jpg'
import Slider from 'react-slick'
const CheckOurMenu = () => {
    const [state, setState] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleOnclick_Left = () => {
        const items = document.querySelectorAll('.check-our-menu-slider-item')
        const slider = document.querySelector('.check-our-menu-slider-main')
        const itemSize = items[0].offsetWidth
        if (state >= 0) {
            slider.style = `transform: translateX(${(-itemSize - 30) * (state)}px)`
            setState(state - 1)
        }
        else {
            setState(0)
        }
    }

    const handleOnclick_Right = () => {
        const items = document.querySelectorAll('.check-our-menu-slider-item')
        const slider = document.querySelector('.check-our-menu-slider-main')
        const itemSize = items[0].offsetWidth
        const numberClick = items.length - 3
        slider.style = `transform: translateX(${(-itemSize - 30) * (state + 1)}px)`
        if (state < numberClick - 1) {
            setState(state + 1)
        }
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
                    <i class="fa-solid fa-angle-left" onClick={handleOnclick_Left}></i>
                    <div className="check-our-menu-slider-container">
                        <div className="check-our-menu-slider-main">
                            <div className="check-our-menu-slider-item">
                                <div className="container-img">
                                    <img src={image01}></img>
                                </div>
                                <div className="cost">$ 42</div>
                                <h3>Flatbread Tuscan</h3>
                                <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                                <button>ORDER NOW</button>
                            </div>
                            <div className="check-our-menu-slider-item">
                                <div className="container-img">
                                    <img src={image02}></img>
                                </div>
                                <div className="cost">$ 42</div>
                                <h3>Flatbread Tuscan</h3>
                                <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                                <button>ORDER NOW</button>
                            </div>
                            <div className="check-our-menu-slider-item">
                                <div className="container-img">
                                    <img src={image03}>
                                    </img>
                                </div>
                                <div className="cost">$ 42</div>
                                <h3>Flatbread Tuscan</h3>
                                <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                                <button>ORDER NOW</button>
                            </div>
                            <div className="check-our-menu-slider-item">
                                <div className="container-img">
                                    <img src={image04}></img>
                                </div>
                                <div className="cost">$ 42</div>
                                <h3>Flatbread Tuscan</h3>
                                <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                                <button>ORDER NOW</button>
                            </div>
                            <div className="check-our-menu-slider-item">
                                <div className="container-img">
                                    <img src={image01}></img>
                                </div>
                                <div className="cost">$ 42</div>
                                <h3>Flatbread Tuscan</h3>
                                <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                                <button>ORDER NOW</button>
                            </div>
                        </div>
                    </div>
                    <i class="fa-solid fa-angle-right" onClick={handleOnclick_Right}></i>
                </div>
            </div>
        </div>
    )
}

export default CheckOurMenu;