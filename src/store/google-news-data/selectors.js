import {NameSpace} from '../root-reducer';

export const getGoogleNews = (state) => state[NameSpace.GoogleNews].googleNews;
export const getIsGoogleNewsLoaded = (state) => state[NameSpace.GoogleNews].isGoogleNewsLoaded;
