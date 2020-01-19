import React from "react";
import classes from "./Tickets.module.css"
import Route from "./Route/Route";


const Tickets = ({tickets}) => {

    const ticket = tickets.slice(0, 5).map((elem, id) => {

        return (
            <div className={classes.ticketContainer} key={id}>
                <div className={classes.ticketMain}>
                    <div className={classes.ticketHeader}>
                        <div className={classes.priceHeader}>
                            {`${(elem.price).toString().slice(0, 2)} ${(elem.price).toString().slice(2)} Р`}
                        </div>
                        <div><img src={`http://pics.avs.io/99/36/${elem.carrier}.png`} alt=""/></div>
                    </div>
                    <Route data={elem.segments}/>
                </div>
            </div>
        )
    });

    return <div>{ticket}</div>
};

export default Tickets

