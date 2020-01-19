import React from "react";
import classes from "./Route.module.css"


const Route = ({data}) => {

    const ticket = data.map((item, id) => {

        // Trip duration
        const hours = (Math.floor(item.duration / 60));
        const min = item.duration - hours * 60;
        const start = new Date(item.date).toTimeString().slice(0, 5);
        const end = new Date(new Date(item.date)
            .getTime() + item.duration * 60000)
            .toTimeString().slice(0, 5);

        return (
            <div className={classes.routeLengthStops} key={id}>
                <div>
                    <div className={classes.route}>{item.origin} – {item.destination}</div>
                    <div className={classes.time}>{start} – {end}</div>
                </div>
                <div>
                    <div className={classes.route}>В пути</div>
                    <div className={classes.time}>{hours}ч {min}м</div>
                </div>
                <div>
                    <div className={classes.route}>Пересадки: {item.stops.length}</div>
                    <div className={classes.time}>{item.stops.length ? (item.stops).toString() : "Нет"}</div>
                </div>
            </div>
        )
    });

    return (
        <div>{ticket}</div>
    )
};

export default Route;
