import React from 'react';

// Wrapper to wrap our form fields in a form
const FormWrapper = (props) => {
  return (
    <div className="container">
      <div className="col-md-8">
        <form onSubmit={props.onSubmitForm}>
          {props.children}
        </form>
      </div>
    </div>
  );
};
export default FormWrapper;
