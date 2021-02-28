import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from 'react-cookies';


const api = 'http://pull-stack-laptoptory.herokuapp.com/students';

const students = createSlice({
    name: "programs",
    initialState: {
        students: [],
    },
    reducers: {

        setStudents(state, action) {
            state.students = action.payload;
        },
    },
});




export const getStudents = () => async (dispatch) => {
    const data = await axios({
        method: 'get',
        url: api,
        headers: {
            'Authorization': `Bearer ${cookie.load('auth')}`
        }

    })
    dispatch(setStudents(data.data))

}

export const updatStudentData = (obj) => async (dispatch) => {
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
      await dispatch(getStudents())
    }

};

export const deleteStudent = (obj) => async (dispatch) => {
    console.log("dispatch :", obj)
    const data = await axios(api,{
        method: 'delete',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    })
    if(data.data){
      await dispatch(getStudents())
    }

};

export const addStudent = (obj) => async (dispatch) => { 
    console.log('from slicer========>',JSON.stringify(obj))
    const data = await axios({
        method: 'post',
        url: api,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('auth')}`
        },
        data:JSON.stringify(obj),

    });
    console.log(data)
    if(data.data){
      await dispatch(getStudents())
    }

}



export const { setStudents } = students.actions;

export default students.reducer;