import { allModules, BaseModule, IRouter } from '../../modules/InternModules/allModules';

export const configRoutes = () => {
	return allModules.reduce(
		(list: IRouter[], module: BaseModule) =>
			list.concat(module.getRoutes() || []),
		[]
	);
};
