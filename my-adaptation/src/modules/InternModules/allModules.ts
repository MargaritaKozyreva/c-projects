import { CaseReducer } from '@reduxjs/toolkit';
import { RouteProps } from 'react-router';
import { ForkEffect } from 'redux-saga/effects';
import { progressModule } from './ProgressBar/module';
import { learnTableModule } from './LearnTable/module';
import { eventModule } from './Event/module';
import { courseModule } from './Course/module';
import { modalModule } from '../Modal/module';
import { userModule } from '../user/module';
export interface IRouter extends Omit<RouteProps, 'path'> {
	name: string;
	path: string;
	title?: string;
}

export type ReducerType = { [key: string]: CaseReducer };
export type SagasType = Generator<ForkEffect<never>, void>[];
export type RoutesType = IRouter[];
export type MiddlewaresType = any;

export interface BaseModule {
	readonly name: string;
	getSagas: () => SagasType;
	getReducers: () => ReducerType;
	getRoutes: () => RoutesType;
	getMiddlewares: () => MiddlewaresType;
}

export const allModules: BaseModule[] = [
	progressModule,
	learnTableModule,
	eventModule,
	courseModule,
	modalModule,
	userModule
];
