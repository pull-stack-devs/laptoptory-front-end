import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import laptopSlice from './laptop.store.js';
import userSlice from './user.store.js';


const reducer = combineReducers({ laptop: laptopSlice, user: userSlice });
const store = configureStore({ reducer });

export default store;