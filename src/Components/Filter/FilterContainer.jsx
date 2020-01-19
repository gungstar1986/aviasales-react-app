import React from "react";
import {connect} from "react-redux";
import {oneEdit, threeEdit, twoEdit, withoutEdit} from "../../Redux/tickects-reducer";
import Filter from "./Filter";


const FilterContainer = props => <Filter {...props}/>;
const mapStateToProps = state => ({
    all: state.tickets.all,
    without: state.tickets.without,
    one: state.tickets.one,
    two: state.tickets.two,
    three: state.tickets.three
});
const mapDispatchToProps = {
    withoutEdit,
    oneEdit,
    twoEdit,
    threeEdit
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
