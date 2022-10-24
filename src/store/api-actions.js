import { APICountries } from '../const';
import { loadGoogleNews, loadTwitter, changeIsDataLoaded } from './action';

export const fetchGoogleNewsAction = (page, country) =>
	async (dispatch, _getState, extraArgument) => {
		try {
			const { api } = extraArgument;
			const { data } = await api.get(`/google_news_${APICountries[country]}/${page}`);
			dispatch(loadGoogleNews(data));
			dispatch(changeIsDataLoaded(true));
		} catch (error) {
			console.log(error);
		}
	};

export const fetchTwitterAction = (page, country) =>
	async (dispatch, _getState, extraArgument) => {
		try {
			const { api } = extraArgument;
			const { data } = await api.get(`/twitter_${APICountries[country]}/${page}`);
			dispatch(loadTwitter(data));
			dispatch(changeIsDataLoaded(true));
		} catch (error) {
			console.log(error);
		}
	};
