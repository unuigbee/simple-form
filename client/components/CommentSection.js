import React, { PropTypes } from 'react';
import ToggleDisplay from 'react-toggle-display';

const CommentSection = (props) => {
  let buttonType;

  // buttonType is conditionally assigned a button or input button component based on whether
  // there is a next step or last step (last step is submitting the form)
  if (props.onNextStep) {
    buttonType = <button type="button" onClick={props.onNextStep}> {props.buttonText} </button>;
  } else {
    buttonType = <input type="submit" value={props.buttonText} />;
  }

  return (
    <section>
      <header>
{/* Here we access the properties passed down from our FormContainer component*/}
        <p>{props.headerTitle}</p>
      </header>
      <ToggleDisplay show={props.show}>
        <textarea
          name={props.name}
          cols="100"
          rows="4" value={props.comments}
          onChange={props.onFieldChange}
        >
        </textarea>
        {buttonType}
      </ToggleDisplay>
    </section>
  );
};
// Setting property types for type checking our properties
CommentSection.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};
export default CommentSection;
