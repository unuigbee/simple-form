import React, { Component, PropTypes } from 'react';
import UserDetailSection from '../components/UserDetailSection';
import CommentSection from '../components/CommentSection';
import FormWrapper from '../components/FormWrapper';
import objectAssign from 'object-assign';
import formSubmitHelpers from '../utils/FormSubmitHelper';

// Stateful Container Component for handling the data and behaviour of our form
export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    // Set our initial state
    this.state = {
      step: 1,
      fieldValues: {
        firstname: '',
        surname: '',
        email: '',
        telephone: '',
        gender: 'male',
        comments: '',
        morecomments: '',
      },
      isStepOne: true,
      isStepTwo: false,
      isStepThree: false,
    };
    // Since we are using es6 class syntax to create our component instead of
    // React's createCLass method we need to explicity bind our methods to our class object
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.showStep = this.showStep.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleFieldChange(event) {
    const nextState = {};
    // RadioGroup component passes event.target.value to our event handler instead of event
    // So we make a check for our possible event values from our Radio group fields
    if (event === 'male' || event === 'female') {
      const eventValue = event;
      nextState.gender = eventValue;
    } else {
      // Gets the name and value attribute of target element (e.g. input) and creates a key value
      // pair of both attributes
      // This also allows us to have one event handler for every input change event
      nextState[event.target.name] = event.target.value;
    }

    // To avoid mutating state directly we use objectAssign to make a
    // shallow copy of our components state with the next state merged in.
    // We then use setState to make internal state changes.
    const updatedFieldValues = objectAssign({}, this.state.fieldValues, nextState);
    this.setState({ fieldValues: updatedFieldValues });
  }

  handleNextStep() {
    // if our current step is less than 3 we want to increment our step with setState
    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
    }
    this.showStep();
  }

  showStep() {
    // We check if this.state.step equals one/two because this.setState does not immediateley mutate
    // this.state but creates a pending transition to that next state, so accessing this.state.step
    // can potentially return the existing value
    if (this.state.step === 1) {
      this.setState({ isStepOne: false, isStepTwo: true });
    } else if (this.state.step === 2) {
      this.setState({ isStepThree: true, isStepTwo: false });
    }
  }
  // handles submission of our form
  handleSubmitForm(event) {
    event.preventDefault();

    // We post our form data and if we get an ok response then we change route to
    // Thank you page
    formSubmitHelpers.postFormData(this.state.fieldValues)
      .then((response) => {
        if (response.result === 'ok') {
          // We grab router from our context type and call push method to change routes
          // to Thank You page/route
          this.context.router.push({
            pathname: '/thankYou',
          });
        }
      });
  }

  // Our render method returns a tree of components, passing properties down to those components
  render() {
    return (
      <FormWrapper onSubmitForm={this.handleSubmitForm}>
        <UserDetailSection
          headerTitle="Step 1: Your details"
          buttonText="Next"
          fieldValues={this.state.fieldValues}
          onFieldChange={this.handleFieldChange}
          onNextStep={this.handleNextStep}
          show={this.state.isStepOne}
        />
        <CommentSection
          headerTitle="Step 2: Comments"
          buttonText="Next"
          name="comments"
          comments={this.state.fieldValues.comments}
          onFieldChange={this.handleFieldChange}
          onNextStep={this.handleNextStep}
          show={this.state.isStepTwo}
        />
        <CommentSection
          headerTitle="Step 3: More comments"
          buttonText="Next"
          name="morecomments"
          comments={this.state.fieldValues.morecomments}
          onFieldChange={this.handleFieldChange}
          show={this.state.isStepThree}
        />
      </FormWrapper>
    );
  }
}
// We set router as a property of our component's contextType so we don't have to pass router as
// props down to our Form Container Component.
FormContainer.contextTypes = { router: PropTypes.object.isRequired };
