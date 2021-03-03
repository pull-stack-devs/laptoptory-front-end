import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import programs from './ProgramsSlicer';
import students from './StudentsSlicer';
import laptops from './laptopSlicer'



const reducers = combineReducers({programs:programs,students:students,laptops:laptops})
const store = configureStore({ reducer: reducers});

export default store;