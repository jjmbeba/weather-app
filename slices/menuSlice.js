import {createSlice} from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        menuState:false,
        selectedUnit:'°C',
        location:'',
        results:null,
        forecast:null,
        recent:[]
    },
    reducers:{
        setMenuState:(state) => {
            state.menuState = !state.menuState;
        },
        setUnits:(state, {payload}) => {
            state.selectedUnit = payload;
        },
        setLocation:(state, {payload}) => {
            state.location = payload;
        },
        setLat:(state, {payload}) => {
            state.lat = payload;
        },
        setLon:(state, {payload}) => {
            state.lon = payload;
        },
        setResults:(state,{payload}) => {
            state.results = payload;
        },
        setForecast:(state, {payload}) => {
            state.forecast = payload;
        },
        setRecent:(state, {payload}) => {
            state.recent.push(payload);
        }
    }
})

export const {setMenuState, setUnits, setLocation, setLat, setLon, setResults, setForecast, setRecent} = menuSlice.actions;
export default menuSlice;