// React namespace is neccessary to import because the transformed JSX syntax into JS code by Babel
// uses the React namespace to create these elements e.g. React.createElement(element, children, ..)
import React, { PropTypes } from 'react';

// import the Radio Group module for managing radio groups
import { RadioGroup, Radio } from 'react-radio-group';

// import the Toggle Display module to easily toggle our form sections between show and hide
import ToggleDisplay from 'react-toggle-display';

const UserDetailSection = (props) => {
  return (
    <section>
      <header>
        <p>{props.headerTitle}</p>
      </header>
{/* Toggle Display component alllows us to toggle the display of it's children */}
      <ToggleDisplay show={props.show}>
        <fieldset>
          <label>Firstname:
            <input
              type="text"
              name="firstname"
              value={props.fieldValues.firstname}
              onChange={props.onFieldChange}
            />
          </label>
          <label>Surname:
            <input
              type="text"
              name="surname"
              value={props.fieldValues.surname}
              onChange={props.onFieldChange}
            />
          </label>
          <label>Email Address:
            <input
              type="email"
              name="email"
              value={props.fieldValues.email}
              onChange={props.onFieldChange}
            />
          </label>
          <label>Telephone Nom.:
            <input
              type="text" name="telephone"
              onChange={props.onFieldChange}
              value={props.fieldValues.telephone}
            />
          </label>
          <label>Gender:
  {/* We use RadioGroup component to easily set checked value and retrieve selected value from onChange events*/ }
            <RadioGroup
              name="gender"
              selectedValue={props.fieldValues.gender}
              onChange={props.onFieldChange}
            >
              <label>
                <Radio value="male" />Male
              </label>
              <label>
                <Radio value="female" />Female
              </label>
            </RadioGroup>
          </label>
          <button type="button" onClick={props.onNextStep}> {props.buttonText} </button>
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
