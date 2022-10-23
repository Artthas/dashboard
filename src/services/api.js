import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080/api';

const REQUEST_TIMEOUT = 5000;

const HttpCode = {
	Unauthorized: 401,
}

export const createAPI = (onUnauthorized) => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		//timeout: REQUEST_TIMEOUT,
		withCredentials: true,
	});

	api.interceptors.response.use(
		(response) => response,

		(error) => {
			const { response } = error;

			if (response?.status === HttpCode.Unauthorized) {
				onUnauthorized();
			}

			return Promise.reject(error);
		}
	);

	/*api.interceptors.request.use((config) => {
		const accessToken = getAccessToken();
		
		if (accessToken) {
			config['headers'] = {authorization: `Bearer ${accessToken}`}
		}

		return config;
	});*/

	return api;
};
