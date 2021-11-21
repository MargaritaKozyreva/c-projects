const dev = process.env['NODE_ENV'] === 'development';
const _url = (action: any, query: any = '') => {
	if (dev) {
		return `https://clever.x5.ru/adaptation?action=${ action }&${ query }`;
	}
	return `/adaptation?action=${ action }&${ query }`;
};

export { _url };
