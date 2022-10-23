import { APIRoute } from '../const';
import { loadAuGoogleNews } from './action';

export const fetchAuGoogleNewsAction = (page) =>
	async (dispatch, _getState, extraArgument) => {
		try {
			const { api } = extraArgument;
			const { data } = await api.get(`${APIRoute.AuGoogleNews}/${page}`);
			dispatch(loadAuGoogleNews(data));
		} catch (error) {
			console.log(error);
		}
	};
