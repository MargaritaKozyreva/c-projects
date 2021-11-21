/* eslint-disable no-mixed-spaces-and-tabs */
import axios, { AxiosResponse, AxiosPromise, Method } from 'axios';
import { _url } from './service-tools';

type ResponseResult<Result> = Promise<AxiosResponse<Result>>;
type HttpServiceMock = <D>(mockData: D) => ResponseResult<D>;

/**
 * Функция обращения к серверу (GET запрос)
 * @param url - адрес API, к которому необходимо обратиться
 * @returns - данные ответа
 */
const httpService = async <T>(
	method: Method,
	action: string,
	query?: string,
	data?: any
) => {
	try {
		const response: AxiosResponse<T> = await axios({
			method: method,
			baseURL: _url(action, query),
			withCredentials: true,
			data: JSON.stringify(data)
		});
		return {
			data: response.data as T,
			status: response.status,
			statusText: response.statusText,
			headers: response.headers,
			config: response.config
		};
	} catch (e) {
		throw new Error('Bad Request! ' + e);
	}
};

const httpServiceMock: HttpServiceMock = (mockData) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve({
				data: mockData,
				status: 200,
				statusText: 'success',
				headers: [],
				config: {}
			});
		}, 1500);
	});
};

export { httpService, httpServiceMock, ResponseResult, AxiosPromise };
