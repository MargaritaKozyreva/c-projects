import { AnyArray } from 'immer/dist/internal';

export namespace MyAdaptation {
    export type Progress = {
        /** Сколько процентов пройдено */
        percent: number,

        /** До какой даты возможно пройти этот этап */
        endDate: string
    }
    export type Steps = {

        /** название этапа */
        title: string,

        /** номер этапа */
        num: number,

        /** Является текущим этапом, на котором находится сотрудник */
        isCurrent: boolean,

        /** Является выбранным этапом, на который по клику сотрудник перешёл в данный момент времени */
        isActive: boolean,

        /** Доступен к переходу так как уже был пройден ранее */
        isAvalible: boolean,

    }
    export type Course = {
        [key in string]: any
    }
    export type Assessment = {
        [key in string]: any
    }
    export type Event = {
        [key in string]: any
    }
    export type Video = {
        [key in string]: any
    }
    export type EducationList = Array<Course | Assessment | Event | Video>

}