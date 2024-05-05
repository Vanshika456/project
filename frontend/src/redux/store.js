import { configureStore } from '@reduxjs/toolkit';
//configureStore is a function provided by Redux Toolkit for creating a Redux store with predefined middleware and default setup.
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/userReducer'; // Reducers are functions that specify how the application's state changes in response to actions. 
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;

export const server = 'http://localhost:4000/api/v1';


//The store provides methods to interact with the application state, such as getState() to retrieve the current state, dispatch(action) to dispatch actions to 
// Purpose: A reducer is a pure function that takes the current state and an action as arguments and returns the new state based on that action. It specifies how the application's state should change in response to dispatched actions.
//Use: Reducers are used to manage specific slices of the application state. Each reducer typically handles updates to a particular part of the state tree.
// reducer can chnge value of state