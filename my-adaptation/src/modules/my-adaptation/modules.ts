import { BaseModule } from '../allModules';
import routes from './routes';
import { pokemonReducers } from './redux/pokemonSlice';

class adaptationModule implements BaseModule {
	readonly name = 'pokemons';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			pokemonList: pokemonReducers,
		};
	}

	getSagas() {
		return [];
	}

	getRoutes() {
		return routes;
	}
}

export const myAdaptationModule = new adaptationModule();