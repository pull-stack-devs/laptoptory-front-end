import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

const api = 'https://pull-stack-laptoptory.herokuapp.com/studentLaptops';
const studentApi = 'https://pull-stack-laptoptory.herokuapp.com/students';
const laptopApi = 'https://pull-stack-laptoptory.herokuapp.com/laptops'
const assignApi = 'https://pull-stack-laptoptory.herokuapp.com/students/assignLaptop';
const returnApi = 'https://pull-stack-laptoptory.herokuapp.com/students/returnLaptop';


// export const fetchLaptops = createAsyncThunk('laptops/fetchLaptops', async () => {
//   const laptops = await axios.get(`${api}`, {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-type': 'application/json',
//         Authorization: `Bearer ${cookie.load('auth')}`,
//     },
//   });
//   console.log("prods>>>>>", laptops.data)

//   const students = await axios.get(`${studentApi}`, {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-type': 'application/json',
//         Authorization: `Bearer ${cookie.load('auth')}`,
//     },
//   });
  
  
//   return { laptops: laptops.data, students: students.data };
// });

// assign a laptop to a student
// export const assignLaptops = createAsyncThunk('laptops/assignLaptops', async (item) => {
//     console.log("items>>>>>>>", item)
//     let record = JSON.stringify(item)
//     await axios({
//         method: 'put',
//         url: assignApi,
//         data: record,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${cookie.load('auth')}`,
//         },       
//       });

//       const laptops = await axios.get(`${api}`, {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${cookie.load('auth')}`,
//         },
//       });
//       const students = await axios.get(`${studentApi}`, {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${cookie.load('auth')}`,
//         },
//       });
//       console.log("prods>>>>>", laptops.data)
//       return { laptops: laptops.data, students: students.data };
//   });


  // return a laptop from the student to the inventory
  // export const returnLaptops = createAsyncThunk('laptops/returnLaptops', async (item) => {
  //   console.log("items>>>>>>>", item)
  //   let record = JSON.stringify(item)
  //   await axios({
  //       method: 'post',
  //       url: returnApi,
  //       data: record,
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },       
  //     });

  //     const laptops = await axios.get(`${api}`, {
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },
  //     });
      
  //     const students = await axios.get(`${studentApi}`, {
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },
  //     });
  //     console.log("prods>>>>>", laptops.data)
  //     return { laptops: laptops.data, students: students.data };
  // });

  

  // add a laptop to a laptop table
  // export const addLaptops = createAsyncThunk('laptops/addLaptops', async (item) => {
  //   console.log("items>>>>>>>", item)
  //   let record = JSON.stringify(item)
  //   await axios({
  //       method: 'post',
  //       url: laptopApi,
  //       data: record,
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },       
  //     });

  //     const laptops = await axios.get(`${api}`, {
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },
  //     });
  //     console.log("prods>>>>>", laptops.data)

  //     const students = await axios.get(`${studentApi}`, {
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-type': 'application/json',
  //           Authorization: `Bearer ${cookie.load('auth')}`,
  //       },
  //     });
  //     return { laptops: laptops.data, students: students.data };
  // });

  

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
      state.students = action.payload
    }
  },
  // extraReducers: {
  //   [fetchLaptops.pending]: (state, action) => {
  //     console.log("actions>>>>>>", state);
  //   },
  //   [fetchLaptops.fulfilled]: (state, action) => {
  //     console.log("actions>>>>>>", action);
  //     state = action.payload;
  //     return state
  //   },
  //   [assignLaptops.pending]: (state, action) => {
  //       console.log("actions>>>>>>", state);
  //   },
  //   [assignLaptops.fulfilled]: (state, action) => {
  //       console.log("actions>>>>>>", action);
  //       state = action.payload;
  //       return state
  //   },
  //   [returnLaptops.pending]: (state, action) => {
  //     console.log("actions>>>>>>", state);
  //   },
  //   [returnLaptops.fulfilled]: (state, action) => {
  //       console.log("actions>>>>>>", action);
  //       state = action.payload;
  //       return state
  //   },
  //   [addLaptops.pending]: (state, action) => {
  //     console.log("actions>>>>>>", state);
  //   },
  //   [addLaptops.fulfilled]: (state, action) => {
  //       console.log("actions>>>>>>", action);
  //       state = action.payload;
  //       return state
  //   },
    
  // }
});

// Fetch laptop student data
export const fetchLaptops = () => async (dispatch) => {
  const laptops = await axios.get(`${api}`, {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  dispatch(getLaptops(laptops.data))
  const students = await axios.get(`${studentApi}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  dispatch(getStudent(students.data))
  console.log("prods>>>>>", laptops.data)
}

// assign a laptop to a student
export const assignLaptops = (item) => async (dispatch) =>{
  console.log("items>>>>>>>", item)
    let record = JSON.stringify(item)
    let data = await axios({
        method: 'put',
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