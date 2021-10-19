  
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from "react-cookies";

// https://604144755d3853007fac5bb4--distracted-hypatia-f693ac.netlify.app
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
        state.laptops = action.payload;
    },
    getStudent(state,action) {
      state.students = action.payload
    }
  },
});

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

export const updateLaptops = (row) => async(dispatch) =>{
  let record = JSON.stringify(row)
  let data = await axios({
    method: 'put',
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

export const assignLaptops = (item) => async (dispatch) =>{
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

export const returnLaptops = (item) => async (dispatch) =>{
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

 
export const addLaptops = (item) => async (dispatch) =>{
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