import React from 'react'
import Discover from './discover/discover'
import OurDailyOffers from './Our Daily Offers/OurDailyOffers'
import CheckOurMenu from './CheckOurMenu/CheckOurMenu'
import OurFoodGallery from './OurFoodGallery/OurFoodGallery'
import OurExperienceChefs from './OurExperienceChefs/OurExperienceChefs'
import MakeaReservation from './MakeaReservation/MakeaReservation'
const Intro = () => {
    return (
        <div className='intro'>
            <Discover />
            <OurDailyOffers />
            <CheckOurMenu />
            <OurFoodGallery />
            <OurExperienceChefs />
            <MakeaReservation />
        </div>
    )
}
export default Intro