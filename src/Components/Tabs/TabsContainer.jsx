import React from "react";
import {connect} from "react-redux";
import {lowCoastEdit} from "../../Redux/tickects-reducer";
import Tabs from "./Tabs";


const TabsContainer = props => <Tabs {...props} />;

const mapStateToProps = state => ({
    coast: state.tickets.lowCoast
});
const mapDispatchToProps = {
    lowCoastEdit
};
export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer)
