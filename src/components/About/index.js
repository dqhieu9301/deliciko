import React from 'react'
import Slide from './Slide/slide'
import OutStory from './OutStory/OutStory'
import OurExperienceChefs from '../Home/intro-content/OurExperienceChefs/OurExperienceChefs'
import CreateFavour from './CreateFavour/CreateFavour'
const About = () => {
    return (
        <div className='About'>
            <Slide></Slide>
            <OutStory></OutStory>
            <OurExperienceChefs></OurExperienceChefs>
            <CreateFavour></CreateFavour>
        </div>
    )
}

export default About