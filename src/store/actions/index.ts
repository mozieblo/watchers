import { Dispatch } from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {
 ADD_CONTACT, ADD_DEFAULT_TEXT, REMOVE_CONTACT, ADD_SHOWS 
} from '../constants/actionTypes';
import {
    Contact, IAddContact, IAddDefaultText, IAddShows, IRemoveContact
} from '../../types/store/actions';
import {IShow} from '../../types/data/show';

export function saveAddContact(contact: Contact): IAddContact {
    return {
        type: ADD_CONTACT,
        contact
    };
}

// middleware
export function addContact(contact: Contact) {
    // eslint-disable-next-line
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(saveAddContact(contact));
        }, 2000);
    };
}

export function removeContact(id: number): IRemoveContact {
    return {
        type: REMOVE_CONTACT,
        id
    };
}

export function addDefaultText(text: string): IAddDefaultText {
    return {
        type: ADD_DEFAULT_TEXT,
        text
    };
}

export function addShows(shows: AxiosResponse<IShow[]> | AxiosError | []): IAddShows {
    return {
        type: ADD_SHOWS,
        shows
    };
}