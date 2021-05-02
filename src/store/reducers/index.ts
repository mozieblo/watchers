import { combineReducers } from 'redux';
import { ADD_CONTACT, REMOVE_CONTACT, ADD_DEFAULT_TEXT } from '../constants/actionTypes';
import { IInitialStateFirst, IInitialStateSecond } from '../../types/store/reducers';
import { AppActions, Contact } from '../../types/store/actions';

const initialStateFirst: IInitialStateFirst = {
    contacts: []
};

const initialStateSecond: IInitialStateSecond = {
    text: ''
};

export const firstReducer = (
    state = initialStateFirst,
    action: AppActions | Record<string, never> = {}
): IInitialStateFirst => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state?.contacts?.length
                    ? state.contacts.filter((contact: Contact) => contact.id !== action.id)
                    : []
            };
        default:
            return state;
    }
};

export const secondReducer = (
    state = initialStateSecond,
    action: AppActions | Record<string, never> = {}
): IInitialStateSecond => {
    switch (action.type) {
        case ADD_DEFAULT_TEXT:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

export default combineReducers({
    firstReducer,
    secondReducer
});
