import React from 'react';

// Wrapper to wrap our form fields in a form
const FormWrapper = (props) => {
  return (
    <div>
      <div className="col-md-8">
        {props.children}
      </div>
    </div>
  );
};
export default FormWrapper;
