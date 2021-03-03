
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from 'react-cookies';


const api = 'https://pull-stack-laptoptory.herokuapp.com/studentLaptops';

const laptops = createSlice({
    name: 'laptops',
    initialState: {
        laptops: [],
       
    },
    reducers: {
      settLaptops(state, action) {
          console.log("action", action)
          state.laptops = action.payload;
          console.log("state", state.laptops)
      }
    },
});

export const getLapData = () => async (dispatch) => {
  const data = await axios({
      method: 'get',
      url: api,
      headers: {
         'Authorization': `Bearer ${cookie.load('auth')}`
      }

  })
  dispatch(settLaptops(data.data));
  return data.data;

}

export const { settLaptops} = laptops.actions;

export default laptops.reducer;