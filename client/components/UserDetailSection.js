// React namespace is neccessary to import because the transformed JSX syntax into JS code by Babel
// uses the React namespace to create these elements e.g. React.createElement(element, children, ..)
import React, { PropTypes } from 'react';

// import the Radio Group module for managing radio groups
import { RadioGroup, Radio } from 'react-radio-group';
import styles from './Form.css';

// import the Toggle Display module to easily toggle our form sections between show and hide
import ToggleDisplay from 'react-toggle-display';

const UserDetailSection = (props) => {
  return (
    <section className={styles.form_section}>
      <header className={styles.section_header}>
        <p>{props.headerTitle}</p>
      </header>
{/* Toggle Display component alllows us to toggle the display of it's children */}
      <ToggleDisplay show={props.show}>
        <fieldset className={styles.form_fieldset}>
          <div className="row">
            <div className="col-md-4">
              <label>Firstname
                <input
                  className={styles.form_input}
                  type="text"
                  name="firstname"
                  value={props.fieldValues.firstname}
                  onChange={props.onFieldChange}
                />
              </label>
            </div>
            <div className="col-md-4">
              <label>Surname
                <input
                  className={styles.form_input}
                  type="text"
                  name="surname"
                  value={props.fieldValues.surname}
                  onChange={props.onFieldChange}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Email Address
                <input
                  className={styles.form_input}
                  type="email"
                  name="email"
                  value={props.fieldValues.email}
                  onChange={props.onFieldChange}
                />
              </label>
            </div>
            <div className="col-md-4">
              <label>Telephone Nom.
                <input
                  className={styles.form_input}
                  type="text" name="telephone"
                  onChange={props.onFieldChange}
                  value={props.fieldValues.telephone}
                />
              </label>
            </div>
          </div>
          <label>Gender
  {/* We use RadioGroup component to easily set checked value and retrieve selected value from onChange events*/ }
            <RadioGroup
              className={styles.form_input}
              name="gender"
              selectedValue={props.fieldValues.gender}
              onChange={props.onFieldChange}
            >
              <label className={styles.form_radio_label}>
                <Radio value="male" />Male
              </label>
              <label className={styles.form_radio_label}>
                <Radio value="female" />Female
              </label>
            </RadioGroup>
          </label>
          <div>
            <button
              className={styles.form_button}
              type="button" onClick={props.onNextStep}>
              {props.buttonText}
            </button>
          </div>
        </fieldset>
      </ToggleDisplay>
    </section>
  );
};
// Setting property types for type checking our properties
UserDetailSection.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default UserDetailSection;
