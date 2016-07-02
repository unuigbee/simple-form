import React, { Component } from 'react';
import UserDetailSection from '../components/UserDetailSection';
import CommentSection from '../components/CommentSection';
import FormWrapper from '../components/FormWrapper';

// Stateful Container Component for handling the data and behaviour of our form
export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  // Our render method returns a tree of components, passing properties down to those components
  render() {
    return (
      <FormWrapper>
        <UserDetailSection
          headerTitle="Step 1: Your details"
          buttonText="Next"
        />
        <CommentSection
          headerTitle="Step 2: Comments"
          buttonText="Next"
        />
        <CommentSection
          headerTitle="Step 3: More comments"
          buttonText="Submit"
        />
      </FormWrapper>
    );
  }
}
