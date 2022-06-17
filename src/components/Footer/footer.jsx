import React from 'react'
import './footer.scss'
import icon_map from '../../img/icon_map.png'
import logo from '../../img/logo.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-main'>
                        <div className='footer-intro-item'>
                            <h3>Contact us</h3>
                            <span>
                                <i class="fa-solid fa-phone"></i>
                                <p>+1 123-456-789</p>
                            </span>
                            <h4>Tel: +91 11 4050 0000</h4>
                            <h4>Email: info@example.com</h4>
                            <h2>BOOK A TABLE</h2>
                        </div>
                        <div className='footer-intro-item'>
                            <div className='icon_map'>
                                <img src={icon_map}></img>
                            </div>
                            <h3>Get Direction</h3>
                            <h4>85 Bay Meadows Drive Woodstock, GA</h4>
                            <h4>30188, United States</h4>
                            <button>VIEW ON MAP</button>
                        </div>
                        <div className='footer-intro-item'>
                            <h3>Opening Hours</h3>
                            <table>
                                <tr>
                                    <td>Monday</td>
                                    <td>9.00 - 22.00</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>10.00 - 22.00</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>9.00 - 22.00</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>9.00 - 22.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer-lashWord'>
                <div className='footer-lashWord-container'>
                    <div className='footer-lashWord-main'>
                        <div className='footer-epilogue'>
                            <img src={logo}></img>
                            <p>These are thei tastiest restaurants in this city right now. So we scour the city every day for great eats, great value.</p>
                        </div>
                        <div className='line'></div>
                        <span>© 2019, deliciko. All rights reserved</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer