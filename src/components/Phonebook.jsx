import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addNewName = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleSearch = e => {
    const { value } = e.target;

    this.setState({
      filter: this.state.contacts.filter(els => {
        return els.name.toLowerCase().includes(value.toLowerCase());
      }),
    });
  };

  render() {
    let { contacts, filter } = this.state;
    if (this.state.filter !== '') {
      contacts = filter;
    }

    return (
      <>
        <Form onSubmit={this.addNewName} />
        <div>
          <h2>Contacts</h2>
          <h3>Find contact by name</h3>
          <input onChange={this.handleSearch} />
          <ul>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
