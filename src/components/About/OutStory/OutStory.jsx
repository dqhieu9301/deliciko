import React from 'react'
import './OutStory.scss'
import storyimagemin from '../../../img/story_image-min.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import pattern from '../../../img/pattern.png'
import story_object01 from '../../../img/story_object01.png'
import story_object02 from '../../../img/story_object02.png'
import sign from '../../../img/sign.png'
const OutStory = () => {
    return (
        <div className='ourstory' data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once='true'>
            <div className='image-background' id='story_object02'>
                <img src={story_object02}></img>
            </div>
            <div className='image-background' id='story_object01'>
                <img src={story_object01}></img>
            </div>
            <div className='ourstory-container'>
                <div className='imageWrapper'>
                    <img src={storyimagemin}></img>
                </div>
                <div className='ourstory-intro'>
                    <h2>Our <h3>Story</h3></h2>
                    <div className='pattern'>
                        <img src={pattern}></img>
                    </div>
                    <p>When while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream.</p>
                    <span>
                        <h4>Christopher Nolan</h4>
                        <h5>Head of Cook</h5>
                    </span>
                    <div className='signature'>
                        <img src={sign}></img>
                    </div>
                </div>
            </div>
            <div className='parameter' data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once='true'>
                <div className='overlay'></div>
                <div className='parameter-intro'>
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
                                        {isVisible ? <CountUp start={0} end={93} duration={1.5} /> : null}
                                    </h2>
                                    <h3>Dishes Menu</h3>
                                </span>
                                <span>
                                    <h2>
                                        {isVisible ? <CountUp start={0} end={93} duration={1.5} /> : null}
                                    </h2>
                                    <h3>Location</h3>
                                </span>
                                <span>
                                    <h2>
                                        {isVisible ? <CountUp start={0} end={93} duration={1.5} /> : null}
                                    </h2>
                                    <h3>Cooks</h3>
                                </span>
                            </>
                        )}
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    )
}

export default OutStory