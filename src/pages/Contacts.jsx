import ContactList from 'components/ContactList/ContactList';
import React from 'react';
import { ContactsSection } from './Contact.styled';

const Contacts = () => {
  return (
    <ContactsSection>
      <h2 style={{ marginTop: '20px' }}>Contacts</h2>
      <ContactList />
    </ContactsSection>
  );
};

export default Contacts;
