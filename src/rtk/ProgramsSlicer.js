import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'react-cookies';

const api = 'http://pull-stack-laptoptory.herokuapp.com/programs';
const reqApi =
  'http://pull-stack-laptoptory.herokuapp.com/programs-requirements';

const programs = createSlice({
  name: 'programs',
  initialState: {
    programs: [],
    programsNames: [],
    programsVersions: [],
    programsRequirments: [],
  },
  reducers: {
    setPrograms(state, action) {
      state.programs = action.payload;
    },
    setProgramsNames(state, action) {
      action.payload.forEach((element) => {
        if (!state.programsNames.includes(element.name)) {
          state.programsNames.push(element.name);
        }
      });
    },
    setProgramsVersions(state, action) {
      action.payload.forEach((element) => {
        if (!state.programsVersions.includes(element.version)) {
          state.programsVersions.push(element.version);
        }
      });
    },
    setProgramsReq(state, action) {
      state.programsRequirments = action.payload;
    },
  },
});

export const getRemoteData = () => async (dispatch) => {
  const data = await axios({
    method: 'get',
    url: api,
    headers: {
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  dispatch(setPrograms(data.data));
  dispatch(setProgramsNames(data.data));
  dispatch(setProgramsVersions(data.data));
  dispatch(getRequirmentsData());
};
export const getRequirmentsData = () => async (dispatch) => {
  const data = await axios({
    method: 'get',
    url: reqApi,
    headers: {
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
  });
  dispatch(setProgramsReq(data.data));
};

export const updatProgram = (obj) => async (dispatch) => {
  const data = await axios({
    method: 'put',
    url: api,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
    data: JSON.stringify(obj),
  });
  if (data.data) {
    await dispatch(getRemoteData());
  }
};

export const addProgram = (obj) => async (dispatch) => {
  const data = await axios({
    method: 'post',
    url: api,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
    data: JSON.stringify(obj),
  });
  if (data.data) {
    await dispatch(getRequirmentsData());
  }
};
export const addReq = (obj) => async (dispatch) => {
  const data = await axios({
    method: 'post',
    url: reqApi,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
    data: JSON.stringify(obj),
  });
  if (data.data) {
    await dispatch(getRequirmentsData());
  }
};
export const updateReq = (obj) => async (dispatch) => {
  const data = await axios({
    method: 'put',
    url: reqApi,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookie.load('auth')}`,
    },
    data: JSON.stringify(obj),
  });
  if (data.data) {
    await dispatch(getRequirmentsData());
  }
};

export const {
  setPrograms,
  setProgramsNames,
  setProgramsVersions,
  setProgramsReq,
  setdetailedRequirments,
} = programs.actions;

export default programs.reducer;
