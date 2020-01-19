import React, {useEffect, useState} from "react";
import classes from './Filter.module.css'

const Filter = ({all, without, one, two, three, ...props}) => {

    const setWithout = (bool) => props.withoutEdit(bool);
    const setOne = (bool) => props.oneEdit(bool);
    const setTwo = (bool) => props.twoEdit(bool);
    const setThree = (bool) => props.threeEdit(bool);


    const [allList, setAllList] = useState(true);

    useEffect(() => without || one || two || three ? setAllList(false) : setAllList(true));

    let count = 0;
    if (all) count++;
    if (without) count++;
    if (one) count++;
    if (two) count++;
    if (three) count++;


    return (
        <div className={classes.filterMain}>
            <div className={classes.transplantCounts}>Количество пересадок</div>

            <div className={classes.filterContainer} >
                <input name={"all"} type="checkbox" disabled={allList == false && count > 0 && true}
                       onChange={() => setAllList(true)}
                       value={allList}
                       checked={allList}/><span>Все</span>
            </div>
            <div className={classes.filterContainer} >
                <input name={"withoutTransplant"} type="checkbox" disabled={without == false && count > 2 && true}
                       onChange={() => setWithout(!without)} value={without}
                       checked={without}/> <span>Без пересадок</span>
            </div>
            <div className={classes.filterContainer} >
                <input name={"oneTransplant"} type="checkbox" disabled={one == false && count > 2 && true} onChange={() => setOne(!one)} value={one}
                       checked={one}/> <span>1 пересадка</span>
            </div>
            <div className={classes.filterContainer}>
                <input name={"twoTransplant"} type="checkbox" disabled={two == false && count > 2 && true} onChange={() => setTwo(!two)} value={two}
                       checked={two}/> <span>2 пересадки</span>
            </div>
            <div className={classes.filterContainer} >
                <input name={"threeTransplant"} type="checkbox" disabled={three == false && count > 2 && true} onChange={() => setThree(!three)} value={three}
                       checked={three}/> <span>3 пересадки</span>
            </div>
        </div>
    )
};
export default Filter
