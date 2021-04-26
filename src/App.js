import { Component } from "react";
import Container from './components/Container';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  }

  handlePhoneAdd = event => {
    event.preventDefault()
    const name = this.state.name;
    const id = uuidv4();

    this.state.contacts.push({ id: id, name: name });
    console.log(this.state.contacts);
  }

  render () {

    return (
      <Container>
        <form>
          <label>Name
          <br/>
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          />
          </label>
          <br/>
          <button 
          type="submit"
          onClick={this.handlePhoneAdd}
          >Add contact</button>
        </form>

        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={contact.id}>
                <p>{contact.name}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    );
  }
}

export default App;
