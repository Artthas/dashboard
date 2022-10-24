import {NameSpace} from '../root-reducer';

export const getTwitter = (state) => state[NameSpace.Twitter].twitter;
export const getIsTwitterLoaded = (state) => state[NameSpace.Twitter].isTwitterLoaded;
