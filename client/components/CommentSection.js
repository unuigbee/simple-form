import React, { PropTypes } from 'react';
import ToggleDisplay from 'react-toggle-display';
import styles from './Form.css';
// Our styles are scoped to our components using CSSmodules

const CommentSection = (props) => {
  let buttonType;

  // buttonType is conditionally assigned a button or input button component based on whether
  // there is a next step or last step (last step is submitting the form)
  if (props.onNextStep) {
    buttonType = (
      <button
        type="button"
        className={styles.form_button}
        onClick={props.onNextStep}>
        Next >
      </button>
    );
  } else {
    buttonType = (
      <input
        type="submit"
        className={styles.form_button}
        value="Next >"
      />
  );
  }

  // Here we conditionally set our form section style based on the current step
  // and whether that form section is displayed/shown
  let styleformSection = '';
  if (props.show && props.currentStep == 2) {
    styleformSection = styles.form_section;
  }

  if (props.show && props.currentStep == 3) {
    styleformSection = styles.form_section;
  }

  return (
    <section className={styleformSection}>
      <header className={styles.section_header}>
{/* Here we access the properties passed down from our FormContainer component*/}
        <p>{props.headerTitle}</p>
      </header>
      <div className="row">
        <ToggleDisplay show={props.show}>
          <fieldset className={styles.form_fieldset}>
            <textarea
              className={styles.form_textarea}
              name={props.name}
              cols="99"
              rows="4" value={props.comments}
              onChange={props.onFieldChange}
            >
            </textarea>
            <div>{buttonType}</div>
          </fieldset>
        </ToggleDisplay>
      </div>
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
