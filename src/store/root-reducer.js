import {combineReducers} from 'redux';
import {googleNewsData} from './google-news-data/google-news-data';
import {twitterData} from './twitter-data/twitter-data';

export const NameSpace = {
  GoogleNews: 'GOOGLE_NEWS',
  Twitter: 'TWITTER'
}

export const rootReducer = combineReducers({
  [NameSpace.GoogleNews]: googleNewsData,
  [NameSpace.Twitter]: twitterData,
});
