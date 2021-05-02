import { Contact } from './actions';

export interface IState {
    firstReducer: {
        contacts: Contact[];
    };
    secondReducer: {
        text: string;
    };
}

export interface IInitialStateFirst {
    contacts: Contact[];
}

export interface IInitialStateSecond {
    text: string;
}
