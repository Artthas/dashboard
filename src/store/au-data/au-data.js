import {createReducer} from '@reduxjs/toolkit';
import {loadAuGoogleNews} from '../action';

const initialState = {
  auGoogleNews: [],
};

const auData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAuGoogleNews, (state, action) => {
      state.auGoogleNews = action.payload;
    })
});

export {auData};
