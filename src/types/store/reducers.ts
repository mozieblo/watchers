import {AxiosError, AxiosResponse} from 'axios';
import { Contact } from './actions';
import { IShow } from '../data/show';

export interface IState {
    firstReducer: {
        contacts: Contact[];
        shows: AxiosResponse<IShow[]> | AxiosError | [];
    };
    secondReducer: {
        text: string;
    };
}

export interface IInitialStateFirst {
    contacts: Contact[];
    shows: AxiosResponse<IShow[]> | AxiosError | [];
}

export interface IInitialStateSecond {
    text: string;
}
