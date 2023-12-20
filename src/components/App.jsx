import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  load = () => {
    let data = localStorage.getItem('contacts');
    if (data === null) {
      this.setState({ contacts: [] });
    } else {
      this.setState({ contacts: JSON.parse(data) });
    }
  };

  update = contact => {
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  updateFilter = pattern => {
    this.setState({ filter: pattern });
    console.log(this.state.filter);
  };

  delete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  findByName = name => {
    const result = this.state.contacts.filter(contact => contact.name === name);

    return result;
  };

  deleteLocalStorageArray = () => {
    if (this.state.contacts.length === 0) {
      localStorage.removeItem('contacts');
    }
  };

  setLocalStorageArray = prevState => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    this.setLocalStorageArray(prevState);
    this.deleteLocalStorageArray();
  }
  render() {
    return (
      <div>
        <h1>Your phonebook</h1>
        <ContactForm onUpdate={this.update} findByName={this.findByName} />

        <h2>Contacts</h2>
        <Filter onUpdate={this.updateFilter} pattern={this.state.filter} />
        <ContactList
          onDelete={this.delete}
          list={this.state.contacts}
          pattern={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
