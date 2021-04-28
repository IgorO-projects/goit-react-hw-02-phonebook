import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { handlePhoneAdd } = this.props;
    const contact = { name, number };

    handlePhoneAdd(contact)
  }
  
  render() {

    return (
      <form onSubmit={this.onSubmit} >
        <label>
          <br/>
          <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Name"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          <br/>
          <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Number"
          required
          value={this.state.number}
          onChange={this.handleChange}
          />
        </label>
        <br/>
        <button
        className={styles.button}
        type="submit"
        >Add contact</button>
      </form>
  );
  }
};

ContactForm.propTypes = {
    handlePhoneAdd: PropTypes.func.isRequired,
}

export default ContactForm;