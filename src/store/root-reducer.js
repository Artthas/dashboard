import {combineReducers} from 'redux';
import {auData} from './au-data/au-data';

export const NameSpace = {
  Au: 'AU',
}

export const rootReducer = combineReducers({
  [NameSpace.Au]: auData,
});
