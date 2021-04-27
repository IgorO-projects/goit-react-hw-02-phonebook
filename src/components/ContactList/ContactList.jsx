import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ renderedContacts, deletedContactbyId }) => {
    return (
        <ul className={styles.list}>
          {renderedContacts.map(contact => {
            return (
              <li 
              className={styles.list__item}
              key={contact.id}>
                <span
                className={styles.list__text}
                >{contact.name}: {contact.number}</span>
                <button
                className={styles.list__button}
                type="button"
                onClick={()=> {deletedContactbyId(contact.id)}}
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