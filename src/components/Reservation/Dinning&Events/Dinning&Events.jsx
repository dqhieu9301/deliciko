import React from "react";
import './Dinning&Events.scss'
import pattern from '../../../img/pattern.png'
import flavour_image from '../../../img/flavour_image.jpg'
const DinningEvents = () => {
    return (
        <>
            <h2 data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>Private Dinning & <h3>Events</h3></h2>
            <div className='pattern' data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>
                <img src={pattern}></img>
            </div>
            <div className="dinning-events" data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>
                <div className="dinning-events-main">
                    <div className="dinning-events-container">
                        <div className="dinning-events-intro">
                            <h2>Find a <h3>party area</h3></h2>
                            <div className='pattern'>
                                <img src={pattern}></img>
                            </div>
                            <p>When while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among. the tall grass by the trickling stream.</p>
                            <button>BOOK A TABLE</button>
                        </div>
                        <div className="dinning-events-image">
                            <img src={flavour_image}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DinningEvents