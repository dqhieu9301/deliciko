import React from 'react'
import './discover.scss'
import storyimagemin from '../../../../img/story_image-min.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import pattern from '../../../../img/pattern.png'
import story_object01 from '../../../../img/story_object01.png'
import story_object02 from '../../../../img/story_object02.png'
const Discover = () => {
    return (
        <div className='discover' data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once='true'>
            <div className='image-background' id='story_object02'>
                <img src={story_object02}></img>
            </div>
            <div className='image-background' id='story_object01'>
                <img src={story_object01}></img>
            </div>
            <div className='discover-container'>
                <div className='discover-intro'>
                    <h2>Discover <h3>Our Story</h3></h2>
                    <div className='pattern'>
                        <img src={pattern}></img>
                    </div>
                    <p>When while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream.</p>
                    <div className='number'>
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <>
                                    <span>
                                        <h2>
                                            {isVisible ? <CountUp start={0} end={93} duration={1.5} /> : null}
                                        </h2>
                                        <h3>Beverages</h3>
                                    </span>
                                    <span>
                                        <h2>
                                            {isVisible ? <CountUp start={0} end={206} duration={1.5} /> : null}
                                        </h2>
                                        <h3>Food items</h3>
                                    </span>
                                    <span>
                                        <h2>
                                            {isVisible ? <CountUp start={0} end={75} duration={1.5} /> : null}
                                        </h2>
                                        <h3>Cooks</h3>
                                    </span>
                                </>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
                <div className='imageWrapper'>
                    <img src={storyimagemin}></img>
                </div>
            </div>
            <div className='get-offer'>
                <div className='overlay'></div>
                <div className='get-offer-content'>
                    <span>
                        <h2 data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once='true'>Celebrate at one of NY’s most awarded restaurant.</h2>
                        <h3 data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once='true'>Only this month, business lunch from $25.90</h3>
                    </span>
                    <button data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-once='true'>GET OFFER</button>
                </div>
            </div>
        </div>
    )
}

export default Discover