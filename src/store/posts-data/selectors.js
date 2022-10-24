import {NameSpace} from '../root-reducer';

export const getGoogleNews = (state) => state[NameSpace.Posts].googleNews;
export const getTwitter = (state) => state[NameSpace.Posts].twitter;
export const getIsDataLoaded = (state) => state[NameSpace.Posts].isDataLoaded;
