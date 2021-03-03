import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'react-cookies';

const api = 'https://pull-stack-laptoptory.herokuapp.com/users';
const approvedAPI =
  'https://pull-stack-laptoptory.herokuapp.com/users/approve/';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await axios.get(`${api}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  console.log('prods>>>>>', users.data);
  return { users: users.data };
});

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async (item) => {
    console.log('items>>>>>>>', item);
    let record = JSON.stringify(item);
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

    const users = await axios.get(`${api}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });
    console.log('prods>>>>>', users.data);
    return { users: users.data };
  }
);

export const acceptUsers = createAsyncThunk(
  'users/acceptUsers',
  async (item) => {
    console.log('items>>>>>>>', item);
    await axios({
      method: 'post',
      url: `${approvedAPI}${item.id}`,
      data: {
        role_name: item.role_name,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });

    const users = await axios.get(`${api}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });
    console.log('prods>>>>>', users.data);
    return { users: users.data };
  }
);

export const deleteUsers = createAsyncThunk(
  'users/deleteUsers',
  async (item) => {
    console.log('items>>>>>>>', item);
    await axios({
      method: 'delete',
      url: api,
      data: {
        id: item.id,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });

    const users = await axios.get(`${api}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });
    console.log('prods>>>>>', users.data);
    return { users: users.data };
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    get(state, action) {
      return state;
    },
    categories(state, action) {
      console.log('payload', action.payload);
      state.activeCategory = action.payload;
      return state;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      console.log('actions>>>>>>', state);
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log('actions>>>>>>', action);
      state = action.payload;
      return state;
    },
    [updateUsers.pending]: (state, action) => {
      console.log('actions>>>>>>', state);
    },
    [updateUsers.fulfilled]: (state, action) => {
      console.log('actions>>>>>>', action);
      state = action.payload;
      return state;
    },
    [acceptUsers.pending]: (state, action) => {
      console.log('actions>>>>>>', state);
    },
    [acceptUsers.fulfilled]: (state, action) => {
      console.log('actions>>>>>>', action);
      state = action.payload;
      return state;
    },
    [deleteUsers.pending]: (state, action) => {
      console.log('actions>>>>>>', state);
    },
    [deleteUsers.fulfilled]: (state, action) => {
      console.log('actions>>>>>>', action);
      state = action.payload;
      return state;
    },
  },
});
export const { get, categories } = userSlice.actions;
export default userSlice.reducer;
