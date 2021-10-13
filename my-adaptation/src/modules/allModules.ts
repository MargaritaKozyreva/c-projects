import { CaseReducer } from '@reduxjs/toolkit';
import { RouteProps } from 'react-router';
import { ForkEffect } from 'redux-saga/effects';
import { myAdaptationModule } from './my-adaptation/modules';

export interface IRouter extends Omit<RouteProps, 'path'> {
	name: string;
	path: string;
	title?: string;
}

export interface BaseModule {
	readonly name: string;
	getSagas: () => Generator<ForkEffect<never>, void>[];
	getReducers: () => {[key: string]: CaseReducer };
	getRoutes: () => IRouter[];
	getMiddlewares: () => any[];
}

export const allModules: BaseModule[] = [
	myAdaptationModule
];