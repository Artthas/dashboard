import {createReducer} from '@reduxjs/toolkit';
import {loadGoogleNews, loadTwitter, changeIsDataLoaded} from '../action';

const initialState = {
  googleNews: [],
  twitter: [],
  isDataLoaded: false,
};

const postsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGoogleNews, (state, action) => {
      state.googleNews = action.payload;
    })
    .addCase(loadTwitter, (state, action) => {
      state.twitter = action.payload;
    })
    .addCase(changeIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {postsData};
