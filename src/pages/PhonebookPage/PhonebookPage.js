import { 
  // useState,
   useMemo } from 'react';
// import { useSelector } from 'react-redux';
import Section from '../../components/PhoneBook/Section';
import ContactForm from '../../components/PhoneBook/ContactForm';
import Filter from '../../components/PhoneBook/Filter';
import ContactList from '../../components/PhoneBook/ContactList';
import { useContacts } from '../../hooks/useContacts';

function App() {

  const { contacts,filter, transformValue } = useContacts();
  console.log("⭐ ~ contacts", contacts)

  const filteredContacts = useMemo(() => {
    return contacts?.filter(
      contact =>
        transformValue(contact.name).includes(transformValue(filter)) ?? []
    );
  }, [contacts, transformValue, filter]);

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
