import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewName = (name, number) => {
    const { contacts } = this.state;

    const contactNames = contacts.map(contact => {
      return contact.name;
    });

    if (contactNames.includes(name))
      return alert(`${name} is alredy in contacts`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  showFilteredContacts = value => {
    const { contacts } = this.state;

    this.setState({
      filter: contacts.filter(els => {
        return els.name.toLowerCase().includes(value.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewName} />

        <h2>Contacts</h2>
        <Filter onChange={this.showFilteredContacts} />
        <ContactList data={this.state} />
      </div>
    );
  }
}
