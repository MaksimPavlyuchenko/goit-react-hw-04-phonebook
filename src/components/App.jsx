import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Header, HeaderList } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    window.JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerContactFormSubmit = ({ name, telephone }) => {
    const findDoubleName = contacts.find(contact => {
      return contact.name === name;
    });
    if (findDoubleName) {
      alert(`Hey,BRO!!!! ${name} is alredy in contacts`);
      return;
    }
    setContacts(contacts => [...contacts, { name, telephone, id: nanoid() }]);
  };

  const handlerFilter = event => {
    const data = event.target.value;
    setFilter(data);
  };

  const filteredName = () => {
    const filterLower = filter.toLowerCase();
    if (contacts) {
      const filteredName = contacts.filter(({ name }) => {
        return name.toLowerCase().trim().includes(filterLower);
      });
      return filteredName;
    }
  };

  const handlerButtonDelete = id => {
    const restContacts = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(restContacts);
  };

  return (
    <div
      style={{
        marginTop: '150',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Header>Phonebook</Header>
      <ContactForm onSubmit={handlerContactFormSubmit} />
      <HeaderList>Contact List</HeaderList>
      <Filter filterData={filter} filterHandler={handlerFilter} />
      <ContactList
        dataContacts={filteredName}
        handlerDelete={handlerButtonDelete}
      />
    </div>
  );
};

export default App;
