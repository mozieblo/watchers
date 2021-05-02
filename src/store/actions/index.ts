import { Dispatch } from 'redux';
import { ADD_CONTACT, ADD_DEFAULT_TEXT, REMOVE_CONTACT } from '../constants/actionTypes';
import { Contact, IAddContact, IAddDefaultText, IRemoveContact } from '../../types/store/actions';

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
