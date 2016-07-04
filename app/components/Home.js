import React from 'react';
// import the FormContainer to compose with our Home Component
import FormContainer from '../containers/FormContainer';

// Home Component as initial Home page
// Stateless functional component that returns a description of a HTML tree
const Home = (props) => {
  return (
    <div>
      <div className="jumbotron col-sm-12 text-center">
        <h1>Simple Form</h1>
        <p>Is it really that simple?</p>
      </div>
      <FormContainer />
    </div>
  );
};
export default Home;
