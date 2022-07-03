import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsRequest,
  addContactRequest,
  deleteContactRequest,
} from '../redux/contacts/contacts-operations';
import { setFilterReducer } from '../redux/contacts/contacts-slice';

export function useContacts() {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.contacts.filter);

  const contacts = () => dispatch(getContactsRequest());

  const addContact = newContact => dispatch(addContactRequest(newContact));
  const deleteContact = id => dispatch(deleteContactRequest(id));
  const setFilter = value => dispatch(setFilterReducer(value));

  const transformValue = value => value.toLowerCase().trim();

  const isContactExists = newContact =>
    contacts.find(
      contact =>
        transformValue(contact.name) === transformValue(newContact.name)
    );

  return {
    dispatch,
    contacts,
    filter,
    isContactExists,
    transformValue,
    addContact,
    deleteContact,
    setFilter,

    // getContacts,
  };
}
