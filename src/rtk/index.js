import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userSlice from './user.store.js';
import programs from './ProgramsSlicer';
import students from './StudentsSlicer';
import laptopSlice from './laptop.store.js';



const reducers = combineReducers({programs:programs,students:students, user: userSlice, laptop: laptopSlice, })
const store = configureStore({ reducer: reducers});

export default store;
