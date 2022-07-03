// import {
//   // useState,
//   useMemo,
// } from 'react';
import Section from '../../components/PhoneBook/Section';
import ContactForm from '../../components/PhoneBook/ContactForm';
import Filter from '../../components/PhoneBook/Filter';
import ContactList from '../../components/PhoneBook/ContactList';
import { useContacts } from '../../hooks/useContacts';


function App() {
  const {contacts,filter, transformValue } = useContacts();
  const filteredContacts = () => {

    return contacts?.filter(
      contact =>
        transformValue(contact.name).includes(transformValue(filter)) ?? []
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />

        {/* <ContactList filteredContacts={contacts} /> */}
        <ContactList filteredContacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
