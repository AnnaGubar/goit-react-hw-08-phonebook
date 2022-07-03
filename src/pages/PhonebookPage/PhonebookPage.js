import { useEffect, useMemo } from 'react';

import Section from '../../components/PhoneBook/Section';
import ContactForm from '../../components/PhoneBook/ContactForm';
import Filter from '../../components/PhoneBook/Filter';
import ContactList from '../../components/PhoneBook/ContactList';

import { useContacts } from '../../hooks/useContacts';
import { getContactsRequest } from '../../redux/contacts/contacts-operations';

function App() {
  const { contacts, filter, transformValue, dispatch } = useContacts();

  const filteredContacts = useMemo(() => {
    return contacts?.filter(
      contact =>
        transformValue(contact.name).includes(transformValue(filter)) ?? []
    );
  }, [contacts, transformValue, filter]);

  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList filteredContacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
