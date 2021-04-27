import PropTypes from 'prop-types';

const ContactForm = ({name, number, handleChange, handlePhoneAdd}) => {

    return (
        <form >
          <label>Name
            <br/>
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            />
          </label>
          <br/>
          <label> Number
            <br/>
            <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            />
          </label>
          <br/>
          <button
          onClick={handlePhoneAdd} 
          type="submit"
          >Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePhoneAdd: PropTypes.func.isRequired,
}

export default ContactForm;