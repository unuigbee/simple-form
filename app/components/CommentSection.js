import React, { PropTypes } from 'react';

const CommentSection = (props) => {
  return (
    <section>
      <header>
{/* Here we access the properties passed down from our FormContainer component*/}
        <p>{props.headerTitle}</p>
      </header>
      <textarea name="comments" cols="100" rows="4" defaultValue="Enter your comments...">
      </textarea>
      <input type="submit" value={props.buttonText} />
    </section>
  );
};
// Setting property types for type checking our properties
CommentSection.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default CommentSection;
