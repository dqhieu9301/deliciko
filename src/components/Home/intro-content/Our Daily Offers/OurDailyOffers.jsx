import React from "react";
import './OurDailyOffers.scss';
import menu from '../../../../img/menu-banner-min-min.jpg';
import image01 from '../../../../img/image01.jpg'
import image02 from '../../../../img/image02.jpg'
import image03 from '../../../../img/image03.jpg'
import pattern from '../../../../img/pattern.png'
import daily_offer_object01 from '../../../../img/daily_offer_object01.png'
import daily_offer_object02 from '../../../../img/daily_offer_object02.png'
const OurDailyOffers = () => {
    return (
        <div className="our-daily-offers"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once='true'>
            <h2>Our Daily <h3>Offers</h3></h2>
            <div className='pattern'>
                <img src={pattern}></img>
            </div>
            <div className='image-background' id='daily_offer_object01'>
                <img src={daily_offer_object01}></img>
            </div>
            <div className='image-background' id='daily_offer_object02'>
                <img src={daily_offer_object02}></img>
            </div>
            <div className="offers-container">
                <div className="offers-menu">
                    <img src={menu}></img>
                </div>
                <div className="offers-items">
                    <div className="offers-item">
                        <div className="offers-item-image">
                            <img src={image01}></img>
                        </div>
                        <div className="item-content" id="spicy">
                            <h3>Spicy Club</h3>
                            <h4><i>$</i> 42</h4>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className="offers-item">
                        <div className="offers-item-image">
                            <img src={image02}></img>
                        </div>
                        <div className="item-content" id="almond">
                            <h3>Almond Baked Brie</h3>
                            <h4><i>$</i> 42</h4>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className="offers-item">
                        <div className="offers-item-image">
                            <img src={image03}></img>
                        </div>
                        <div className="item-content" id="Tuscan">
                            <h3>Tuscan Flatbread</h3>
                            <h4><i>$</i> 42</h4>
                            <p>Pork, chicken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDailyOffers;