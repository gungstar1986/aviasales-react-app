import React from "react";
import classes from "./Tabs.module.css"


const Tabs = ({coast, ...props}) => {

    return (
        <div className={classes.tabsContainer}>
            <div className={coast === "coast"
                ? classes.leftTabActive
                : classes.leftTab}
                 onClick={() => props.lowCoastEdit("coast")}>
                <div className={coast === "coast"
                    ? classes.leftTabButtonActive
                    : classes.leftTabButton}>Caмый дешёвый
                </div>
            </div>
            <div className={coast === "coast" ? classes.rightTab : classes.rightTabActive}
                 onClick={() => props.lowCoastEdit("speed")}>
                <div className={coast === "coast" ? classes.rightTabButton : classes.rightTabButtonActive}>Caмый быстрый</div>
            </div>
        </div>
    )
};

export default Tabs
