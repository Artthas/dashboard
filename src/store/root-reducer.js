import {combineReducers} from 'redux';
import {googleNewsData, isGoogleNewsLoadedData} from './google-news-data/google-news-data';
import {twitterData, isTwitterLoadedData} from './twitter-data/twitter-data';

export const NameSpace = {
  GoogleNews: 'GOOGLE_NEWS',
  IsGoogleNewsLoaded: 'IS_GOOGLE_NEWS_LOADED',
  Twitter: 'TWITTER',
  IsTwitterLoaded: 'IS_TWITTER_LOADED'
}

export const rootReducer = combineReducers({
  [NameSpace.GoogleNews]: googleNewsData,
  [NameSpace.IsGoogleNewsLoaded]: isGoogleNewsLoadedData,
  [NameSpace.Twitter]: twitterData,
  [NameSpace.IsTwitterLoaded]: isTwitterLoadedData,
});
