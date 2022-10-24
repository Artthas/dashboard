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

export const changeIsGoogleNewsLoaded = createAction(
  (isTrue) => ({
    payload: isTrue,
  }),
);

export const changeIsTwitterLoaded = createAction(
  (isTrue) => ({
    payload: isTrue,
  }),
);
