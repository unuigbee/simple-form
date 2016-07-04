import React from 'react';
import { Link } from 'react-router';
// import the FormContainer to compose with our Home Component
import FormContainer from '../containers/FormContainer';

// Home Component as initial Home page
// Stateless functional component that returns a description of a HTML tree
const Home = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Simple Form</h1>
        <p>Is it really that simple?</p>
        {/* We use Link to route the browser to the results page on button click */}
        <Link to="results">
          <button type="button" className="btn btn-lg btn-success">
            View Users
          </button>
        </Link>
      </div>
      <FormContainer />
    </div>
  );
};
export default Home;
