import { Component } from 'react';

export class ContactList extends Component {
  handleDelete = e => {
    const { value } = e.target;

    this.props.onClick(value);
  };

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
                <button
                  type="submit"
                  value={contact.id}
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
