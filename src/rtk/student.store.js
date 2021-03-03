import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from 'react-cookies';
const api = 'http://pull-stack-laptoptory.herokuapp.com/students';
const stdApi = ' https://pull-stack-laptoptory.herokuapp.com/studentLaptops';
const students = createSlice({
    name: "programs",
    initialState: {
        students: [],
        studentsWithLap:0,
        stdWithNoLap:0,
        notReturned:0,
        studentID: []
    },
    reducers: {
        setStudents(state, action) {
            state.students = action.payload;
        },
        setStdWithLap(state,action){
             state.studentsWithLap=action.payload;
        },
        setStdWithNoLap(state,action){
            state.stdWithNoLap=action.payload;
        },
        setNotReturn(state,action){
            state.notReturned=action.payload
        },
        getID(state,action){
            action.payload.map((item, index) =>{
                state.studentID[index] = item.id;
            })
        }
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
    dispatch(setStudents(data.data));
    dispatch(getID(data.data));
    return data.data;
}
export const getNumData = () => async (dispatch,getState) => {
    const studentsData= await dispatch(getStudents())
    const data = await axios({
        method: 'get',
        url: stdApi,
        headers: {
            'Authorization': `Bearer ${cookie.load('auth')}`
        }
    });
    function nums() {  
        let stdWithLap=0
        let notReturned=0
        data.data.forEach(element=>{
            studentsData.forEach(item => {
                console.log(element.std_id,item.id,item.student_status)
                if(element.std_id==item.id){
                    stdWithLap=stdWithLap+1
                    console.log(stdWithLap)
                }
                if(element.std_id==item.id&&item.student_status==false){
                    notReturned=notReturned+1
                }
            });
        });
        return [stdWithLap,notReturned]
    }
     dispatch(setStdWithNoLap(studentsData.length-(nums()[0]+nums()[1])));
     dispatch(setStdWithLap(nums()[0]))
     dispatch(setNotReturn(nums()[1]))
     console.log('from get num dataaaaaaaaaaaaaaaaaaa',nums())
    // dispatch(setStudents(data.data))
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
export const { setStudents ,setStdWithLap ,setStdWithNoLap, setNotReturn, getID} = students.actions;
export default students.reducer;