import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

const api = 'https://pull-stack-laptoptory.herokuapp.com/studentLaptops';
const studentApi = 'https://pull-stack-laptoptory.herokuapp.com/students';
const laptopApi = 'https://pull-stack-laptoptory.herokuapp.com/laptops'
const assignApi = 'https://pull-stack-laptoptory.herokuapp.com/students/assignLaptop';
const returnApi = 'https://pull-stack-laptoptory.herokuapp.com/students/returnLaptop';

const laptopSlice = createSlice({
  name: 'laptops',
  initialState: {
      laptops: [],
      students: []
  },
  reducers: {
    getLaptops(state, action) {
        console.log("action", action)
        state.laptops = action.payload;
        console.log("state", state.laptops)
    },
    getStudent(state,action) {
      console.log("action", action)
      state.students = action.payload
      console.log("state", state.students)
    }
  },
});

// Fetch laptop student data
export const fetchLaptops = () => async (dispatch) => {
  const laptops = await axios( {
    method: 'get',
    url: api,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });

  dispatch(getLaptops(laptops.data))
  console.log("prods>>>>>", laptops.data)
}

export const fetchStudents = () => async (dispatch) => {
  
  const students = await axios({
    method: 'get',
    url: studentApi,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  dispatch(fetchLaptops());
  dispatch(getStudent(students.data))
}

// assign a laptop to a student
export const assignLaptops = (item) => async (dispatch) =>{
  console.log("items>>>>>>>", item)
    let record = JSON.stringify(item)
    let data = await axios({
        method: 'post',
        url: assignApi,
        data: record,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },       
      });

    if(data.data) {
      await dispatch(fetchLaptops())
    }
}

// return a laptop from the student to the inventory
export const returnLaptops = (item) => async (dispatch) =>{
  console.log("items>>>>>>>", item)
    let record = JSON.stringify(item)
    let data = await axios({
        method: 'post',
        url: returnApi,
        data: record,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },       
      });

      if(data.data) {
        await dispatch(fetchLaptops())
      }
}

 // add a laptop to a laptop table
export const addLaptops = (item) => async (dispatch) =>{
  console.log("items>>>>>>>", item)
  let record = JSON.stringify(item)
  let data = await axios({
      method: 'post',
      url: laptopApi,
      data: record,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
          Authorization: `Bearer ${cookie.load('auth')}`,
      },       
    });

    if(data.data) {
      await dispatch(fetchLaptops())
    }
}


export const {getLaptops, getStudent} = laptopSlice.actions;
export default laptopSlice.reducer;