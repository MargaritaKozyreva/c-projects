const dev = process.env['NODE_ENV'] === 'development';
const _url = (action: any, query: any = '') => {
	if (dev) {
		return `https://clever.x5.ru/adaptation_api?action=${ action }&${ query }`;
	}
	return `/adaptation_api?action=${ action }&${ query }`;
};

export { _url };
