import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
    return (
        <form>
          <label>
            <input 
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
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