import React from 'react'
import './OurExperienceChefs.scss'
import pattern from '../../../../img/pattern.png'
import team_object02 from '../../../../img/team_object02.png'
import team_object01 from '../../../../img/team_object01.png'
import team_image01 from '../../../../img/team_image01.jpg'
import team_image02 from '../../../../img/team_image02.jpg'
import team_image03 from '../../../../img/team_image03.jpg'
import team_image06 from '../../../../img/team_image06.jpg'
const OurExperienceChefs = () => {
    return (
        <div className='our-experience-chefs' data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once='true'>
            <div className='image-background' id='team-object2'>
                <img src={team_object02}></img>
            </div>
            <h2>Our Experience <h3>Chefs</h3></h2>
            <div className='pattern'>
                <img src={pattern}></img>
            </div>
            <div className='image-chef-container'>
                <div className='image-chef-item'>
                    <img src={team_image01}></img>
                    <div className='chef-information'>
                        <h4>HENRY NICHOLS</h4>
                        <p> Chief  Instructor </p>
                        <div className='chef-contact'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className='image-chef-item'>
                    <img src={team_image02}></img>
                    <div className='chef-information'>
                        <h4>HENRY NICHOLS</h4>
                        <p> Chief  Instructor </p>
                        <div className='chef-contact'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className='image-chef-item'>
                    <img src={team_image03}></img>
                    <div className='chef-information'>
                        <h4>HENRY NICHOLS</h4>
                        <p> Chief  Instructor </p>
                        <div className='chef-contact'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-background' id='team-object1'>
                <img src={team_object01}></img>
            </div>
        </div>
    )
}

export default OurExperienceChefs;