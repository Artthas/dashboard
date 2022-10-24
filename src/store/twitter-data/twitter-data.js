import {createReducer} from '@reduxjs/toolkit';
import {loadTwitter, changeIsTwitterLoaded} from '../action';

const initialState = {
  twitter: [],
  isTwitterLoaded: false,
};

const twitterData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadTwitter, (state, action) => {
      state.twitter = action.payload;
    })
    .addCase(changeIsTwitterLoaded, (state, action) => {
      state.isTwitterLoaded = action.payload;
    });
});

export {twitterData};
