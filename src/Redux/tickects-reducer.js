import {ticketsAPI} from "../Api/loadAPI";

const WRITE_SERVER_DATA = "WRITE_SERVER_DATA";
const EDIT_LOW_COAST = "EDIT_LOW_COAST";
const EDIT_WITHOUT_COAST = "EDIT_WITHOUT_COAST";
const EDIT_ONE_COAST = "EDIT_ONE_COAST";
const EDIT_TWO_COAST = "EDIT_TWO_COAST";
const EDIT_THREE_COAST = "EDIT_THREE_COAST";


const initialState = {
    tickets: [],
    lowCoast: "coast", // "speed"
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
};


const ticketsReducer = (state = initialState, action) => {
    if (action.type === WRITE_SERVER_DATA) {
        return {
            ...state,
            tickets: action.data
        }
    }
    if (action.type === EDIT_LOW_COAST) {
        return {
            ...state,
            lowCoast: action.filter
        }
    }
    if (action.type === EDIT_WITHOUT_COAST) {
        return {
            ...state,
            without: action.bool
        }
    }
    if (action.type === EDIT_ONE_COAST) {
        return {
            ...state,
            one: action.bool
        }
    }
    if (action.type === EDIT_TWO_COAST) {
        return {
            ...state,
            two: action.bool
        }
    }
    if (action.type === EDIT_THREE_COAST) {
        return {
            ...state,
            three: action.bool
        }
    }
    return state
};

const writeDataToTheState = (data) => ({type: "WRITE_SERVER_DATA", data});
export const lowCoastEdit = (filter) => ({type: "EDIT_LOW_COAST", filter});
export const withoutEdit = (bool) => ({type: "EDIT_WITHOUT_COAST", bool});
export const oneEdit = (bool) => ({type: "EDIT_ONE_COAST", bool});
export const twoEdit = (bool) => ({type: "EDIT_TWO_COAST", bool});
export const threeEdit = (bool) => ({type: "EDIT_THREE_COAST", bool});


export const loadDataFromServer = () => dispatch => ticketsAPI.getSearchID()
    .then(resp => dispatch(writeDataToTheState(resp.data.tickets)));

export default ticketsReducer
