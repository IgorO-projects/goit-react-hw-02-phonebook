import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  nameCheked = ( contacts, name ) => {
    return contacts.find(contact => name === contact.name);
  }

  handlePhoneAdd = contact => {
    const { contacts } = this.state;
    const { name, number } = contact;
    
    const id = uuidv4();
    const doublCheckedName = this.nameCheked(contacts, name);

    if(doublCheckedName) {
      alert(`${name} is already in Phonebook`)
      return;
    }

    this.setState( prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }]}
    ));
    console.log(contacts);
  };

  onChangeFilter = event => {
     this.setState({ filter: event.currentTarget.value});
  }

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    if(filter) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    return contacts;
  }

  deletedContactbyId = (id) => {
    this.setState(prevState=> ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render () {
    const { filter } = this.state;
    const renderedContacts = this.filteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm 
        handlePhoneAdd={this.handlePhoneAdd}
        />
        <h2>Contacts</h2>
        <Filter 
        filter={filter}
        onChangeFilter={this.onChangeFilter}
        />
        <ContactList 
        renderedContacts={renderedContacts}
        deletedContactbyId={this.deletedContactbyId}
        />
      </Container>
    );
  }
}

export default App;
