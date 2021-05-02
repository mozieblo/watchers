import * as reducers from './index';
import { ADD_CONTACT, REMOVE_CONTACT, ADD_DEFAULT_TEXT } from '../constants/actionTypes';

describe('First Reducer', () => {
    const initialStateFirst = {
        contacts: [
            {
                name: 'Magdalena',
                id: 0.555555
            }
        ]
    };

    it('should return initial state', () => {
        expect(reducers.firstReducer(undefined, {})).toEqual({ contacts: [] });
    });

    it('should handle ADD_CONTACT action', () => {
        expect(
            reducers.firstReducer(initialStateFirst, {
                type: ADD_CONTACT,
                contact: {
                    name: 'Gabriel',
                    id: 0.45453534535
                }
            })
        ).toEqual({
            contacts: [
                {
                    name: 'Magdalena',
                    id: 0.555555
                },
                {
                    name: 'Gabriel',
                    id: 0.45453534535
                }
            ]
        });
    });

    it('should handle REMOVE_CONTACT action', () => {
        expect(
            reducers.firstReducer(initialStateFirst, {
                type: REMOVE_CONTACT,
                id: 0.555555
            })
        ).toEqual({
            contacts: []
        });
    });
});

describe('Second Reducer', () => {
    const initialStateSecond = {
        text: ''
    };

    it('should return initial state', () => {
        expect(reducers.secondReducer(undefined, {})).toEqual({ text: '' });
    });

    it('should handle ADD_DEFAULT_TEXT action', () => {
        expect(
            reducers.secondReducer(initialStateSecond, {
                type: ADD_DEFAULT_TEXT,
                text: 'Testing in progress'
            })
        ).toEqual({ text: 'Testing in progress' });
    });
});
