import PropTypes from 'prop-types';
import { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.props.onUpdate(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input onChange={this.handleInputChange} type="text" name="filter" />
      </label>
    );
  }
}
Filter.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default Filter;
