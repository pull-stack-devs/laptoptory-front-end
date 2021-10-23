import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'react-cookies';

const api = 'https://pull-stack-laptoptory.herokuapp.com/log';

const logSlice = createSlice({
    name: 'logs',
    initialState: {
        logs: [],
    },
    reducers: {
      getLogs(state, action) {
          state.logs = action.payload;
      }
    },
  });

  export const fetchLogs = () => async (dispatch) => {
    const logs = await axios( {
        method: 'get',
        url: api,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`,
        },
      });

      let data = logs.data.Log.map(item=>{
          item.id = item._id
          return item;
      })
    
      dispatch(getLogs(data))
  }

export const {getLogs} = logSlice.actions;
export default logSlice.reducer;