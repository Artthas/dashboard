import {createReducer} from '@reduxjs/toolkit';
import {loadTwitter, changeIsTwitterLoaded} from '../action';

const twitterState = {
  twitter: [],
};

const isTwitterLoadedState = {
  isTwitterLoaded: false,
};

const twitterData = createReducer(twitterState, (builder) => {
  builder
    .addCase(loadTwitter, (state, action) => {
      state.twitter = action.payload;
    })
});

const isTwitterLoadedData = createReducer(isTwitterLoadedState, (builder) => {
  builder
    .addCase(changeIsTwitterLoaded, (state, action) => {
      state.isTwitterLoaded = action.payload;
    });
});

export {twitterData, isTwitterLoadedData};
