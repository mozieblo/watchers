import { Action } from 'redux';
import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    ADD_DEFAULT_TEXT
} from '../../store/constants/actionTypes';

export type AppActions =
    | IAddContact
    | IRemoveContact
    | IAddDefaultText;

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
