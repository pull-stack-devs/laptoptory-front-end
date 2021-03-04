import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import laptopSlice from './laptop.store.js';
import userSlice from './user.store.js';
import students from './student.store.js';
import logSlice from './logs.store.js';


const reducer = combineReducers({ laptops: laptopSlice, user: userSlice, student: students, logs: logSlice });
const store = configureStore({ reducer });

export default store;