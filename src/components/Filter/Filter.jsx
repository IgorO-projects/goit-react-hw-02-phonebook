import PropTypes from 'prop-types';
import styles from './Filter.module.css';


const Filter = ({ filter, onChangeFilter }) => {
    return (
        <form>
          <label>
            <input
            className={styles.input}
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
            placeholder="Find person"
            />
          </label>
        </form>
    )
}

Filter.propTypes = { 
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}

export default Filter; 