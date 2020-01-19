import React from 'react';
import classes from './App.module.css';
import logo from '../Img/Logo.png'
import TicketsContainer from "./Tickets/TicketsContainer";
import FilterContainer from "./Filter/FilterContainer";
import TabsContainer from "./Tabs/TabsContainer";


const App = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainLogo}><img src={logo} alt="" /></div>
            <FilterContainer/>
            <TabsContainer/>
            <TicketsContainer/>
        </div>
    );
};

export default App;
