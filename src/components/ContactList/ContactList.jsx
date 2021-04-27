import PropTypes from 'prop-types';

const ContactList = ({ renderedContacts, deletedContactbyId }) => {
    return (
        <ul>
          {renderedContacts.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}: {contact.number}</span>
                <button
                type="button"
                onClick={deletedContactbyId(contact.id)}
                >delete</button>
              </li>
            )
          })}
        </ul>
    )
}

ContactList.propTypes = {
    renderedContacts: PropTypes.array.isRequired,
};

export default ContactList;