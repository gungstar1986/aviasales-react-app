import React, {Component} from "react";
import Tickets from "./Tickets";
import {connect} from "react-redux";
import {loadDataFromServer} from "../../Redux/tickects-reducer";
import Preloader from "../Preloader/Preloader";
import classes from "./Tickets.module.css"
import withFilter from "../Rebuild/withFilter";


class TicketsContainer extends Component {
    componentDidMount() {
        this.props.loadDataFromServer()
    }


    render() {
        return this.props.tickets == false
            ? <Preloader/>
            : <div className={classes.containerMain}><Tickets {...this.props}/></div>
    }
}


const mapStateToProps = state => ({
    tickets: state.tickets.tickets,
    filters: state.tickets
});
const mapDispatchToProps = {
    loadDataFromServer
};

export default connect(mapStateToProps, mapDispatchToProps)(withFilter(TicketsContainer))
