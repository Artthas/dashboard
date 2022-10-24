import {combineReducers} from 'redux';
import {postsData} from './posts-data/posts-data';

export const NameSpace = {
  Posts: 'POSTS',
}

export const rootReducer = combineReducers({
  [NameSpace.Posts]: postsData,
});
