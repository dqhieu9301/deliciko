import React from "react";
import './slider.scss'
import icon_restaurant1 from '../../../img/icon_restaurant1.png'
import icon_restaurant2 from '../../../img/icon_restaurant2.png'
import icon_restaurant3 from '../../../img/icon_restaurant3.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = () => {
    return (
        <div className="slider" >
            <div className="slider-main">
                <Slide easing='ease' duration='3000'>
                    <div className="slider-item" id="item-one">
                        <div className="item-content">
                            <h2 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Welcome To</h2>
                            <h1 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Deliciko</h1>
                            <span data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>
                                <p>HOME OF THE BEST ITALIAN FOOD</p>
                            </span>
                            <div className="view-menu" data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>VIEW MENU</div>
                        </div>
                    </div>
                    <div className="slider-item" id="item-two">
                        <div className="item-content">
                            <h2 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Welcome To</h2>
                            <h1 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Speak Taste</h1>
                            <span data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>
                                <p>HOME OF THE BEST ITALIAN FOOD</p>
                            </span>
                            <div className="view-menu" data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>VIEW MENU</div>
                        </div>
                    </div>
                    <div className="slider-item" id="item-three">
                        <div className="item-content">
                            <h2 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Welcome To</h2>
                            <h1 data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>Deliciko Food</h1>
                            <span data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>
                                <p>HOME OF THE BEST ITALIAN FOOD</p>
                            </span>
                            <div className="view-menu" data-aos="fade-up"
                                data-aos-duration="3000"
                                data-aos-once='true'>VIEW MENU</div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="intro-cotnent">
                <div className="intro-tiem" data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-once='true'>
                    <img src={icon_restaurant1}></img>
                    <h3>Magical <h4>Atmosphere</h4></h3>
                    <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                </div>
                <div className="intro-tiem" data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-once='true'>
                    <img src={icon_restaurant2}></img>
                    <h3>Best Food <h4>Quality</h4></h3>
                    <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                </div>
                <div className="intro-tiem" data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-once='true'>
                    <img src={icon_restaurant3}></img>
                    <h3>Low Costing <h4>Food</h4></h3>
                    <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                </div>
            </div>
        </div>
    )
}

export default Slider