import {createAction} from '@reduxjs/toolkit';

export const loadGoogleNews = createAction(
  (googleNews) => ({
    payload: googleNews,
  }),
);

export const loadTwitter = createAction(
  (twitter) => ({
    payload: twitter,
  }),
);

export const changeIsDataLoaded = createAction(
  (isTrue) => ({
    payload: isTrue,
  }),
);
