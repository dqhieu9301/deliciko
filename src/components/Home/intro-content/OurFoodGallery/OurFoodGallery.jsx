import React from 'react'
import './OurFoodGallery.scss'
import galleryimage01 from '../../../../img/gallery_image01-min.jpg'
import galleryimage02 from '../../../../img/gallery_image02-min.jpg'
import galleryimage03 from '../../../../img/gallery_image03-min.jpg'
import galleryimage04 from '../../../../img/gallery_image04-min.jpg'
import galleryimage05 from '../../../../img/gallery_image05-min.jpg'
import galleryimage06 from '../../../../img/gallery_image06-min.jpg'
import pattern from '../../../../img/pattern.png'

const OurFoodGallery = () => {
    return (
        <div className='our-food-gallery' data-aos="zoom-in-up" data-aos-once='true' data-aos-duration="3000">
            <h2>Our Food <h3>Gallery</h3></h2>
            <div className='pattern'>
                <img src={pattern}></img>
            </div>
            <div className='our-food-gallery-wrapper'>
                <div className='our-food-gallery-image'>
                    <div className='item-wrapper' id='item1'>
                        <img src={galleryimage01}></img>
                    </div>
                    <div className='item-wrapper' id='item2'>
                        <img src={galleryimage02}></img>
                    </div>
                    <div className='item-wrapper' id='item3'>
                        <img src={galleryimage03}></img>
                    </div>
                </div>
                <div className='our-food-gallery-image'>
                    <div className='item-wrapper' id='item4'>
                        <img src={galleryimage04}></img>
                    </div>
                    <div className='item-wrapper' id='item5'>
                        <img src={galleryimage05}></img>
                    </div>
                    <div className='item-wrapper' id='item6'>
                        <img src={galleryimage06}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFoodGallery