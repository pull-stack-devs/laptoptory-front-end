import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from 'react-cookies';


const api = 'http://pull-stack-laptoptory.herokuapp.com/programs';

const programs = createSlice({
    name: "programs",
    initialState: {
        programs: [],
        programsNames:[],
        programsVersions:[]
    },
    reducers: {

        setPrograms(state, action) {
            state.programs = action.payload;
        },
        setProgramsNames(state,action){
            action.payload.forEach(element => {
                if (!state.programsNames.includes(element.name)){
                    state.programsNames.push(element.name);
                }
            });

        },
        setProgramsVersions(state,action){
            action.payload.forEach(element => {
                if (!state.programsVersions.includes(element.version)){
                    state.programsVersions.push(element.version);
                }
            });

        }
        
    },
});




export const getRemoteData = () => async (dispatch) => {
    const data = await axios({
        method: 'get',
        url: api,
        headers: {
            'Authorization': `Bearer ${cookie.load('auth')}`
        }

    })
    dispatch(setPrograms(data.data));
    dispatch(setProgramsNames(data.data));
    dispatch(setProgramsVersions(data.data));

}

export const updatProgram = (obj) => async (dispatch) => {
    console.log("dispatch :", obj)
    const data = await axios({
        method: 'put',
        url: api,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    })
    if(data.data){
      await dispatch(getRemoteData())
    }

}

export const addProgram = (obj) => async (dispatch) => { 
    const data = await axios({
        method: 'post',
        url: api,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    })
    if(data.data){
      await dispatch(getRemoteData())
    }

}



export const { setPrograms ,setProgramsNames,setProgramsVersions} = programs.actions;

export default programs.reducer;