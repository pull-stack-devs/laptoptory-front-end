import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import programs from './ProgramsSlicer';
import students from './StudentsSlicer';



const reducers = combineReducers({programs:programs,students:students})
const store = configureStore({ reducer: reducers});

export default store;
