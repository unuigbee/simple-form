// React namespace is neccessary to import because the transformed JSX syntax into JS code by Babel
// uses the React namespace to create these elements e.g. React.createElement(element, children, ..)
import React, { PropTypes } from 'react';

const UserDetailSection = (props) => {
  return (
    <section>
      <header>
        <p>{props.headerTitle}</p>
      </header>
      <fieldset>
        <label>Firstname:
          <input type="text" name="Firstname" placeholder="e.g. John" />
        </label>
        <label>Surname:
          <input type="text" name="Surname" placeholder="e.g. Smith" />
        </label>
        <label>Email Address:
          <input type="email" name="email" placeholder="e.g. John@gmail.com" />
        </label>
        <label>Telephone Nom.:
          <input type="text" name="telephone" placeholder="e.g. 0207 8733 825" />
        </label>
        <label>Gender:
          <input type="radio" name="genre" value="male" /> Male
          <input type="radio" name="genre" value="female" /> Female
        </label>
      </fieldset>
      <input type="submit" value={props.buttonText} />
    </section>
  );
};
// Setting property types for type checking our properties
UserDetailSection.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default UserDetailSection;
