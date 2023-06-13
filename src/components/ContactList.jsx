import { Component } from 'react';

export class ContactList extends Component {
  render() {
    let { contacts, filter } = this.props.data;
    if (filter !== '') contacts = filter;

    return (
      <>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
