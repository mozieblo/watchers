import { Action } from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    ADD_DEFAULT_TEXT,
    ADD_SHOWS
} from '../../store/constants/actionTypes';
import {IShow} from '../data/show';

export type AppActions =
    | IAddContact
    | IRemoveContact
    | IAddDefaultText
    | IAddShows;

export interface IAddContact extends Action {
    type: typeof ADD_CONTACT;
    contact: Contact;
}

export type Contact = {
    name: string;
    id: number;
};

export interface IRemoveContact extends Action {
    type: typeof REMOVE_CONTACT;
    id: number;
}

export interface IAddDefaultText extends Action {
    type: typeof ADD_DEFAULT_TEXT;
    text: string;
}

export interface IAddShows extends Action {
    type: typeof ADD_SHOWS;
    shows: AxiosResponse<IShow[]> | AxiosError | [];
}