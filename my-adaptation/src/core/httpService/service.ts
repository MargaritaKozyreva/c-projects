/* eslint-disable no-mixed-spaces-and-tabs */
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { _url } from './service-tools';

/**
 * Функция обращения к серверу (GET запрос)
 * @param url - адрес API, к которому необходимо обратиться
 * @returns - данные ответа
 */
const httpService = async(backend_address_id: string, action: string) => {
	try {
		const response: AxiosResponse = await axios({
			method: 'GET',
			url: _url(backend_address_id, action),
			withCredentials: true
		});
		return {
			data: response.data.data,
			status: response.status,
			statusText: response.statusText,
			headers: response.headers,
			config: response.config
		};
	} catch (e) {
		throw new Error('Bad Request! ' + e);
	}
};

type ResponseResult<Result> = Promise<AxiosResponse<Result>>;

type HttpServiceMock = <D>(mockData: D) => ResponseResult<D>;

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
