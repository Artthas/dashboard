import {createReducer} from '@reduxjs/toolkit';
import {loadGoogleNews, changeIsGoogleNewsLoaded} from '../action';

const initialState = {
  googleNews: [],
  isGoogleNewsLoaded: false,
};

const googleNewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGoogleNews, (state, action) => {
      state.googleNews = action.payload;
    })
  builder
    .addCase(changeIsGoogleNewsLoaded, (state, action) => {
      state.isGoogleNewsLoaded = action.payload;
    });
});

export {googleNewsData};
