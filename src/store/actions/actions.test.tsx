import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './index';
import { ADD_CONTACT, ADD_DEFAULT_TEXT, REMOVE_CONTACT } from '../constants/actionTypes';

describe('Action', () => {
    it('should add default text', () => {
        const text = 'Adding default text';
        const expectedAction = {
            type: ADD_DEFAULT_TEXT,
            text
        };

        expect(actions.addDefaultText(text)).toEqual(expectedAction);
    });

    it('should save contactPage', () => {
        const contact = {
            name: 'Magdalena',
            id: 0.88888
        };
        const expectedAction = {
            type: ADD_CONTACT,
            contact
        };

        expect(actions.saveAddContact(contact)).toEqual(expectedAction);
    });

    it('should add contactPage', () => {
        const mockStore = configureMockStore([thunkMiddleware]);
        const store = mockStore();
        const contact = {
            name: 'Magdalena',
            id: 0.88888
        };
        const expectedAction = {
            type: ADD_CONTACT,
            contact: {
                id: 0.88888,
                name: 'Magdalena'
            }
        };

        store.dispatch(actions.saveAddContact(contact));
        const action = store.getActions();

        expect(action[0]).toEqual(expectedAction);
    });

    it('should remove contactPage', () => {
        const id = 0.999999;
        const expectedAction = {
            type: REMOVE_CONTACT,
            id
        };

        expect(actions.removeContact(id)).toEqual(expectedAction);
    });
});
