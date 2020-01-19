import React, {useEffect, useState} from "react"

const withFilter = (Component) => (props) => {

    const {lowCoast, without, one, two, three} = props.filters;
    const [state, setState] = useState(props.tickets);


    useEffect(() => {
        props.tickets && setState(props.tickets)
    }, [props.tickets]);

    let tickets = lowCoast === "coast" && state.length
        ? state.sort((a, b) => a.price - b.price)
        : state.sort((a, b) => a.segments.sort((a, b) =>
            a.duration - b.duration)[0].duration - b.segments.sort((a, b) =>
            a.duration - b.duration)[0].duration);

    if (without) {
        tickets = tickets.filter(item => item.segments.filter(elem => !elem.stops.length && elem).length)
    }
    if (one) {
        tickets = tickets.filter(item => item.segments.filter(elem => elem.stops.length === 1 && elem).length)
    }
    if (two) {
        tickets = tickets.filter(item => item.segments.filter(elem => elem.stops.length === 2 && elem).length)
    }
    if (three) {
        tickets = tickets.filter(item => item.segments.filter(elem => elem.stops.length === 3 && elem).length)
    }

    return <Component tickets={tickets} loadDataFromServer={props.loadDataFromServer}/>
};


export default withFilter
