import React, { Component } from 'react';
import Results from '../components/Results';
import formSubmitHelpers from '../utils/FormHelpers';

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  // When our component has rendered we make a AJAX request to get users
  // We then set the state of users to the the promised users data
  // Also we set our loading state to false
  // Note: componentDidMount is called immediateley after the initial render of
  // our this ResultsContainer component
  componentDidMount() {
    formSubmitHelpers.getUsers()
      .then((data) => {
        this.setState({
          users: data.users,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <Results users={this.state.users} isLoading={this.state.isLoading} />
    );
  }
}
