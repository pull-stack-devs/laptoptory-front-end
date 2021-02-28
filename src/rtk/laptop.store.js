import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

const api = 'https://pull-stack-laptoptory.herokuapp.com/laptops';

export const fetchLaptops = createAsyncThunk('laptops/fetchLaptops', async () => {
  const laptops = await axios.get(`${api}`, {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  console.log("prods>>>>>", laptops.data)
  return { laptops: laptops.data };
});

export const updateLaptops = createAsyncThunk('laptops/updateLaptops', async (item) => {
    console.log("items>>>>>>>", item)
    let record = JSON.stringify(item)
    await axios({
        method: 'put',
        url: api,
        data: record,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },       
      });

      const laptops = await axios.get(`${api}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },
      });
      console.log("prods>>>>>", laptops.data)
      return { laptops: laptops.data };
  });

  export const addLaptops = createAsyncThunk('laptops/addLaptops', async (item) => {
    console.log("items>>>>>>>", item)
    let record = JSON.stringify(item)
    await axios({
        method: 'post',
        url: api,
        data: record,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },       
      });

      const laptops = await axios.get(`${api}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },
      });
      console.log("prods>>>>>", laptops.data)
      return { laptops: laptops.data };
  });

  

const laptopSlice = createSlice({
  name: 'laptops',
  initialState: {
      laptops: []
  },
  reducers: {
    get(state, action) {
      return state;
    },
    categories(state, action) {
      console.log("payload", action.payload)
      state.activeCategory =action.payload;
      return state;
    }
  },
  extraReducers: {
    [fetchLaptops.pending]: (state, action) => {
      console.log("actions>>>>>>", state);
    },
    [fetchLaptops.fulfilled]: (state, action) => {
      console.log("actions>>>>>>", action);
      state = action.payload;
      return state
    },
    [updateLaptops.pending]: (state, action) => {
        console.log("actions>>>>>>", state);
    },
    [updateLaptops.fulfilled]: (state, action) => {
        console.log("actions>>>>>>", action);
        state = action.payload;
        return state
    },
    [updateLaptops.pending]: (state, action) => {
      console.log("actions>>>>>>", state);
    },
    [updateLaptops.fulfilled]: (state, action) => {
        console.log("actions>>>>>>", action);
        state = action.payload;
        return state
    },
  }
});
export const {get, categories} = laptopSlice.actions;
export default laptopSlice.reducer;