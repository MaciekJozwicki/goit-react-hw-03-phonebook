import PropTypes from 'prop-types';
const { Component } = require('react');

class ContactList extends Component {
  render() {
    const { list, pattern } = this.props;
    let lista = list.filter(contact => contact.name.includes(pattern));
    return (
      <ul>
        {lista.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => {
                this.props.onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default ContactList;
