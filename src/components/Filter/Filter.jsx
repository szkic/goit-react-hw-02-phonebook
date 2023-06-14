import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleSearch = e => {
    const { value } = e.target;

    this.props.onChange(value);
  };

  render() {
    return (
      <>
        <h3>Find contact by name</h3>
        <input onChange={this.handleSearch} />
      </>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
