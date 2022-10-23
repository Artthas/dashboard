import {createAction} from '@reduxjs/toolkit';

export const loadAuGoogleNews = createAction(
  (auGoogleNews) => ({
    payload: auGoogleNews,
  }),
);
