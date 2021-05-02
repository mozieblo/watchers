import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact, addDefaultText } from '../../store/actions';
import { IState } from '../../types/store/reducers';
import { Contact } from '../../types/store/actions';

const ContactPage: FC = () => {
    const intl = useIntl();
    const contacts = useSelector((state: IState) => state.firstReducer?.contacts);
    const text = useSelector((state: IState) => state.secondReducer?.text);
    const dispatch = useDispatch();

    function addContactToStore() {
        dispatch(
            addContact({
                name: 'Magdalena',
                id: Math.random()
            })
        );
        dispatch(addDefaultText('adding some text'));
    }

    function removeContactFromStore(id: number) {
        dispatch(removeContact(id));
    }

    return (
        <>
            <div>
                {intl.formatMessage({
                    id: 'contact.content'
                })}
            </div>
            <button type="button" onClick={addContactToStore}>
                {intl.formatMessage({
                    id: 'contact.btn'
                })}
            </button>
            {contacts?.length
                ? contacts.map((contact: Contact) => (
                      <button key={contact.id} type="button" onClick={() => removeContactFromStore(contact.id)}>
                          {contact.id}
                      </button>
                  ))
                : null}
            {text}
        </>
    );
};

export default ContactPage;
