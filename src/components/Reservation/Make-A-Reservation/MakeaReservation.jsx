import React from 'react'
import './MakeAReservation.scss'
import pattern from '../../../img/pattern.png'
import reservation_min from '../../../img/reservation-min.jpg'
const MakeAReservation = () => {
    return (
        <div className='make-A-reservation' data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once='true'>
            <div className="make-a-reservation-container">
                <h2>Make a <h3>Reservation</h3></h2>
                <div className='pattern'>
                    <img src={pattern}></img>
                </div>
                <div className='make-a-reservation-main'>
                    <img src={reservation_min}></img>
                    <div className='form'>
                        <form>
                            <label>Booking a table online is easy</label>
                            <input type='date'></input>
                            <select>
                                <option>00.00</option>
                                <option>10.00</option>
                                <option>20.00</option>
                                <option>30.00</option>
                            </select>
                            <select>
                                <option>Person</option>
                                <option>One Person</option>
                                <option>Two Person</option>
                                <option>Three Person</option>
                                <option>Four Person</option>
                            </select>
                            <input type='text' placeholder='Emal'></input>
                            <input type='text' placeholder='Contact Number'></input>
                            <button>RESULVE YOUR TABLE NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAReservation