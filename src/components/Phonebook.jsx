import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

export class Phonebook extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, id: nanoid() },
      ],
    });

    e.target.reset();
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.contactId}>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.contactId}
              onChange={this.handleChange}
            />

            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              return <li key={contact.id}>{contact.name}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}
