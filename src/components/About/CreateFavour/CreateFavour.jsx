import React from "react";
import './CreateFavour.scss'
import pattern from '../../../img/pattern.png'
import flavour_image from '../../../img/flavour_image.jpg'
import awards02 from '../../../img/awards02.png'
import awards03 from '../../../img/awards03.png'
import awards04 from '../../../img/awards04.png'
import { Slide } from "react-slideshow-image";
const CreateFavour = () => {
    const properties = {
        duration: 3000,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        autoplay: true,
        indicators: true,
        responsive: [
            // { breakpoint: 740, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            // { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            // { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 740, settings: { slidesToShow: 4, slidesToScroll: 4 } },

        ],
    };
    return (
        <>
            <div className="create-favour" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>
                <div className="create-favour-image-background"></div>
                <div className="create-favour-main">
                    <div className="create-favour-container">
                        <div className="create-favour-intro">
                            <h2>We Create <h3>Flavour</h3></h2>
                            <div className='pattern'>
                                <img src={pattern}></img>
                            </div>
                            <p>When while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among. the tall grass by the trickling stream.</p>
                            <button>BOOK A TABLE</button>
                        </div>
                        <div className="create-favour-image">
                            <img src={flavour_image}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="awards" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>
                <div className="awards-container">
                    <Slide {...properties}>
                        <div className="awards-item">
                            <img src={awards02}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards03}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards04}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards02}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards02}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards04}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards03}></img>
                        </div>
                        <div className="awards-item">
                            <img src={awards02}></img>
                        </div>
                    </Slide>
                </div>
            </div>
        </>
    )
}

export default CreateFavour