const dev = process.env['NODE_ENV'] === 'development';
const _url = (objectID: any, action: any) => {
	let modePart = '';

	if (action) {
		modePart = `&action=${ action }`;
	}

	if (dev) {
		return `https://test-clever.x5.ru/custom_web_template.html?object_id=${ objectID }${ modePart }`;
	}
	return `/custom_web_template.html?object_id=${ objectID }${ modePart }`;
};

const root = (part: any) => {
	if (dev) {
		return `https://test-clever.x5.ru/${ part }`;
	}
	return `${ part }`;
};

export { _url, root };
