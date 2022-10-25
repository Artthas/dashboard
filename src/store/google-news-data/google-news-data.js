import {createReducer} from '@reduxjs/toolkit';
import {loadGoogleNews, changeIsGoogleNewsLoaded} from '../action';

const googleNewsState = {
  googleNews: [],
};

const isGoogleNewsLoadedState = {
  isGoogleNewsLoaded: false,
};

const googleNewsData = createReducer(googleNewsState, (builder) => {
  builder
    .addCase(loadGoogleNews, (state, action) => {
      state.googleNews = action.payload;
    });
});

const isGoogleNewsLoadedData = createReducer(isGoogleNewsLoadedState, (builder) => {
  builder
    .addCase(changeIsGoogleNewsLoaded, (state, action) => {
      state.isGoogleNewsLoaded = action.payload;
    });
});

export {googleNewsData, isGoogleNewsLoadedData};
