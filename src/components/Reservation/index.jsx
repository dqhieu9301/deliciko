import React from "react";
import Slide from "./Slide/slide";
import MakeAReservation from "./Make-A-Reservation/MakeaReservation";
import DinningEvents from "./Dinning&Events/Dinning&Events";
const Reservation = () => {
    return (
        <div className="reservation">
            <Slide />
            <MakeAReservation />
            <DinningEvents />
        </div>
    )
}

export default Reservation